import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {error && <p className="text-red-500">{error}</p>}
      {images.map((img) => (
        <div key={img.id} className="bg-gray-800 text-white p-3 rounded">
          <img src={img.image_files[0].file_url} alt={img.name} className="w-full h-auto" />
          <h3 className="mt-2">{img.name}</h3>
        </div>
      ))}
    </div>
  );
}