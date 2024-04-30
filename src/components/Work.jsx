import { useGSAP } from "@gsap/react";
import WaterWave from "react-water-wave";
import Lottie from "lottie-react";

import { workBackground, workScrollAnimation } from "../lib";
import { noEndTriggerPinAnimations, triggerToAnimations } from "../utils/animations";

const Work = () => {

  useGSAP(() => {
    noEndTriggerPinAnimations("#workPin", "top top", "bottom -400%");

    triggerToAnimations("#workScaleImg", {
      scale: 1,
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
  }, [])

  return (
    <>
        <section id="work" className="w-full h-[600vh] flex flex-col relative z-20">
          <div id="workPin" className="w-full h-[100vh] border-y-4 border-white absolute z-10 top-0 overflow-hidden flex items-center justify-center">
            <div id="workScaleImg" className="w-full h-full absolute top-0 scale-[1.5] left-0 z-[-1]">
              <WaterWave
                imageUrl={workBackground}
                resolution={512}
                dropRadius={20}
	              perturbance={0.04}
              >
                {methods => (
                  <div className="w-screen h-screen flex items-center justify-center">
                    <div className="flex flex-col items-end">
                      <h4 className="font-nohemiBold text-2xl translate-x-3 w-full text-left">02</h4>
                      <h1 className="font-nohemiExtraBold text-9xl">SELECTED</h1>
                      <h2 className="text-9xl text-right font-nohemiExtraLight italic">WORKS</h2>
                      <p className="max-w-[60%] font-nohemiBold uppercase">My goal is to advance user experience with every project</p>
                    </div>
                  </div> 
                )}
              </WaterWave>
            </div>
            <div className="comeup translate-y-[100%] w-full h-full border-y-4 border-white absolute top-0 left-0 z-[1] bg-red-500"></div>
            <div className="comeup translate-y-[100%] w-full h-full border-y-4 border-white absolute top-0 left-0 z-[2] bg-orange-500"></div>
            <div className="comeup translate-y-[100%] w-full h-full border-y-4 border-white absolute top-0 left-0 z-[3] bg-blue-500"></div>
            <div className="comeup translate-y-[100%] w-full h-full border-y-4 border-white absolute top-0 left-0 z-[4] bg-purple-500"></div>
            <div className="comeup translate-y-[100%] w-full h-full border-y-4 border-white absolute top-0 left-0 z-[5] bg-green-500"></div>
            <div className="comeup translate-y-[100%] w-full h-full border-y-4 border-white absolute top-0 left-0 z-[5] bg-pink-500"></div>
            <Lottie className="absolute z-20 bottom-0 right-5 size-40" animationData={workScrollAnimation} loop={true} autoPlay={true}/>
          </div>
          <div id="workImageScaleTrigger" className="w-full h-[100vh]"></div>
          <div id="bgVideoTrigger" className="w-full h-[1-vh]"></div>
        </section>
    </>
  )
}

export default Work;
