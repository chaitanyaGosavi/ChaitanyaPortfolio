import React from "react";

// Layout Components
import CustomCursor from "./components/layout/CustomCursor";
import Navbar from "./components/layout/Navbar";

// Sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

const App: React.FC = () => {
  return (
    <div className="bg-sand text-cyan relative overflow-x-hidden">
      {/* Global Effects */}
    <CustomCursor /> 

      {/* Sections */}
      <main>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact /> 
        
      </main>
    </div>
  );
};

export default App;