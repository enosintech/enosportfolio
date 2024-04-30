import { useGSAP } from "@gsap/react";
import Lottie from "lottie-react";

import { scrollAnimation } from "../lib";
import { triggerToAnimations } from "../utils/animations";

const ScrollPrompt = () => {

  useGSAP(() => {
    triggerToAnimations("#scrollPrompt", {
      opacity: 0,
      ease: "power1",
      duration: 0.5
    }, {
      trigger: "#landing",
      start: "top -5",
      toggleActions: "play none none reverse",
    })
  }, [])

  return (
    <Lottie id="scrollPrompt" animationData={scrollAnimation} loop={true} className="fixed bottom-0 right-5 w-[120px] z-[100] nonblue"/>
  )
}

export default ScrollPrompt;
