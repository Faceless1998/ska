import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home.js";
import About from "./components/about/About";
import News from "./components/news/News";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";

import { Header } from "./components/header/Header";

const App = () => {
  return (
    <>
      <div>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
