import "./App.css";
import Nav from "./components/navbar/Nav";
import Banner from "./components/banner/Banner";
import Service from "./components/service/Service";
import About from "./components/about/About";
import WorkPicture from "./components/gallery/WorkPicture";

function App() {
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
    </>
  );
}

export default App;
