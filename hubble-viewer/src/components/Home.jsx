import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';  // Importar el archivo CSS

function Home() {
  const [selectedLink, setSelectedLink] = useState(null); // Estado para manejar el enlace seleccionado

  // Función para manejar el clic en los enlaces
  const handleLinkClick = (linkName) => {
    setSelectedLink(linkName); // Establece el enlace seleccionado
  };

  return (
    <div className="home-container">
      {/* Título dinámico */}
      <motion.div
        className="home-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {selectedLink ? selectedLink.toUpperCase() : "NASA GALLERY"}
      </motion.div>

      {/* Contenedor de enlaces */}
      <nav className="nav-links">
        {/* Enlace 1 */}
        <motion.div
          className={`nav-link ${selectedLink ? 'hidden' : ''}`}
          onClick={() => handleLinkClick("NASA IMAGE API")}
          initial={{ opacity: 1 }}
          animate={{ opacity: selectedLink ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/nasa-images"
            className={`${selectedLink ? 'hidden' : ''}`}
          >
            NASA IMAGE API
          </Link>
          <span
            className={`${
              selectedLink === "NASA IMAGE API" ? "w-full" : ""
            }`}
          ></span>
        </motion.div>

        {/* Enlace 2 */}
        <motion.div
          className={`nav-link ${selectedLink ? 'hidden' : ''}`}
          onClick={() => handleLinkClick("HUBBLE GALLERY API")}
          initial={{ opacity: 1 }}
          animate={{ opacity: selectedLink ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/hubble-gallery"
            className={`${selectedLink ? 'hidden' : ''}`}
          >
            HUBBLE GALLERY API
          </Link>
          <span
            className={`${
              selectedLink === "HUBBLE GALLERY API" ? "w-full" : ""
            }`}
          ></span>
        </motion.div>
      </nav>
    </div>
  );
}

export default Home;
