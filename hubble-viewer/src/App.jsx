import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaImage from "./components/NasaImage";
import HubbleGallery from "./components/HubbleGallery";

function App() {
  return (
    <Router basename="/proyecto-hubble-viewer">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nasa-images" element={<NasaImage />} />
        <Route path="/hubble-gallery" element={<HubbleGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
