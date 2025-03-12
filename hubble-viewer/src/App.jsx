import React from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Gallery />
    </div>
  );
}
