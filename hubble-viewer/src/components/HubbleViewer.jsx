import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HubbleInfoSection from "./components/HubbleInfoSection";


const sections = [
  { title: "Launch", content: "The Hubble Space Telescope was launched in 1990..." },
  { title: "Discoveries", content: "Hubble has contributed to many astronomical discoveries..." },
  { title: "Technology", content: "Equipped with a 2.4-meter mirror, Hubble captures high-resolution images..." },
];

export default function HubbleViewer() {
  const [visibleSection, setVisibleSection] = useState(0);
  const [images, setImages] = useState({}); // Estado para almacenar las imágenes

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://images-api.nasa.gov/search?q=hubble");
        const data = await response.json();

        // Extraemos imágenes y las asignamos a las secciones
        const imageUrls = data.slice(0, sections.length).reduce((acc, image, index) => {
          acc[index] = image.image_files?.[0]?.file_url || ""; // Obtiene la primera imagen disponible
          return acc;
        }, {});

        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newIndex = Math.min(Math.floor(scrollPosition / 400), sections.length - 1);
      setVisibleSection(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white font-serif">
      <Navbar />
      {/* Sections */}
      <div className="mt-20 flex flex-col items-center space-y-40 p-10">
        {sections.map((section, index) => (
          <HubbleInfoSection
            key={index}
            title={section.title}
            content={section.content}
            image={images[index]} // Pasamos la imagen correspondiente
            isVisible={visibleSection >= index}
          />
        ))}
      </div>
    </div>
  );
}
