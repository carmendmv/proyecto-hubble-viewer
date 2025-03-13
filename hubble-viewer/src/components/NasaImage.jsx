import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "./NasaImage.css";

const NasaImage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://images-api.nasa.gov/search?q=${query}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setResults(data.collection.items);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white nasa-images">
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full bg-black py-4 border-b border-white shadow-lg z-50">
        <div className="container mx-auto flex items-center justify-between px-6 relative">
          {/* Botón de volver */}
          <div className="flex-none">
            <Link to="/" className="text-white flex items-center space-x-2">
              <ArrowLeft size={24} className="text-white" />
            </Link>
          </div>

          {/* Título centrado */}
          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold uppercase tracking-widest text-white">
            NASA IMAGE SEARCH
          </h1>

          {/* Espacio vacío a la derecha para balancear el flexbox */}
          <div className="flex-none w-24"></div>
        </div>
      </nav>

      {/* HERO FORM */}
      <div className="top-50 left-0 w-full flex flex-col items-center z-50">
        <motion.form
          onSubmit={handleSearch}
          className="flex flex-col space-y-4 w-full max-w-lg bg-white/10 p-4 rounded-lg shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ingrese término de búsqueda en inglés"
            className="p-3 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-gray-300"
          />
          <button
            type="submit"
            className="w-full bg-white text-black font-bold py-2 rounded-md hover:bg-gray-200 transition duration-300"
          >
            Buscar
          </button>
        </motion.form>
      </div>

      {/* RESULTADOS */}
      <div className="container mx-auto p-6 pt-28"> {/* Añadí pt-28 para evitar que se solape con la barra */}
        {loading && <p className="text-center text-lg">Cargando resultados...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {results.map((item) => (
            <motion.div
              key={item.data[0].nasa_id}
              className="bg-black border border-gray-700 p-4 rounded-lg shadow-lg flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {item.links && item.links[0]?.href && (
                <img
                  src={item.links[0].href}
                  alt={item.data[0]?.title || "Sin título"} // Prevención de errores si no hay título
                  className="w-full h-60 object-cover rounded-lg"
                />
              )}
              <h3 className="mt-2 text-lg font-semibold text-white text-center">
                {item.data[0]?.title?.length > 40
                  ? item.data[0].title.substring(0, 40) + "..."
                  : item.data[0]?.title || "Sin título"}
              </h3>
              <p className="mt-1 text-sm text-gray-400 text-center">
                {item.data[0]?.description
                  ? item.data[0].description.substring(0, 80) + "..."
                  : "No hay descripción disponible."}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NasaImage;
