import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black py-6 border-b border-white shadow-lg z-50">
        <div className="container mx-auto flex justify-center relative">
            <h1 className="text-3xl font-bold text-white uppercase tracking-widest">
                Hubble Gallery
            </h1>
        </div>
  </nav>
  );
}
