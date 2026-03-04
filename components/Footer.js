import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#d4c5e8] to-[#e0d5f0] text-gray-800 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand - Minimal */}
          <div>
            <p className="text-sm leading-relaxed text-gray-700">
              Handcrafted jewelry that celebrates your unique style. Quality, elegance, and timeless beauty in every piece.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">f</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">𝕏</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">📷</a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link href="/users/products" className="hover:text-black transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/users/cart" className="hover:text-black transition">
                  Cart
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Sale Items
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Support</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a href="#" className="hover:text-black transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition">
                  Return Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Contact</h3>
            <p className="text-sm text-gray-700 mb-2">📍 Bulawayo, Zimbabwe</p>
            <p className="text-sm text-gray-700 mb-2">📧 info@gleamia.com</p>
            <p className="text-sm text-gray-700">📞 +263 771 XXXX</p>
            <p className="text-sm text-gray-600 mt-4">Hours: Mon-Sat 9am-6pm</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-700">
            <p>© {new Date().getFullYear()} GLEAMIA. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-black transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-black transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-black transition">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
