import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-900 to-orange-700 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Tagline */}
        <div>
          <img src="/Images/logo.png" alt="ChopLife Logo" className="h-12 mb-4" />
          <p className="text-sm text-orange-100">
            ChopLife connects you with the best vendors, meals, and experiences across Nigeria.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/" className="hover:text-orange-300">Home</NavLink></li>
            <li><NavLink to="/menu" className="hover:text-orange-300">Shop</NavLink></li>
            <li><NavLink to="/vendors/list" className="hover:text-orange-300">Vendors</NavLink></li>
            <li><NavLink to="/events" className="hover:text-orange-300">Events</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-orange-300">Contact</NavLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><FaEnvelope /> support@choplife.ng</li>
            <li className="text-orange-100">12 Market Road, Ikeja, Lagos</li>
            <li className="text-orange-100">+234 801 234 5678</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-300">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-300">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-300">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-sm text-orange-100 border-t border-orange-300 pt-4">
        &copy; {new Date().getFullYear()} ChopLife. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
