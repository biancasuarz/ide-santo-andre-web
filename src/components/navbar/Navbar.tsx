import React, { useState } from "react";
import ide from "../../assets/images/ide.jpg";


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-mint-200 text-gray-700 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={ide}
            alt="IDE Santo André Logo"
            className="h-15 w-17 rounded-full border border-gray-300"
          />
          <h1 className="text-2xl font-semibold text-green-800">Santo André</h1>
        </div>

        {/* Menu Icon for mobile */}
        <button 
          className="lg:hidden text-gray-700" 
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation */}
        <nav className={`lg:flex space-x-6 text-lg ${isMenuOpen ? "block" : "hidden"} lg:block`}>
          <a href="./home" className="hover:text-emerald-600">Home</a>
          <a href="./sobre" className="hover:text-emerald-600">Sobre</a>
          <a href="./sejavoluntario" className="hover:text-emerald-600">Seja Voluntário</a>
          <a href="./contato" className="hover:text-emerald-600">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
