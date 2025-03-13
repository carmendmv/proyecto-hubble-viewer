import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const API_URL = "https://images-api.nasa.gov/search?q=hubble";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        const items = response.data.collection.items;
        const formattedImages = items.map((item) => {
          const { nasa_id, title } = item.data[0];
          const imageUrl = item.links?.[0]?.href;
          return { id: nasa_id, title, imageUrl };
        });
        setImages(formattedImages);
      })
      .catch(() => setError("Error al cargar imágenes"));
  }, []);

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 mt-10 pt-24 relative"
  >
    {error && <p className="text-red-500">{error}</p>}
    {images.map((img) => (
      <motion.div
        key={img.id}
        className="bg-black text-white p-4 rounded-lg shadow-lg flex flex-col items-center w-fit h-fit"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <img
          src={img.imageUrl}
          alt={img.title}
          className="w-auto h-auto max-w-full max-h-[400px] object-contain mx-auto rounded-lg"
        />
        <p className="mt-2 text-sm text-center">{img.title}</p>
      </motion.div>
    ))}

    <h3 className="absolute bottom-7 right-7 text-white flex flex-col text-lg">
        <span>Carmen de Miguel Velázquez  © Hubble Gallery </span>
      
    </h3>
  </motion.div>
  );
}
