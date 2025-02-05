import React from "react";
import { Routes, Route } from "react-router-dom";
import Services from "./Pages/Services";
import Home from "./Pages/Home";
import Support from "./Pages/Support";
import Contact from "./Pages/Contact";
import TitleContext from "./Context/TitleContext";

function App() {
  const data = "Pratham Saxena Internselite";
  return (
    <>
        <TitleContext.Provider value={{data}}>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
        <Route path="/support" element={<Support />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      </TitleContext.Provider>
    </>
  );
}

export default App;
//  Try to understand this logic because its very important for React JS.
// Component A => Component B
// App.js => A => B => C => D => E
// Data  ----------------------> Here
