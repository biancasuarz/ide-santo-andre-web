import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-mint-200 text-gray-800 py-10 px-6 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo e Nome */}
        <div className="flex items-center space-x-3">
          <img 
            src="" 
            alt="" 
            className="h-10 w-10 rounded-full border border-gray-300" // Ajusta o tamanho da logo
          />
          <span className="text-2xl font-semibold text-green-800">IDE Santo André</span>
        </div>

        {/* Redes Sociais e Links na mesma linha */}
        <div className="flex flex-wrap justify-center md:justify-between w-full md:w-auto space-x-6 md:space-x-12 mt-6 md:mt-0">
          {/* Redes Sociais */}
          <div className="flex items-center space-x-6">
            <a 
              href="https://www.instagram.com/ideepregaisantoandre" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-2xl text-gray-600 hover:text-rose-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://www.linkedin.com/ideepregai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-2xl text-gray-600 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-mint-600 transition-colors">
              Nos siga nas Redes Sociais
            </a>
            <a href="#" className="hover:text-mint-600 transition-colors">
              Nossa Missão
            </a>
            <a href="#" className="hover:text-mint-600 transition-colors">
              Seja Voluntário
            </a>
            <a href="#" className="hover:text-mint-600 transition-colors">
              Apoie o Projeto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
