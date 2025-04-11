
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Building, Heart, Users, Info, Phone, Plus, LogIn } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Home className="h-6 w-6 mr-2 text-estate-primary" />
            <span className="text-xl font-semibold text-estate-primary">PropertyHaven</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-estate-primary transition-colors">
              Home
            </Link>
            <Link to="/properties" className="text-gray-700 hover:text-estate-primary transition-colors">
              Properties
            </Link>
            <Link to="/agents" className="text-gray-700 hover:text-estate-primary transition-colors">
              Agents
            </Link>
            <Link to="/favorites" className="text-gray-700 hover:text-estate-primary transition-colors">
              Favorites
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-estate-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-estate-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button variant="outline" className="mr-2 border-estate-secondary text-estate-secondary hover:bg-estate-secondary hover:text-white" asChild>
              <Link to="/sign-in">Sign In</Link>
            </Button>
            <Button className="bg-estate-primary hover:bg-estate-accent text-white" asChild>
              <Link to="/list-property">List Property</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute w-full animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center text-gray-700 hover:text-estate-primary transition-colors" onClick={closeMenu}>
              <Home className="h-5 w-5 mr-2" />
              <span>Home</span>
            </Link>
            <Link to="/properties" className="flex items-center text-gray-700 hover:text-estate-primary transition-colors" onClick={closeMenu}>
              <Building className="h-5 w-5 mr-2" />
              <span>Properties</span>
            </Link>
            <Link to="/favorites" className="flex items-center text-gray-700 hover:text-estate-primary transition-colors" onClick={closeMenu}>
              <Heart className="h-5 w-5 mr-2" />
              <span>Favorites</span>
            </Link>
            <Link to="/agents" className="flex items-center text-gray-700 hover:text-estate-primary transition-colors" onClick={closeMenu}>
              <Users className="h-5 w-5 mr-2" />
              <span>Agents</span>
            </Link>
            <Link to="/about" className="flex items-center text-gray-700 hover:text-estate-primary transition-colors" onClick={closeMenu}>
              <Info className="h-5 w-5 mr-2" />
              <span>About</span>
            </Link>
            <Link to="/contact" className="flex items-center text-gray-700 hover:text-estate-primary transition-colors" onClick={closeMenu}>
              <Phone className="h-5 w-5 mr-2" />
              <span>Contact</span>
            </Link>
            <Link to="/list-property" className="flex items-center text-gray-700 hover:text-estate-primary transition-colors" onClick={closeMenu}>
              <Plus className="h-5 w-5 mr-2" />
              <span>List Property</span>
            </Link>
            <Link to="/sign-in" className="flex items-center text-gray-700 hover:text-estate-primary transition-colors" onClick={closeMenu}>
              <LogIn className="h-5 w-5 mr-2" />
              <span>Sign In</span>
            </Link>
            
            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="outline" className="w-full border-estate-secondary text-estate-secondary hover:bg-estate-secondary hover:text-white" asChild>
                <Link to="/sign-in">Sign In</Link>
              </Button>
              <Button className="w-full bg-estate-primary hover:bg-estate-accent text-white" asChild>
                <Link to="/list-property">List Property</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
