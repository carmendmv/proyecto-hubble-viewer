import React from "react";
import { motion } from "framer-motion";

const HubbleInfoSection = ({ title, content, imageUrl, isVisible }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: isVisible ? 1 : 0.2, y: 0 }}
    transition={{ duration: 0.8 }}
    className="card bg-dark text-white mb-4"
  >
    {imageUrl && (
      <img src={imageUrl} alt={title} className="card-img-top img-fluid" />
    )}
    <div className="card-body">
      <h2 className="card-title h4">{title}</h2>
      <p className="card-text">{content}</p>
    </div>
  </motion.div>
);

export default HubbleInfoSection;