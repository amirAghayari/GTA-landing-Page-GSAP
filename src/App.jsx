import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import FirstVideo from "./Sections/FirstVideo";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <FirstVideo />
    </main>
  );
};

export default App;
