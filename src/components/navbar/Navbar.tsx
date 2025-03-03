import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="bg-mint-200 text-gray-700 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="/logo.png" 
            alt="IDE Santo André Logo" 
            className="h-10 w-10 rounded-full border border-gray-300"
          />
          <h1 className="text-2xl font-semibold text-green-800">IDE Santo André</h1>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6 text-lg">
          <a href="./home" className="hover:text-rose-600">Home</a>
          <a href="./sobre" className="hover:text-rose-600">Sobre</a>
          <a href="./sejavoluntario" className="hover:text-rose-600">Seja Voluntário</a>
          <a href="./igrejas" className="hover:text-rose-600">Igrejas</a>
          <a href="./contato" className="hover:text-rose-600">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;