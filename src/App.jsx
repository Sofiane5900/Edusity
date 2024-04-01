import React from "react";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Programs from "./components/Programs/programmes";
import Title from "./components/Title/title";
import About from "./components/About/about";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="container">
        <Title subTitle='Notre programme' title='Que offrons nous?'/>
        <Programs />
        <About />
      </div>

    </div>
  );
}

export default App; 