// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white dark:bg-gray-900 shadow-md">
      {/* ✅ Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="/codexlabs_logo.png" // served from public/
          alt="CodexLabs Logo"
          className="h-12 w-auto" // updated size
        />
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          Tesseract CodexLabs
        </span>
      </div>

      {/* ✅ Navigation Links */}
      <ul className="flex space-x-6 text-gray-700 dark:text-gray-300 font-medium">
        <li>
          <a href="#services" className="hover:text-indigo-500">Services</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-indigo-500">Projects</a>
        </li>
        <li>
          <a href="#training" className="hover:text-indigo-500">Training</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-indigo-500">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;