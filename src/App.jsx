import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import FirstVideo from "./Sections/FirstVideo";
import Jason from "./Sections/Jason";
import SecondVideo from "./Sections/SecondVideo";
import Lucia from "./Sections/Lucia";
import PostCard from "./Sections/PostCard";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <FirstVideo />
      <Jason />
      <SecondVideo />
      <Lucia />
      <PostCard />
    </main>
  );
};

export default App;
