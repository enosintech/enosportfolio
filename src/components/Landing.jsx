import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { endTriggerPinAnimations, noEndTriggerPinAnimations, triggerToAnimations } from "../utils/animations";
import { landingVideos } from "../constants/index";

import About from "./About";
import Hero from "./Hero";

const Landing = () => {

    useGSAP(() => {

        const vids = gsap.utils.toArray(".motiv");
        const next = 3;
        const fade = 0.8;

        gsap.set(vids[0], {autoAlpha: 1})

        const crossFade = () => {
        gsap.timeline()
        .to(vids[0], {autoAlpha: 0, duration: fade})
        .to(vids[1], {autoAlpha: 1, duration: fade}, 0)

        vids.push(vids.shift())

        gsap.delayedCall(next, crossFade);
        }

        gsap.delayedCall(0, crossFade);

        endTriggerPinAnimations("#bgPin");

        noEndTriggerPinAnimations("#landingSlider");

        triggerToAnimations("#landingSlider", {
            xPercent: -66.66,
            ease: "power1.in"
        }, {
            trigger: "#landing",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
        })
    }, [])

  return (
    <section id="landing" className="w-full h-[800vh] flex flex-col relative" onClick={() => {
        console.log("clicked")
    }}>
        <div id="landingSlider" className="w-[300vw] h-[100vh] flex overflow-x-hidden absolute top-0 left-0 z-10">
            <Hero />
            <About />
        </div>
        <div id="bgPin" className="w-full h-[100vh] relative z-[-1]">
        {
          landingVideos.map((video, index) => (
            <video key={video.id} index={index} className="w-full h-full object-cover motiv absolute top-0 left-0" playsInline={true} loop={true} autoPlay={true} muted={true}>
                <source src={video.video} type="video/mp4"/>
            </video>
          ))
        }
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
