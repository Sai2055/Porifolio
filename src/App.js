import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";

import Home from "../src/Components/Home";
import About from "../src/Components/About";
import Skills from "../src/Components/Skills";
import Contact from "../src/Components/Contact";
export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
