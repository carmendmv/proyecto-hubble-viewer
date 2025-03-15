import React, { useEffect, useState } from "react";
 

import axios from "axios";
 

import { motion } from "framer-motion";
 

import { useNavigate } from "react-router-dom";
 

import './HubbleGallery.css';
 


 

function HubbleGallery() {
 

  const [images, setImages] = useState([]);
 

  const [error, setError] = useState(null);
 

  const navigate = useNavigate();
 


 

  useEffect(() => {
 

    axios
 

      .get("https://images-api.nasa.gov/search?q=hubble")
 

      .then((response) => {
 

        const imageData = response.data.collection.items
 

          .filter((item) => item.links && item.links.length > 0) // Filtrar imágenes válidas
 

          .map((item) => {
 

            const { nasa_id, title } = item.data[0];
 

            return {
 

              id: nasa_id,
 

              title,
 

              imageUrl: item.links[0].href,
 

            };
 

          });
 

        setImages(imageData);
 

      })
 

      .catch(() => setError("Error al cargar imágenes"));
 

  }, []);
 


 

  const navigateBack = () => {
 

    navigate(-1); // Usamos el hook useNavigate para volver atrás
 

  };
 


 

  return (
 

    <div>
 

      {/* Navbar */}
 

      <nav className="fixed top-0 left-0 w-full bg-black py-6 border-b border-white flex items-center justify-between px-6 z-10">
 

        {/* Flecha para volver atrás */}
 

        <button onClick={navigateBack} className="text-white text-3xl mr-4 hover:opacity-80">
 

          ←
 

        </button>
 

        <h1 className="text-3xl font-bold text-white uppercase tracking-widest">
 

          Hubble Gallery
 

        </h1>
 

        {/* Espacio vacío a la derecha */}
        <div></div>
      </nav>
      <div className="gallery-container">
        {/* Galería */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 mt-24 pt-24 relative"
        >
          {error && <p className="text-red-500">{error}</p>}
          {images.map((img) => (
            <motion.div
              key={img.id}
              className="bg-black text-white p-4 rounded-lg shadow-lg flex flex-col items-center w-full h-full"
              whileHover={{ scale: 1.05 }} // Escalar ligeramente en hover
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <img
                src={img.imageUrl}
                alt={img.title}
                className="w-auto h-auto max-w-[95%] max-h-[95%] object-contain mx-auto rounded-lg"
              />
              <p className="mt-2 text-sm text-center">{img.title}</p>
            </motion.div>
          ))}
          <h3 className="absolute bottom-7 right-7 text-white flex flex-col text-lg">
            <span>Carmen de Miguel Velázquez © Hubble Gallery</span>
          </h3>
        </motion.div>
      </div>
    </div>
  );
}

export default HubbleGallery;