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
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4"
    >
      {error && <p className="text-red-500">{error}</p>}
      {images.map((img) => (
        <motion.div key={img.id} whileHover={{ scale: 1.05 }}>
          <div className="bg-gray-800 text-white p-3 rounded">
            <img src={img.imageUrl} alt={img.title} className="w-full h-auto" />
            <h3 className="mt-2">{img.title}</h3>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}