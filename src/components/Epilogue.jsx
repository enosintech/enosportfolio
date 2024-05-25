import { useGSAP } from "@gsap/react";
import { contactData } from "../constants";

import { dotsIcon, arrowIcon, boldArrowIcon } from "../lib";
import { triggerToAnimations } from "../utils/animations";

const ContactMessage = (props) => {
    return (
        <div className="w-full h-1/3 border-b-4 border-white flex items-center justify-end">
            <input placeholder={props.placeholder} className="w-full bg-transparent h-full text-right outline-none px-5 font-nohemiMedium text-white text-3xl placeholder:text-white placeholder:opacity-50" />
        </div>
    )
}

const Epilogue = () => {
    
    useGSAP(() => {

        triggerToAnimations(".goneWord", {
            opacity : 0.05,
            duration: 0.8,
            ease: "power1.in"
        }, {
            trigger: "#contactBg",
            start: "top bottom",
            toggleActions: "play none none reverse"
        })

    }, [])

  return (
    <>
        <section id="propose" className="w-full h-[100vh] flex flex-col items-center justify-center gap-y-6 bg-black">
            <p className="max-w-[50%] font-nohemiMedium text-center text-xl lg:text-4xl"> I <span className="goneWord">spend plenty of time</span> think<span className="goneWord">ing</span> about <span className="goneWord">how best to execute a clients vision. I pay close attention to</span> the finest of details <span className="goneWord">and attempt</span> to <span className="goneWord">always</span> advance user experience</p>
            <img src={dotsIcon} className="w-[50px] invert" alt="dots icon" />
            <div className="flex flex-col items-center gap-y-2">
                <p className="font-nohemiBold">OTHER INTERESTS</p>
                <div className="flex items-center justify-evenly text-[12px] lg:text-[16px] gap-x-5 font-nohemiLight">
                    <p>WRITING</p>
                    <p>THOUGHT PRACTICING</p>
                    <p>BOARD GAMES</p>
                </div>
            </div>
        </section>
        <section id="contactTrigger" className="w-full h-[100vh] relative z-10 flex items-center justify-center bg-black">
            <div id="contactBg" className="w-full relative h-full overflow-hidden">
                <div className="flex flex-col absolute z-[1000] bottom-3 right-2 sm:right-4 md:right-7 lg:right-10 items-center gap-y-2">
                    <div className="hover:opacity-70 active:opacity-50 navlink lg:w-14 md:w-12 w-10 lg:h-14 md:h-12 h-10 rounded-full bg-zinc-900 flex items-center justify-center">
                        <img src={arrowIcon} className="md:size-8 size-6 -rotate-90 invert" alt="scroll arrow"/>
                    </div>
                    <p className="font-nohemiMedium md:text-[16px] sm:text-[14px] text-[12px]">BACK TO TOP</p>
                </div>
                <div className="absolute lg:flex hidden top-5 right-4 sm:right-6 lg:right-10 pr-1 rounded-full overflow-hidden w-[150px] sm:w-[200px] lg:w-[225px] h-[50px] z-[100] items-center shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-zinc-900 nonblue">
                    <div className="h-full w-[20%] flex items-center justify-center rounded-l-full">
                    <span id="shadowAnimation" className="lg:w-4 sm:w-3 w-2 lg:h-4 sm:h-3 h-2 rounded-full bg-[#2dbf19]"></span>
                    </div>
                    <div className="h-[80%] rounded-full w-[80%] flex items-center pl-5 overflow-hidden group navlink">
                        <p id="textSlider" className="text-nowrap font-nohemiBold text-sm sm:text-md lg:text-lg group-hover:text-themeblue transition-all">AVAILABLE FOR FULL TIME AND FREELANCE WORK</p>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col">
                    <div className="w-full h-[11%] lg:pl-5 flex items-center justify-center">
                        <p className="absolute lg:block hidden left-10 font-nohemiExtraBold text-lg">© {new Date().getFullYear()} ENOSINTECH</p>
                        <ul className="flex items-center gap-x-5 sm:gap-x-10 font-nohemiMedium sm:text-[16px] text-[14px]">
                            <li className="flex items-center gap-x-1 sm:gap-x-2">
                                <a href="https://www.linkedin.com/in/enosintech/" target="_blank" className="hover:opacity-70 active:opacity-50 translate-y-[1px]">LINKEDIN</a>
                                <img className="invert -rotate-45 size-4 sm:size-5" src={boldArrowIcon}/>
                            </li>
                            <li className="flex items-center gap-x-2">
                                <a href="https://read.cv/enosintech" target="_blank" className="hover:opacity-70 active:opacity-50">READ.CV</a>
                                <img className="invert -rotate-45 size-4 sm:size-5" src={boldArrowIcon}/>
                            </li>
                            <li className="flex items-center gap-x-2">
                                <a href="https://github.com/enosintech" target="_blank" className="hover:opacity-70 active:opacity-50">GITHUB</a>
                                <img className="invert -rotate-45 size-4 sm:size-5" src={boldArrowIcon}/>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center justify-center w-full h-[10%]">
                        <div className="flex w-fit items-center gap-x-3 p-3 border-[3px] border-white rounded-full">
                            <p className="font-nohemiMedium">enos.nsambaj@gmail.com</p>
                            <p className="font-nohemiExtraBold hover:opacity-70 active:opacity-50 navlink">COPY</p>
                        </div>
                    </div>
                    <div className="w-full lg:h-[50%] h-[70%] flex lg:flex-row flex-col items-center lg:items-start pt-14 justify-between px-10">
                        <div className="flex flex-col md:w-[60%] sm:w-[80%] w-full lg:w-[40%] lg:max-w-[40%] lg:min-h-full min-h-[40%] gap-y-5">
                            <p className="font-nohemiMedium text-center lg:text-justify text-2xl lg:text-5xl">Reach out today! <span className="text-white">You maybe have a project idea 💡, want to collab 🤝, hire me long term ♾️, or simply say hello 👋🏾 . It does not matter!</span></p>
                        </div>
                        <div className="lg:max-w-[40%] lg:w-[40%] -translate-y-14 lg:h-full h-[60%] flex flex-col">
                            <div className="h-[80%] flex flex-col">
                                {contactData.map((contact, index) => (
                                    <ContactMessage key={contact.id} index={index} {...contact}/>
                                ))}
                            </div>
                            <div className="w-full h-[20%] flex items-center justify-center lg:justify-end px-2">
                                <div className="p-4 mt-5 rounded-full navlink bg-white hover:opacity-70 active:opacity-50">
                                    <p className="text-black text-lg font-nohemiBold">REACH OUT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Epilogue;
