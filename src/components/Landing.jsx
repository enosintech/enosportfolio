import { useGSAP } from "@gsap/react";

import { noEndTriggerPinAnimations, triggerToAnimations } from "../utils/animations";

import About from "./About";
import Hero from "./Hero";

const Landing = () => {

    useGSAP(() => {

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

    }, [])

  return (
    <section id="landing" className="w-full flex h-[800vh] flex-col relative">
        <div id="landingSlider" className="md:w-[250vw] w-[400vw] bg-blue-500 h-[100vh] flex overflow-x-hidden absolute top-0 left-0 z-10">
            <Hero />
            <About />
        </div>
        <div className="w-full h-[100vh]"></div>
        <div className="w-full h-[100vh]"></div>
        <div id="aboutImageGrowTrigger" className="w-full h-[100vh]"></div>
        <div className="w-full h-[100vh]"></div>
        <div id="aboutImageAppearTrigger" className="w-full h-[100vh]"></div>
        <div className="w-full h-[100vh]"></div>
        <div className="w-full "></div>
    </section>
  )
}

export default Landing;
