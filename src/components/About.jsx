import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";

import { triggerToAnimations } from "../utils/animations";
import { enos4, javascript, nodejs, reactjs, scrollAnimation, tailwindcss } from "../lib";

const Image = (props) => {
    return (
        <img src={props.src} className="w-full h-full object-cover absolute top-0 left-0 motiv" alt={props.alt}/>
    )
}

const About = () => {

    const [ time, setTime ] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString("en-US", {timeZone: "Africa/Lusaka"}).split(" "))
        }, 1000);

        return () => clearInterval(interval);
    }, [])
    
    useGSAP(() => {

        const split = SplitType.create(".aboutText", {types: "words"});

        triggerToAnimations("#growImage", {
            height: "70%"
        }, {
            trigger: "#aboutImageGrowTrigger",
            start: "top bottom",
            end: "top top",
            toggleActions: "play none none reverse",
            scrub: 10,
        })

        triggerToAnimations(split?.words, {
            color: "white",
            stagger: 0.5,
        }, {
            trigger: "#aboutImageAppearTrigger",
            start: "top 30%",
            end: "bottom 5%",
            scrub: true,
        })

        triggerToAnimations("#divShrink", {
            scale: 0.8,
            opacity: 0,
        }, {
            trigger: "#work",
            start: "top bottom",
            end: "top top",
            scrub: true,
        })

        triggerToAnimations("#scaleDownImage", {
            scale: 1,
        }, {
            trigger: "#aboutImageGrowTrigger",
            start: "top center",
            end: "bottom top",
            scrub: 10
        })

    }, [])

  return (
    <>
        <div id="scrollDissapearTrigger" className="w-[100vw] h-full flex items-center justify-evenly pt-[90px]">
            <div id="growImage" className="w-[30%] h-[10%] rounded-[20px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] relative overflow-hidden">
                <img id="scaleDownImage" src={enos4} className="w-full h-full object-cover scale-[2]" alt="main about image"/> 
            </div>
            <div id="aboutText" className="w-[45%] h-[90%] rounded-[20px] backdrop-blur shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex flex-col gap-y-10 pt-14 pl-10">
                <h1 className="font-nohemiBold text-2xl">01. WHO</h1>
                <p className="text-5xl font-nohemiLight text-justify max-w-[80%]">
                    Hi there, I am <text className="font-nohemiExtraBold">Enos Nsamba Jr</text>, a software developer and lifelong learner. <text className="text-transparent aboutText">I have an orientation for detail and symmetrical design.</text> <text className="text-transparent aboutText">I love when things fit and I have a keen eye for when they don't.</text>
                </p>
            </div>
        </div>
        <div className="w-[100vw] h-full flex items-center pl-[130px] pt-[90px]">
            <div id="divShrink" className="w-[85%] h-[90%] rounded-[20px] backdrop-blur shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex items-center pl-20">
                <div className="h-[85%] w-[90%] flex">
                    <div className="w-[40%] h-full flex flex-col items-center relative">
                        <div className="flex flex-col text-center text-6xl mt-2">
                            <p className="font-nohemiExtraLight">CURRENTLY IN</p>
                            <p className="font-nohemiBlack tracking-wider">LUSAKA, ZM</p>
                        </div>
                        <span className="w-[85%] h-0 border-b-4 border-white mt-5"></span>
                        <div className="w-[85%] h-[30%] mt-5 flex flex-row-reverse items-center justify-center">
                            <div className="w-full h-full flex flex-col items-center py-2">
                                <p className="font-nohemiBold w-full text-center text-xl">LOCATION INFORMATION</p>
                                <div className="w-full h-[70%] mt-3 flex flex-col">
                                {locationInfo.map((info, index) => (
                                    <div key={info.id} index={index} className="w-full h-1/3 border-b-[0.5px] border-white flex items-center justify-between">
                                        <p className="font-nohemiExtraLight text-[14px]">{info.title}</p>
                                        <p className="font-nohemiBold text-lg">{info.value}</p>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                        <div className="w-[85%] h-[20%] flex flex-col justify-between absolute bottom-0">
                            <p className="w-full text-right font-nohemiBold text-lg">LOCAL TIME</p>
                            <div className="flex w-full h-[75%] justify-end items-end text-6xl text-nowrap">
                                <p className="font-nohemiBold">{time[0]} <span className="font-nohemiExtraLight text-4xl">{time[1]}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[60%] h-full flex flex-col items-end">
                        <p className="w-[85%] text-right h-[8%] text-xl font-nohemiLight border-b-4 border-white">SUMMARY</p>
                        <div className="w-[85%] h-[92%] flex flex-col">
                            <div className="w-full h-1/3 flex">
                                <div className="w-1/2 h-full flex flex-col items-center justify-center gap-y-2">
                                    <p className="font-nohemiExtraBold text-5xl">6</p>
                                    <p className="text-center font-nohemiMedium">PROFESSIONAL PROJECTS</p>
                                </div>
                                <div className="w-1/2 h-full flex flex-col items-center justify-center gap-y-2">
                                    <p className="font-nohemiExtraBold text-5xl">20+</p>
                                    <p className="text-center font-nohemiMedium">LEARNING PROJECTS</p>
                                </div>
                            </div>
                            <div className="w-full h-1/3 flex flex-col items-center justify-center">
                                <p className="w-full h-[15%] text-center font-nohemiBold text-xl">PREFERS</p>
                                <div className="w-full h-[85%] flex items-center justify-evenly">
                                    <img className="w-[80px] object-contain" alt="tech Icon 1" src={nodejs}/>
                                    <img className="w-[80px] object-contain" alt="tech Icon 2" src={javascript}/>
                                    <img className="w-[80px] object-contain" alt="tech Icon 3" src={reactjs}/>
                                    <img className="w-[80px] object-contain" alt="tech Icon 4" src={tailwindcss}/>
                                </div>
                            </div>
                            <div className="w-full h-1/3 flex mt-5">
                                <div className="w-[70%] h-full flex flex-col items-center justify-center bg-zinc-900 shadow rounded-[20px]">
                                    <p className="font-nohemiMedium text-3xl mt-1 text-nowrap">02. SELECTED WORKS</p>
                                </div>
                                <div className="w-[30%] h-full flex items-center justify-center">
                                    <Lottie className="w-full h-full" animationData={scrollAnimation} loop={true} autoPlay={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About;

const locationInfo = [
    {
    id:1,
    title: "Latitude",
    value: "-15.4155° S"
},
{
    id:2,
    title: "Longitude",
    value: "28.2773° E"
},
{
    id:3,
    title: "Temperature",
    value: "21°C"
},
]
