import { useGSAP } from "@gsap/react";

import { endTriggerPinAnimations, noEndTriggerPinAnimations, noTriggerToAnimations, triggerToAnimations } from "../utils/animations";

import ModelView from "./ModelView";
import About from "./About";
import Hero from "./Hero";
import HeroInfo from "./HeroInfo";

import { landingBgVideo } from "../lib";

const Landing = () => {

    useGSAP(() => {

        endTriggerPinAnimations("#bgPin");

        noEndTriggerPinAnimations("#landingSlider");

        triggerToAnimations("#landingSlider", {
            xPercent: -58,
            ease: "power1.in"
        }, {
            trigger: "#landing",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
        })

        triggerToAnimations(".circle", {
          opacity: 0,
        }, {
          trigger: "#eyescale",
          start: "top bottom",
          toggleActions: "play none none reverse"
        })

    }, [])

  return (
    <section id="landing" className="w-full h-[800vh] flex flex-col relative">
        <div id="landingSlider" className="w-[250vw] h-[100vh] flex overflow-x-hidden absolute top-0 left-0 z-10">
            <Hero />
            <About />
        </div>
        <div id="bgPin" className="w-full h-[100vh] bg-neutral-800 flex items-center justify-center relative z-[-1]">
          <div className="absolute w-full h-full top-0 left-0 z-[-1]">
            <video key={landingBgVideo} className="w-full h-full object-cover" playsInline={true} loop={true} muted={true} autoPlay={true} controls={false}>
              <source src={landingBgVideo} type="video/mp4" />
            </video>
          </div>
          <div className="circle border-8 z-10 border-white absolute shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"></div>
            <ModelView />
            <HeroInfo />
        </div>
        <div className="w-full h-[100vh]"></div>
        <div className="w-full h-[100vh]"></div>
        <div id="aboutImageGrowTrigger" className="w-full h-[100vh]"></div>
        <div className="w-full h-[100vh]"></div>
        <div id="aboutImageAppearTrigger" className="w-full h-[100vh]"></div>
        <div className="w-full h-[100vh]"></div>
        <div className="w-full h-[100vh]"></div>
    </section>
  )
}

export default Landing;
