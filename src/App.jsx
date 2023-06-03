import "./App.css";
import Nav from "./components/navbar/Nav";
import Banner from "./components/banner/Banner";
import Service from "./components/service/Service";
import About from "./components/about/About";
import WorkPicture from "./components/gallery/WorkPicture";
import Contact from "./components/contact/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Nav />
      <div id="banner">
        <Banner />
      </div>
      <div id="service">
        <Service />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="gallery">
        <WorkPicture />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
