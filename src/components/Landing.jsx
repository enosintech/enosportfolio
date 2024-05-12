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
    <section id="landing" className="w-full flex flex-col relative">
        <div id="landingSlider" className="md:w-[250vw] w-[400vw] landingDivHeight flex overflow-x-hidden absolute top-0 left-0 z-10">
            <Hero />
            <About />
        </div>
        <div className="w-full landingDivHeight"></div>
        <div className="w-full landingDivHeight"></div>
        <div id="aboutImageGrowTrigger" className="w-full landingDivHeight"></div>
        <div className="w-full landingDivHeight"></div>
        <div id="aboutImageAppearTrigger" className="w-full landingDivHeight"></div>
        <div className="w-full landingDivHeight"></div>
        <div className="w-full landingDivHeight"></div>
    </section>
  )
}

export default Landing;
