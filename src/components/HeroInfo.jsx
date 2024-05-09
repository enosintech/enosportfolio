import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";

import { arrowIcon } from "../lib";
import { triggerToAnimations } from "../utils/animations";

const HeroInfoText = (props) => {
    return (
        <div className={`w-full h-1/3 ${props.index !== 1 ? "border-b-4" : "border-0"} border-white flex items-center justify-center`}>
            <p className="font-nohemiRegular text-4xl">{props.index !== 1 ? "WEB & MOBILE" : "DEVELOPER"}</p>
        </div>
    )
}

const HeroInfo = () => {

    useGSAP(() => {
        triggerToAnimations("#heroInfo", {
            opacity: 0,
            duration: 0.3,
        }, {
            trigger: "#eyescale",
            start: "top bottom",
            toggleActions: "play none none reverse"
        })

        const slideOptions = {
            slides: document.querySelectorAll(".slide"),
            list: document.querySelector(".slides"),
            duration: 0.3,
            lineHeight: 75,
        }

        const slideTl = gsap.timeline({
            paused: true,
            repeat: -1,
        })

        slideOptions.slides.forEach((slide, i) => {
            
            let label = "slide" + i;
            slideTl.add(label);

            if(i > 0){

                slideTl.to(slideOptions.list, {
                    duration: slideOptions.duration,
                    y: i * -1 * slideOptions.lineHeight,
                }, label);

                let letters = SplitType.create(slide, {types: "chars"}).chars;

                slideTl.from(letters, {
                    duration: slideOptions.duration,
                    y: 50,
                    stagger: slideOptions.duration / 10
                }, label);

                slideTl.to({}, {duration: 1})
            }
        })

        slideTl.play();

    }, [])

  return (
    <div id="heroInfo" className="absolute -bottom-3 right-5 w-[275px] h-[400px] flex flex-col">
        <div className="w-full h-[60%] border-y-4 border-white flex flex-col">
            <div className="text-center h-1/3 border-b-4 border-white overflow-hidden nonblue">
                <div className="w-full h-full flex flex-col slides">
                    <div className="w-full h-full min-h-full flex items-center justify-center slide">
                        <p className="font-nohemiRegular text-4xl">PROACTIVE</p>
                    </div>
                    <div className="w-full h-full min-h-full flex items-center justify-center slide">
                        <p className="font-nohemiRegular text-4xl">CREATIVE</p>
                    </div>
                    <div className="w-full h-full min-h-full flex items-center justify-center slide">
                        <p className="font-nohemiRegular text-4xl">CURIOUS</p>
                    </div>
                    <div className="w-full h-full min-h-full flex items-center justify-center slide">
                        <p className="font-nohemiRegular text-4xl">PROACTIVE</p>
                    </div>
                </div>
            </div>
            {[1,2].map((text, index) => (
                <HeroInfoText key={text} index={index} {...text}/>
            ))}
        </div>
        <div className="w-full h-[40%] flex flex-col">
            <p className="text-left w-full font-light tracking-tight mt-5">Detail Oriented, deadline keeping, aesthetics loving software developer based in lusaka.</p>
            <div className="flex items-center w-full justify-start gap-x-4 mt-3">
                <p className="font-nohemiBold text-[14px]">DISCOVER</p>
                <img className="invert size-5" src={arrowIcon} alt="link arrow"/>
            </div>
        </div>
    </div>
  )
}

export default HeroInfo;
