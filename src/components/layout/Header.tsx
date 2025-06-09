import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { Car, Menu, X, User, LogIn } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated } = useUser();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Car className="text-blue-800 h-8 w-8" />
          <span className="text-2xl font-bold text-blue-800">ParkDelt</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/find-space" className="text-gray-700 hover:text-blue-800 transition-colors">
            Find Parkering
          </Link>
          <Link to="/list-space" className="text-gray-700 hover:text-blue-800 transition-colors">
            Udlej Din Plads
          </Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-blue-800 transition-colors">
            Sådan Virker Det
          </Link>
          
          {isAuthenticated ? (
            <Link to="/profile" className="flex items-center space-x-2 text-blue-800 font-medium">
              <User className="h-5 w-5" />
              <span>{user?.name || 'Profil'}</span>
            </Link>
          ) : (
            <Link 
              to="/login" 
              className="flex items-center space-x-1 px-4 py-2 rounded-full bg-blue-800 text-white hover:bg-blue-700 transition-colors"
            >
              <LogIn className="h-4 w-4" />
              <span>Log ind</span>
            </Link>
          )}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/find-space" 
              className="text-gray-700 hover:text-blue-800 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Parkering
            </Link>
            <Link 
              to="/list-space" 
              className="text-gray-700 hover:text-blue-800 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Udlej Din Plads
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-gray-700 hover:text-blue-800 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sådan Virker Det
            </Link>
            
            {isAuthenticated ? (
              <Link 
                to="/profile" 
                className="flex items-center space-x-2 text-blue-800 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="h-5 w-5" />
                <span>{user?.name || 'Profil'}</span>
              </Link>
            ) : (
              <Link 
                to="/login" 
                className="flex items-center justify-center space-x-1 py-2 rounded-full bg-blue-800 text-white hover:bg-blue-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn className="h-4 w-4" />
                <span>Log ind</span>
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;