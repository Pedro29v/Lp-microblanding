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
      <Banner />
      <Service />
      <About />
      <WorkPicture />
    </>
  );
}

export default App;
