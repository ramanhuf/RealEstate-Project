
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Home } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-estate-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Home className="h-6 w-6 mr-2 text-estate-secondary" />
              <span className="text-xl font-semibold text-white">PropertyHaven</span>
            </div>
            <p className="text-gray-300 mb-6">
              Your trusted partner in finding the perfect property. Whether buying, selling, or renting, we make real estate simple.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-estate-secondary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-estate-secondary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-estate-secondary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-estate-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-estate-secondary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-white transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/agents" className="text-gray-300 hover:text-white transition-colors">
                  Agents
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="text-gray-300 hover:text-white transition-colors">
                  Favorites
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-estate-secondary">Property Types</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-white transition-colors">
                  Houses
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-white transition-colors">
                  Apartments
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-white transition-colors">
                  Villas
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-white transition-colors">
                  Commercial
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-white transition-colors">
                  Land
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-estate-secondary">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-estate-secondary shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  1234 Real Estate Ave<br />
                  Metro City, CA 92101
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-estate-secondary" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-estate-secondary" />
                <span className="text-gray-300">info@propertyhaven.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} PropertyHaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
