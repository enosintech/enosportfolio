import { useGSAP } from "@gsap/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons"

import { noTriggerToAnimations, triggerToAnimations } from "../utils/animations";

const AvailablePrompt = () => {

    useGSAP(() => {
        noTriggerToAnimations("#textSlider", {
            duration: 10,
            xPercent: -70,
            ease: "none",
            yoyo: true,
            repeat: -1,
        })

        triggerToAnimations("#playSettings", {
          opacity: 0,
          xPercent: -200,
          ease: "power1.in"
        }, {
            trigger: "#work",
            start: "top 10%",
            toggleActions: "play none none reverse"
        })

    }, [])

  return (
    <>
      <div className="fixed top-5 right-10 pr-1 rounded-full overflow-hidden w-[225px] h-[50px] z-[100] flex items-center shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-zinc-900 nonblue">
        <div className="h-full w-[20%] flex items-center justify-center rounded-l-full">
          <span id="shadowAnimation" className="w-4 h-4 rounded-full bg-[#2dbf19]"></span>
        </div>
        <div className="h-[80%] rounded-full w-[80%] flex items-center pl-5 overflow-hidden group navlink">
              <p id="textSlider" className="text-nowrap font-nohemiBold text-lg group-hover:text-themeblue transition-all">AVAILABLE FOR FULL TIME AND FREELANCE WORK</p>
        </div>
      </div>
      <div id="playSettings" className="fixed left-10 top-5 z-[100] flex items-center justify-center pl-5 pr-1 h-14 gap-x-4 rounded-full bg-zinc-900 shadow">
          <FontAwesomeIcon icon={faPause} color="white" size="xl" className="hover:opacity-70 navlink active:opacity-50"/>
          <div className="px-4 h-[90%] flex items-center">
              <p className="font-nohemiSemiBold text-[14px] hover:opacity-70 active:opacity-50 navlink">HIDE CONTENT</p>
          </div>
      </div>
    </>
  )
}

export default AvailablePrompt
