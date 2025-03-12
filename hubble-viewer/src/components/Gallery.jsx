import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const API_URL = "http://hubblesite.org/api/v3/images";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setImages(response.data))
      .catch(() => setError("Error al cargar imágenes"));
  }, []);

  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      {error && <p className="text-red-500">{error}</p>}
      {images.map((img) => (
        <motion.div 
          key={img.id} 
          className="bg-gray-800 text-white p-3 rounded shadow-lg"
          whileHover={{ scale: 1.05 }} // Efecto al pasar el cursor
        >
          <img 
            src={img.image_files[0].file_url} 
            alt={img.name} 
            className="w-full h-auto rounded"
          />
          <h3 className="mt-2 text-center font-semibold">{img.name}</h3>
        </motion.div>
      ))}
    </motion.div>
  );
}