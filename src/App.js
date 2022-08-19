import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home.js";
import About from "./components/about/About";

const App = () => {
  return (
    <>
      <div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
