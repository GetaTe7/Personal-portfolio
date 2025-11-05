import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
  <About />
  <Services />
  <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
