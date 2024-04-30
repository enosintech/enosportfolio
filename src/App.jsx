import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import AvailablePrompt from "./components/AvailablePrompt";
import NavBar from "./components/NavBar"
import Cursor from "./components/Cursor";
import ScrollPrompt from "./components/ScrollPrompt";

import Landing from "./components/Landing";
import Work from "./components/Work";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <>
      <ScrollPrompt />
      <AvailablePrompt />
      <Cursor />
      <NavBar />
      <Landing />
      <Work />
      <section className="">

      </section>
    </>
  )
}

export default App;

