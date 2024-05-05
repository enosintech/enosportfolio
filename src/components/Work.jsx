import { useGSAP } from "@gsap/react";
import WaterWave from "react-water-wave";
import Lottie from "lottie-react";

import { arrowIcon, workBackground, workScrollAnimation } from "../lib";
import { noEndTriggerPinAnimations, triggerToAnimations } from "../utils/animations";

const Work = () => {

  useGSAP(() => {
    
    noEndTriggerPinAnimations("#workPin", "top top", "bottom -200%");

    triggerToAnimations("#workScaleImg", {
      scale: 1,
      opacity: 1,
      ease: "power1.in",
    }, {
      trigger: "#workImageScaleTrigger",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 4,
    })

    triggerToAnimations(".comeup", {
      y: 0,
      ease: "none",
      stagger: 1
    }, {
      trigger: "#work",
      start: "top top",
      end: "bottom bottom",
      scrub: true
    })

    triggerToAnimations("#workVanishText", {
      opacity: 0,
      duration: 0.5,
    }, {
      trigger: "#workPin",
      start: "top top",
      toggleActions: "play none none reverse"
    })

  }, [])

  return (
    <>
        <section id="work" className="w-full h-[400vh] flex flex-col relative z-20">
          <div id="workPin" className="w-full h-[100vh] absolute z-10 top-0 overflow-hidden flex items-center justify-center">
            <p id="workVanishText" className="absolute top-3 left-3 text-center font-nohemiBold text-xl" >MOVE OR CLICK MOUSE OVER IMAGE TO PLAY WITH WATER</p>
            <div className="w-full h-full border-t-4 border-white absolute top-0 left-0 z-[-1]">
              <WaterWave
                imageUrl={workBackground}
                resolution={512}
                dropRadius={20}
	              perturbance={0.04}
              >
                {() => (
                  <div id="interWater" className="w-screen h-screen flex items-center justify-center relative">
                    <div id="workScaleImg" className="flex flex-col opacity-0 scale-[2.5] justify-end">
                      <h4 className="font-nohemiBold text-2xl translate-x-3 w-full text-left">02</h4>
                      <h1 className="font-nohemiExtraBold text-9xl">SELECTED</h1>
                      <h2 className="text-9xl text-right font-nohemiExtraLight italic">WORKS</h2>
                    </div>
                  </div> 
                )}
              </WaterWave>
            </div>
            <div className="comeup translate-y-[100%] w-full h-full border-t-4 border-white absolute top-0 left-0 z-[1] bg-red-500"></div>
            <div className="comeup translate-y-[100%] w-full h-full border-t-4 border-white absolute top-0 left-0 z-[2] bg-orange-500"></div>
            <div className="comeup translate-y-[100%] w-full h-full border-t-4 border-white absolute top-0 left-0 z-[3] bg-blue-500"></div>
            <div className="comeup translate-y-[100%] w-full h-full border-t-4 border-white absolute top-0 bg-black left-0 z-[5] flex items-center justify-center">
              <div className="regular z-10 flex flex-col items-center gap-y-5">
                <p className="font-nohemiMedium">DISCOVER MORE PROJECTS</p>
                <p className="font-nohemiBold text-7xl ">GITHUB</p>
                <a target="_blank" href="https://github.com/enosintech" className="rounded-full w-20 h-20 bg-white hover:opacity-70 active:opacity-50 flex items-center justify-center">
                  <img src={arrowIcon} className="size-12 -rotate-[45deg]" alt="link arrow" />
                </a>
              </div>
            </div>
            <Lottie className="absolute z-20 bottom-0 right-5 size-40" animationData={workScrollAnimation} loop={true} autoPlay={true}/>
          </div>
          <div id="workImageScaleTrigger" className="w-full h-[100vh]"></div>
          <div id="bgVideoTrigger" className="w-full h-[1-vh]"></div>
        </section>
    </>
  )
}

export default Work;
