import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-500 text-black py-10 px-6 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo e Nome */}
        <div className="flex items-center mb-6 md:mb-0">
          <img 
            src="" 
            alt="" 
            className="" // Tamanho da logo e espaço entre logo e nome
          />
          <span className="text-xl font-semibold">IDE Santo André</span>
        </div>

        {/* Redes Sociais e Links na mesma linha */}
        <div className="flex flex-wrap justify-center md:justify-between w-full md:w-auto space-x-6 md:space-x-12 mt-6 md:mt-0">
          {/* Redes Sociais */}
          <div className="flex items-center space-x-6">
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-2xl hover:text-pink-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-2xl hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-emerald-500 transition-colors">
              Nos siga nas Redes Sociais
            </a>
            <a href="#" className="hover:text-emerald-500 transition-colors">
              Nossa Missão
            </a>
            <a href="#" className="hover:text-emerald-500 transition-colors">
              Seja Voluntário
            </a>
            <a href="#" className="hover:text-emerald-500 transition-colors">
              Apoie o Projeto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
