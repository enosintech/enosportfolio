import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import { Tilt } from "react-tilt";

import { enos2, javascript, nodejs, reactjs, scrollAnimation, tailwindcss, workScrollAnimation } from "../lib";

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

        gsap.timeline({
            scrollTrigger: {
                trigger: "#aboutImageAppearTrigger",
                start: "top 80%",
                toggleActions: "play none none reverse",
            }
        })
        .to("#aboutText", {
            backdropFilter: "blur(8px)",
            duration: 0.5,
            ease: "power1.in"
        })
        .to("#textDown", {
            y: 0,
            duration: 0.5,
            ease: "power1.in",
        }).to(split?.words, {
            color: "white",
            stagger: 0.02,
            duration: 1,
            ease: "power1.in",
        })

    }, [])

  return (
    <>
        <div id="scrollDissapearTrigger" className="md:w-[50vw] w-[100vw] h-full flex items-start justify-evenly pt-[90px]">
            <Tilt className="w-[75%] h-[80%] relative rounded-[50px] overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                <img src={enos2} className="w-full h-full object-cover absolute top-0 left-0 z-[-1]" alt="enos main"/>
                <div id="aboutText" className="w-full h-full relative z-[5] rounded-[20px] pt-14 pl-10">
                    <div id="textDown" className="flex flex-col gap-y-10 translate-y-72">
                        <h1 className="font-nohemiBold text-2xl">01. WHO</h1>
                        <p className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-2xl font-nohemiLight text-justify max-w-[80%]">
                            Hi there, I am <span className="font-nohemiExtraBold">Enos Nsamba Jr</span>, a software developer and lifelong learner. <span className="text-transparent aboutText">I have an orientation for detail and symmetrical design.</span> <span className="text-transparent aboutText">I love when things fit and I have a keen eye for when they don't.</span>
                        </p>
                    </div>
                </div>
            </Tilt>
        </div>
        <div className="md:w-[100vw] w-[200vw] h-full flex items-start xl:pl-[130px] pt-[90px]">
            <div className="w-[85%] h-[90%] rounded-[40px] backdrop-blur shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex items-center pl-20">
                <div className="h-[85%] w-[90%] flex">
                    <div className="w-[40%] h-full flex flex-col items-center relative">
                        <div className="flex flex-col text-center text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mt-2">
                            <p className="font-light stretch tracking-tighter">CURRENTLY IN</p>
                            <p className="font-black font tracking-tight stretch">LUSAKA, ZM</p>
                        </div>
                        <span className="w-[85%] h-0 border-b-4 border-white mt-5"></span>
                        <div className="w-[85%] h-[30%] mt-5 flex flex-row-reverse items-center justify-center">
                            <div className="w-full h-full flex flex-col items-center py-2">
                                <p className="font-nohemiBold w-full text-center text-md sm:text-lg md:text-[14px] lg:text-lg xl:text-xl">LOCATION INFORMATION</p>
                                <div className="w-full h-[70%] mt-3 flex flex-col">
                                {locationInfo.map((info, index) => (
                                    <div key={info.id} index={index} className="w-full h-1/3 border-b-[0.5px] border-white flex items-center justify-between">
                                        <p className="font-nohemiExtraLight text-[14px]">{info.title}</p>
                                        <p className="font-nohemiBold text-md xl:text-lg">{info.value}</p>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                        <div className="w-[85%] h-[20%] flex flex-col justify-between absolute bottom-0">
                            <p className="w-full text-right font-nohemiBold text-text-md translate-y-5 md:translate-y-7 lg:translate-y-5 xl:translate-y-0 xl:text-lg">LOCAL TIME</p>
                            <div className="flex w-full h-[75%] justify-end items-end text-5xl md:text-4xl lg:text-5xl xl:text-6xl text-nowrap">
                                <p className="font-nohemiBold">{time[0]} <span className="font-nohemiExtraLight text-3xl md:text-2xl lg:text-3xl xl:text-4xl">{time[1]}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[60%] h-full flex flex-col items-end">
                        <p className="w-[85%] text-right h-[8%] text-xl font-nohemiLight border-b-4 border-white">SUMMARY</p>
                        <div className="w-[85%] h-[92%] flex flex-col">
                            <div className="w-full h-1/3 flex">
                                <div className="w-1/2 h-full flex flex-col items-center justify-center gap-y-2">
                                    <p className="font-nohemiExtraBold text-5xl md:text-4xl xl:text-5xl">6</p>
                                    <p className="text-center font-nohemiMedium 2xl:text-[16px] xl:text-[14px] text-[10px] sm:text-[12px] md:text-[10px] lg:text-[12px]">PROFESSIONAL PROJECTS</p>
                                </div>
                                <div className="w-1/2 h-full flex flex-col items-center justify-center gap-y-2">
                                    <p className="font-nohemiExtraBold text-5xl md:text-4xl xl:text-5xl">20+</p>
                                    <p className="text-center font-nohemiMedium 2xl:text-[16px] xl:text-[14px] text-[10px] sm:text-[12px] md:text-[10px] lg:text-[12px]">LEARNING PROJECTS</p>
                                </div>
                            </div>
                            <div className="w-full h-1/3 flex flex-col items-center justify-center">
                                <p className="w-full h-[15%] text-center font-nohemiBold text-lg xl:text-xl">PREFERS</p>
                                <div className="w-full h-[85%] flex items-center justify-evenly">
                                    <img className="xl:w-[80px] w-[50px] sm:w-[60px] lg:w-[60px] md:w-[45px] object-contain" alt="tech Icon 1" src={nodejs}/>
                                    <img className="xl:w-[80px] w-[50px] sm:w-[60px] lg:w-[60px] md:w-[45px] object-contain" alt="tech Icon 2" src={javascript}/>
                                    <img className="xl:w-[80px] w-[50px] sm:w-[60px] lg:w-[60px] md:w-[45px] object-contain" alt="tech Icon 3" src={reactjs}/>
                                    <img className="xl:w-[80px] w-[50px] sm:w-[60px] lg:w-[60px] md:w-[45px] object-contain" alt="tech Icon 4" src={tailwindcss}/>
                                </div>
                            </div>
                            <div className="w-full h-1/3 flex mt-5">
                                <div className="w-[70%] h-full flex flex-col items-center justify-center bg-zinc-900 shadow rounded-[20px]">
                                    <p className="font-nohemiMedium text-lg sm:text-xl md:text-[14px] lg:text-xl 2xl:text-3xl mt-1 text-nowrap">02. SELECTED WORKS</p>
                                </div>
                                <div className="w-[30%] h-full flex items-center justify-center">
                                    <Lottie className="w-full h-full" animationData={workScrollAnimation} loop={true} autoPlay={true} />
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
