import { useGSAP } from "@gsap/react";

import { endTriggerPinAnimations, noEndTriggerPinAnimations, triggerToAnimations } from "../utils/animations";

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
            xPercent: window.innerWidth < 768 ? -70 : -60,
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
        <div id="landingSlider" className="md:w-[250vw] w-[400vw] h-[100vh] flex overflow-x-hidden absolute top-0 left-0 z-10">
            <Hero />
            <About />
        </div>
        <div id="bgPin" className="w-full h-[100vh] bg-neutral-800 flex items-center justify-center relative z-[-1]">
          <div className="absolute w-full h-full top-0 left-0 z-[-1]">
            <video key={landingBgVideo} className="w-full h-full object-cover" playsInline={true} loop={true} muted={true} autoPlay={true} controls={false}>
              <source src={landingBgVideo} type="video/mp4" />
            </video>
          </div>
          <div className="circle z-10 absolute"></div>
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
