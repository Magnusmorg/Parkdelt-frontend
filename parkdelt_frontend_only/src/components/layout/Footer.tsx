import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="text-teal-500 h-6 w-6" />
              <span className="text-xl font-bold">ParkDelt</span>
            </div>
            <p className="text-gray-400 mb-4">
              Del din parkeringsplads og tjen penge, eller find billig parkering hvor du har brug for det.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/find-space" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Find Parkering
                </Link>
              </li>
              <li>
                <Link to="/list-space" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Udlej Din Plads
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Sådan Virker Det
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Juridisk</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Vilkår og Betingelser
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Privatlivspolitik
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-400 hover:text-teal-500 transition-colors">
                  Cookie Politik
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="text-teal-500 h-5 w-5" />
                <span className="text-gray-400">kontakt@parkdelt.dk</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="text-teal-500 h-5 w-5" />
                <span className="text-gray-400">+45 12 34 56 78</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} ParkDelt. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;