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
      trigger: "#aboutImageGrowTrigger",
      start: "top top",
      toggleActions: "play none none reverse",
    })
  }, [])

  return (
    <Lottie id="scrollPrompt" animationData={scrollAnimation} loop={true} className="fixed bottom-0 left-5 w-[120px] pointer-events-none z-[100] nonblue"/>
  )
}

export default ScrollPrompt;
