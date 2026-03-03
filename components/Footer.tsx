export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-8">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold">GLEAMIA Jewellery</h2>
          <p className="text-sm mt-2">
            Elegant necklaces, rings, earrings & accessories crafted with love.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/products">Shop</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/orders">Orders</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm">Bulawayo, Zimbabwe</p>
          <p className="text-sm">+263 7XX XXX XXX</p>
        </div>

      </div>

      <div className="text-center text-sm border-t border-gray-700 py-4">
        © {new Date().getFullYear()} GLEAMIA. All rights reserved.
      </div>
    </footer>
  );
}