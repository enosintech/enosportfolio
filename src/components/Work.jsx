import { useGSAP } from "@gsap/react";
import Lottie from "lottie-react";

import WebsiteWorkComponent from "./WebsiteWorkComponent";
import AppWorkComponent from "./AppWorkComponent";

import { arrowIcon, workScrollAnimation } from "../lib";
import { noEndTriggerPinAnimations, triggerToAnimations } from "../utils/animations";
import { appWork, websiteWork } from "../constants";

const Work = () => {

  useGSAP(() => {
    
    noEndTriggerPinAnimations("#workPin", "top top", "bottom -200%");

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
        <section id="work" className="w-full flex flex-col h-[400vh] relative z-20 bg-black">
          <div id="workPin" className="w-full h-[100vh] absolute z-10 top-0 overflow-hidden flex items-center justify-center">
            <div className="w-full h-full absolute top-0 left-0 z-[-1]">
              <div id="interWater" className="w-screen flex items-center justify-center relative">
                <div className="flex flex-col items-center justify-end">
                  <h4 className="font-nohemiBold text-2xl lg:translate-x-3 w-full text-left">02</h4>
                  <h1 className="font-nohemiExtraBold text-6xl md:text-7xl lg:text-9xl">SELECTED</h1>
                  <h2 className="text-6xl md:text-7xl lg:text-9xl text-right font-nohemiExtraLight italic">WORKS</h2>
                </div>
              </div> 
            </div>
            <div className="comeup translate-y-[100%] w-full h-full border-t-4 border-white absolute top-0 left-0 z-[1]">
              <WebsiteWorkComponent {...websiteWork[0]}/>
            </div>
            <div className="comeup translate-y-[100%] w-full h-full border-t-4 border-white absolute top-0 left-0 z-[2]">
              <WebsiteWorkComponent {...websiteWork[1]}/>
            </div>
            <div className="comeup translate-y-[100%] w-full h-full border-t-4 border-white absolute top-0 left-0 z-[3]">
              <AppWorkComponent {...appWork[0]}/>
            </div>
            <div className="comeup translate-y-[100%] w-full h-full border-t-4 border-white absolute top-0 bg-black left-0 z-[5] flex items-center justify-center">
              <div className="regular z-10 flex flex-col items-center gap-y-5">
                <p className="font-nohemiMedium">DISCOVER MORE PROJECTS</p>
                <p className="font-nohemiBold text-7xl ">GITHUB</p>
                <a target="_blank" href="https://github.com/enosintech" className="rounded-full w-20 h-20 bg-white hover:opacity-70 active:opacity-50 flex items-center justify-center">
                  <img src={arrowIcon} className="size-12 -rotate-[45deg]" alt="link arrow" />
                </a>
              </div>
            </div>
            <Lottie className="absolute z-20 lg:bottom-0 top-2 left-3 lg:right-5 size-20 md:size-32 lg:size-40" animationData={workScrollAnimation} loop={true} autoPlay={true}/>
          </div>
          <div id="bgVideoTrigger" className="w-full h-[100vh]"></div>
        </section>
    </>
  )
}

export default Work;
