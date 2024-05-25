import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import AvailablePrompt from "./components/AvailablePrompt";
import NavBar from "./components/NavBar"
import Cursor from "./components/Cursor";
import ScrollPrompt from "./components/ScrollPrompt";

import Landing from "./components/Landing";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Epilogue from "./components/Epilogue";
import EyeTrigger from "./components/EyeTrigger";
import LandingBg from "./components/LandingBg";

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  return (
    <>
      <ScrollPrompt />
      <AvailablePrompt />
      <Cursor />
      <NavBar />
      <LandingBg />
      <Landing />
      <EyeTrigger />
      <Work />
      <Skills />
      <Epilogue />
    </>
  )
}

export default App;

