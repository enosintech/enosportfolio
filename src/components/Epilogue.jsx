import { useGSAP } from "@gsap/react";

import { dotsIcon } from "../lib";
import { noEndTriggerPinAnimations, triggerToAnimations } from "../utils/animations";

const Epilogue = () => {
    
    useGSAP(() => {
        noEndTriggerPinAnimations("#epiloguePin", "top top", 'bottom -100%')
        
        triggerToAnimations("#contactBg", {
            width: "100%",
            height: "100%",
            borderRadius: 0,
        }, {
            trigger: "#contactTrigger",
            start: "top bottom",
            end: "top top",
            scrub: true
        })

        triggerToAnimations(".goneWord", {
            opacity : 0.05,
            duration: 0.2,
            ease: "power1.in"
        }, {
           trigger: "#contactBg",
           start: "top bottom",
           toggleActions: "play none none reverse",
        })
    }, [])

  return (
    <>
        <section className="w-full h-[200vh] flex flex-col">
            <div id="epiloguePin" className="w-full h-[100vh] flex flex-col items-center justify-center gap-y-6">
                <p className="max-w-[50%] font-nohemiMedium text-center text-4xl"> I <span className="goneWord">spend plenty of time</span> think<span className="goneWord">ing</span> about <span className="goneWord">how best to execute a clients vision. I pay close attention to</span> the finest of details <span className="goneWord">and attempt</span> to <span className="goneWord">always</span> advance user experience</p>
                <img src={dotsIcon} className="w-[50px] invert" alt="dots icon" />
                <div className="flex flex-col items-center gap-y-2">
                    <p className="font-nohemiBold">OTHER INTERESTS</p>
                    <div className="flex items-center justify-evenly gap-x-5 font-nohemiLight">
                        <p>WRITING</p>
                        <p>THOUGHT PRACTICING</p>
                        <p>BOARD GAMES</p>
                    </div>
                </div>
            </div>
            <div id="contactTrigger" className="w-full h-[100vh] relative z-10 flex items-center justify-center">
                <div id="contactBg" className="w-[30%] h-[85%] bg-white rounded-t-[2000px] rounded-b-[20px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"></div>
            </div>
        </section>
    </>
  )
}

export default Epilogue;
