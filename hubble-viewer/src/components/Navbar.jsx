import React from "react";
import { FaRocket } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 text-white flex items-center">
      <FaRocket className="mr-2" />
      <h1 className="text-xl">Explorador del Universo</h1>
    </nav>
  );
}