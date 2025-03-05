import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import ide from "../../assets/images/ide.jpg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-mint-200 text-gray-800 py-10 px-6 md:px-20">
      <div className="container mx-auto flex flex-col items-center justify-between">
        {/* Logo e Nome */}
        <div className="flex items-center space-x-3 mb-6">
          <img
            src={ide}
            alt="IDE Santo André Logo"
            className="h-15 w-17 rounded-full border border-gray-300"
          />
          <span className="text-2xl font-semibold text-green-800">Santo André</span>
        </div>

        {/* Redes Sociais centralizadas */}
        <div className="flex justify-center space-x-6 mb-6">
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
          <a href="./sobre" className="hover:text-mint-600 transition-colors">
            Nossa Missão
          </a>
          <a href="./sejavoluntario" className="hover:text-mint-600 transition-colors">
            Seja Voluntário
          </a>
          <a href="./contato" className="hover:text-mint-600 transition-colors">
            Apoie o Projeto
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
