import React from "react";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Programs from "./components/Programs/programmes";
import Title from "./components/Title/title";
import About from "./components/About/about";
import Campus from "./components/Campus/campus";
import Testimonials from "./components/Testimonials/testimonials";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import VideoPlayer from "./components/VideoPlayer/videoplayer";

const App = () => {

  const [playState, setPlayState] = React.useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Notre programme' title='Que offrons nous? '/>
        <Programs />
        <About  setPlayState={setPlayState}/>
        <Title subTitle='Gallerie' title='Les photos du campus'/>
        <Campus />
        <Title subTitle='Témoignages' title='Ce que disent les étudiants ?'/>
        <Testimonials />
        <Title subTitle='Contact' title='Des questions ?'/>
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  );
}

export default App; 