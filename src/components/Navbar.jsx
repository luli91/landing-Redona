import React from "react";
import redonaLogo from "../assets/ReDona_logo.png"; 

const Navbar = () => {
  return (
    <div className="bg-[#C2ECEB]">
    <nav className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4 lg:px-8">
      <div className="flex items-center gap-3">
        <img
          src={redonaLogo}
          alt="Logo"
          className="w-20 h-20 object-contain"
        />
      </div>
      <ul className="hidden md:flex gap-8 font-medium">
        <li>
          <a href="#how-it-works" className="hover:text-teal-600">
            Cómo funciona
          </a>
        </li>
        <li>
          <a href="#features" className="hover:text-teal-600">
            ¿Por qué donar?
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-teal-600">
            Contacto
          </a>
        </li>
      </ul>
      <a
        href="https://www.integracionav.com.ar/login"
        className="hidden md:block bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition"
      >
        Empezar
      </a>
    </nav>
    </div>
  );
};

export default Navbar;
