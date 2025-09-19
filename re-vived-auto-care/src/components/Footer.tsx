import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Re-vived Auto Care
            </h3>
            <p className="text-gray-300">
              Premium car detailing services that bring your vehicle back to
              life.
            </p>
          </div>

          <div>
            <h4 className="text-md font-medium text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link
                href="/services"
                className="block text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="block text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-md font-medium text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Re-vived Auto Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
