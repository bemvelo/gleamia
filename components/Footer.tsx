export default function Footer() {
  return (
    <footer className="bg-gray-200 text-black text-center p-4 mt-10">
      <p>© {new Date().getFullYear()} GLEAMIA. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-2">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  );
}
