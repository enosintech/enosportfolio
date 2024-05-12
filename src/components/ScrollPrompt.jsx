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
    <div className="fixed h-full left-3 md:left-5 pointer-events-none z-[100] flex items-start md:items-end">
      <Lottie id="scrollPrompt" animationData={scrollAnimation} loop={true} className="h-fit w-[90px] lg:w-[120px] nonblue"/>
    </div>
  )
}

export default ScrollPrompt;
