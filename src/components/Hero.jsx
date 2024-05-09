import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { enos1, enos2, enos3, enos4, enos5 } from "../lib";
import { noTriggerToAnimations } from "../utils/animations";

const isTouchDevice = "ontouchstart" in window;

const Hero = () => {

    useGSAP(() => {

        const heroImgs = gsap.utils.toArray(".heroSwitch");

        gsap.set(heroImgs[0], { autoAlpha: 1})

        const crossFade = () => {
            gsap.timeline()
            .to(heroImgs[0], {autoAlpha: 0, duration: 0.3})
            .to(heroImgs[1], {autoAlpha: 1, duration: 0.3}, 0)
    
            heroImgs.push(heroImgs.shift())
    
            gsap.delayedCall(1, crossFade);
            }

        gsap.delayedCall(0, crossFade)    

        if(isTouchDevice){
            return;
        }

        const heroHoverContainer = document.getElementById("heroHoverContainer");

        gsap.set("#heroDrag", {xPercent: -50, yPercent: -50})

        heroHoverContainer.addEventListener("mousemove", (e) => {

            noTriggerToAnimations("#heroDrag", {
                duration : 0.5,
                x: e.clientX,
                y: e.clientY,
                ease: "power1.in"
            });
        })

        heroHoverContainer.addEventListener("mouseenter", () => {
            noTriggerToAnimations("#heroDrag", {
                duration: 0.5,
                opacity: 1,
                ease: "power1.in"
            })
        })

        heroHoverContainer.addEventListener("mouseleave", () => {
            noTriggerToAnimations("#heroDrag", {
                duration : .5,
                opacity :0,
                ease: "power1.in"
            })
        })

    }, [])

  return (
    <div className="w-[100vw] h-full flex flex-col items-center justify-center text-[102px] leading-[102px] relative">
        <div id="heroDrag" className="w-[250px] h-[300px] opacity-0 nonblue rounded-[20px] absolute top-0 left-0 overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            <img src={enos2} className="w-full h-full object-cover absolute top-0 left-0 heroSwitch" alt="hero Image 1"/>
            <img src={enos3} className="w-full h-full object-cover absolute top-0 left-0 heroSwitch" alt="hero Image 2"/>
            <img src={enos4} className="w-full h-full object-cover absolute top-0 left-0 heroSwitch" alt="hero Image 3"/>
            <img src={enos5} className="w-full h-full object-cover absolute top-0 left-0 heroSwitch" alt="hero Image 4"/>
            <img src={enos1} className="w-full h-full object-cover absolute top-0 left-0 heroSwitch" alt="hero Image 5"/>
        </div>
        <div id="heroHoverContainer" className="absolute w-full h-full"></div>
    </div>
  )
}

export default Hero;
