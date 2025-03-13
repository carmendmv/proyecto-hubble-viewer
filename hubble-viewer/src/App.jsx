import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import axios from "axios";
import "./App.css";


const API_URL = "https://images-api.nasa.gov/search?q=hubble";

export default function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      const items = response.data.collection.items;
      const formattedImages = items.map((item) => item.links?.[0]?.href);
      setImages(formattedImages);
    });
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <div className="relative z-10 p-10 text-center text-white">
        <h1 className="text-4xl font-bold">Hubble Space Images</h1>
      </div>
      <div className="relative z-20">
        <Gallery />
      </div>
    </div>
  );
}