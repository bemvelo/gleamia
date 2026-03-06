"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const signup = async () => {
    if (!email || !password || !confirmPassword) { setError("Please fill in all fields"); return; }
    if (password !== confirmPassword) { setError("Passwords do not match"); return; }
    if (password.length < 6) { setError("Password must be at least 6 characters"); return; }
    setLoading(true);
    setError("");
    try {
      const { data, error: authError } = await supabase.auth.signUp({ email, password });
      if (authError) { setError(authError.message || "Sign up failed."); setLoading(false); return; }
      if (!data.user) { setError("Sign up failed. Please try again."); setLoading(false); return; }
      const role = email === "admin@gleamia.com" ? "admin" : "user";
      const { error: insertError } = await supabase.from("users").insert({ id: data.user.id, email, role, created_at: new Date().toISOString() });
      if (insertError) { setError(insertError.message || "Failed to create user profile"); setLoading(false); return; }
      router.push(role === "admin" ? "/admin" : "/users/products");
    } catch (error) {
      setError(error.message || "Sign up failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => { if (e.key === "Enter") signup(); };

  const inputStyle = {
    width: "100%", padding: "12px 16px", border: "2px solid #d4c8f0", borderRadius: "10px",
    fontSize: "14px", color: "#1a1a2e", background: "#fff", outline: "none",
    boxSizing: "border-box", fontFamily: "inherit", marginBottom: 0, transition: "border-color 0.2s"
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #e8dff5 0%, #f0ebf8 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 16px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <div style={{ width: "100%", maxWidth: "420px" }}>

        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: "700", letterSpacing: "5px", color: "#6c3fc5" }}>GLEAMIA</span>
          </Link>
          <p style={{ color: "#9b72e0", fontSize: "13px", marginTop: "6px", letterSpacing: "1px" }}>YOUR JEWELLERY DESTINATION</p>
        </div>

        {/* Card */}
        <div style={{ background: "rgba(255,255,255,0.92)", borderRadius: "20px", padding: "36px 32px", boxShadow: "0 8px 32px rgba(108,63,197,0.18)", border: "1px solid #e4d8f8" }}>

          <p style={{ textAlign: "center", fontSize: "11px", letterSpacing: "4px", color: "#9b72e0", fontWeight: "700", textTransform: "uppercase", marginBottom: "8px" }}>Create Account</p>
          <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#1a1a2e", textAlign: "center", marginBottom: "28px" }}>Sign Up</h2>

          {error && (
            <div style={{ background: "#fef2f2", border: "1px solid #fca5a5", borderLeft: "4px solid #ef4444", color: "#991b1b", padding: "10px 14px", borderRadius: "8px", fontSize: "13px", marginBottom: "20px" }}>
              {error}
            </div>
          )}

          {/* Email */}
          <div style={{ marginBottom: "16px" }}>
            <label style={{ fontSize: "13px", fontWeight: "600", color: "#4a4a6a", display: "block", marginBottom: "6px" }}>Email Address</label>
            <input
              type="email" placeholder="you@example.com" value={email}
              onChange={e => setEmail(e.target.value)} onKeyPress={handleKeyPress} disabled={loading}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = "#6c3fc5"}
              onBlur={e => e.target.style.borderColor = "#d4c8f0"}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: "16px" }}>
            <label style={{ fontSize: "13px", fontWeight: "600", color: "#4a4a6a", display: "block", marginBottom: "6px" }}>Password</label>
            <input
              type="password" placeholder="Min. 6 characters" value={password}
              onChange={e => setPassword(e.target.value)} onKeyPress={handleKeyPress} disabled={loading}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = "#6c3fc5"}
              onBlur={e => e.target.style.borderColor = "#d4c8f0"}
            />
          </div>

          {/* Confirm Password */}
          <div style={{ marginBottom: "28px" }}>
            <label style={{ fontSize: "13px", fontWeight: "600", color: "#4a4a6a", display: "block", marginBottom: "6px" }}>Confirm Password</label>
            <input
              type="password" placeholder="Re-enter your password" value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)} onKeyPress={handleKeyPress} disabled={loading}
              style={{ ...inputStyle, borderColor: confirmPassword && confirmPassword !== password ? "#ef4444" : "#d4c8f0" }}
              onFocus={e => e.target.style.borderColor = "#6c3fc5"}
              onBlur={e => e.target.style.borderColor = confirmPassword && confirmPassword !== password ? "#ef4444" : "#d4c8f0"}
            />
            {confirmPassword && confirmPassword !== password && (
              <p style={{ fontSize: "12px", color: "#ef4444", marginTop: "4px" }}>Passwords do not match</p>
            )}
          </div>

          {/* Submit */}
          <button
            onClick={signup} disabled={loading}
            style={{ width: "100%", background: loading ? "#9b72e0" : "linear-gradient(135deg, #6c3fc5, #9b72e0)", color: "#fff", border: "none", padding: "14px", borderRadius: "10px", fontSize: "15px", fontWeight: "700", cursor: loading ? "not-allowed" : "pointer", boxShadow: "0 4px 14px rgba(108,63,197,0.35)", letterSpacing: "0.5px", marginBottom: "20px" }}>
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ flex: 1, height: "1px", background: "#e4d8f8" }} />
            <span style={{ fontSize: "12px", color: "#a0a0c0" }}>or</span>
            <div style={{ flex: 1, height: "1px", background: "#e4d8f8" }} />
          </div>

          {/* Login link */}
          <p style={{ textAlign: "center", fontSize: "14px", color: "#6b6b8a", marginBottom: "12px" }}>
            Already have an account?{" "}
            <Link href="/login" style={{ color: "#6c3fc5", fontWeight: "700", textDecoration: "none" }}>Login</Link>
          </p>

          {/* Back home */}
          <p style={{ textAlign: "center", fontSize: "13px" }}>
            <Link href="/" style={{ color: "#9b72e0", textDecoration: "none", fontWeight: "500" }}>← Back to Home</Link>
          </p>

        </div>

        {/* Terms */}
        <p style={{ textAlign: "center", fontSize: "11px", color: "#a0a0c0", marginTop: "20px" }}>
          By signing up, you agree to our{" "}
          <Link href="/privacy" style={{ color: "#9b72e0" }}>Privacy Policy</Link>
          {" "}and{" "}
          <Link href="/terms" style={{ color: "#9b72e0" }}>Terms & Conditions</Link>
        </p>

      </div>
    </div>
  );
}