import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { noEndTriggerPinAnimations } from "../utils/animations";

const Skills = () => {

    useGSAP(() => {
        noEndTriggerPinAnimations("#skillsPin", "top top", "bottom -200%");

        gsap.timeline({
            scrollTrigger: {
                trigger: '#skills',
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            }
        })
        .to("#card1", {
            xPercent: -115,
            opacity: 0,
        })
        .to("#card2", {
            left: 0,
            height: "100%",
        }, "<")
        .to("#orangeOpacity", {
            opacity: 1,
        }, "<")
        .to("#card3", {
            height: "90%",
            left: 80,
        }, "<")
        .to("#purpleOpacity", {
            opacity: 0.5,
        }, "<")
        .to("#card4", {
            height: "80%",
            left: 150,
        }, "<")
        .to("#yellowOpacity", {
            opacity: 0.4,
        }, "<")
        .to("#card5", {
            height: "70%",
            left: 210,
        }, "<")
        .to("#blueOpacity", {
            opacity: 0.3,
        }, "<")
        .to("#card6", {
            height: "60%",
            left: 260,
        }, "<")
        .to("#pinkOpacity", {
            opacity: 0.2,
        }, "<")
        .to("#card2", {
            xPercent: -115,
            opacity: 0,
        }, ">")
        .to("#card3", {
            height: "100%",
            left: 0,
        }, "<")
        .to("#purpleOpacity", {
            opacity: 1,
        }, "<")
        .to("#card4", {
            height: "90%",
            left: 80,
        }, "<")
        .to("#yellowOpacity", {
            opacity: 0.5,
        }, "<")
        .to("#card5", {
            height: "80%",
            left: 150,
        }, "<")
        .to("#blueOpacity", {
            opacity: 0.4,
        }, "<")
        .to("#card6", {
            height: "70%",
            left: 210,
        }, "<")
        .to("#pinkOpacity", {
            opacity: 0.3,
        }, "<")
        .to("#card3", {
            xPercent: -115,
            opacity: 0,
        }, ">")
        .to("#card4", {
            height: "100%",
            left: 0,
        }, "<")
        .to("#yellowOpacity", {
            opacity: 1,
        }, "<")
        .to("#card5", {
            height: "90%",
            left: 80,
        }, "<")
        .to("#blueOpacity", {
            opacity: 0.5,
        }, "<")
        .to("#card6", {
            height: "80%",
            left: 150,
        }, "<")
        .to("#pinkOpacity", {
            opacity: 0.4,
        }, "<")
        .to("#card4", {
            xPercent: -115,
            opacity: 0,
        }, ">")
        .to("#card5", {
            height: "100%",
            left: 0
        }, "<")
        .to("#blueOpacity", {
            opacity: 1,
        }, "<")
        .to("#card6", {
            height: "90%",
            left: 80,
        }, "<")
        .to("#pinkOpacity", {
            opacity: 0.5,
        }, "<")
        .to("#card5", {
            xPercent: -115,
            opacity: 0,
        }, ">")
        .to("#card6", {
            height: "100%",
            left: 0
        }, "<")
        .to("#pinkOpacity", {
            opacity: 1,
        }, "<")
    }, [])

  return (
    <section id="skills" className="w-full h-[400vh] flex flex-col">
        <div id="skillsPin" className="w-full h-[100vh] flex items-center justify-center">
            <div className="w-[85%] h-[85%] flex flex-col pt-5">
                <p className="font-nohemiMedium text-8xl text-nowrap translate-y-2">SKILLS &</p>
                <p className="font-nohemiExtraBold text-9xl">SERVICES</p>
                <div className="w-full h-[55%] mt-20 relative flex items-center justify-start">
                    <div id="card1" className="w-[65%] h-full bg-red-500 rounded-[20px] z-[6] absolute shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"></div>
                    <div id="card2" className="w-[65%] h-[90%] left-[80px] bg-black rounded-[20px] z-[5] absolute overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                        <div id="orangeOpacity" className="bg-orange-500 opacity-50 w-full h-full"></div>
                    </div>
                    <div id="card3" className="w-[65%] h-[80%] left-[150px] bg-black rounded-[20px] z-[4] absolute overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                        <div id="purpleOpacity" className="bg-purple-500 opacity-40 w-full h-full"></div>
                    </div>
                    <div id="card4" className="w-[65%] h-[70%] left-[210px] bg-black rounded-[20px] z-[3] absolute overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                        <div id="yellowOpacity" className="bg-yellow-500 opacity-30 w-full h-full"></div>
                    </div>
                    <div id="card5" className="w-[65%] h-[60%] left-[260px] bg-black rounded-[20px] z-[2] absolute overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                        <div id="blueOpacity" className="bg-blue-500 opacity-20 w-full h-full"></div>
                    </div>
                    <div id="card6" className="w-[65%] h-[50%] left-[310px] bg-black rounded-[20px] z-[1] absolute overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                        <div id="pinkOpacity" className="bg-pink-500 opacity-10 w-full h-full"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;
