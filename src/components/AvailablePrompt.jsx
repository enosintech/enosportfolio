import { useGSAP } from "@gsap/react";

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

        triggerToAnimations("#availPrompt", {
          opacity: 0,
          duration: 0.4,
        }, {
          trigger: "#contactBg",
          start: "top bottom",
          toggleActions: "play none none reverse",
        })

    }, [])

  return (
      <div id='availPrompt' className="fixed top-5 right-4 sm:right-6 lg:right-10 pr-1 rounded-full overflow-hidden w-[150px] sm:w-[200px] lg:w-[225px] h-[50px] z-[100] flex items-center shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-zinc-900">
        <div className="h-full w-[20%] flex items-center justify-center rounded-l-full">
          <span id="shadowAnimation" className="lg:w-4 sm:w-3 w-2 lg:h-4 sm:h-3 h-2 rounded-full bg-[#2dbf19]"></span>
        </div>
        <div className="h-[80%] rounded-full w-[80%] flex items-center pl-5 overflow-hidden">
              <p id="textSlider" className="text-nowrap font-nohemiBold text-sm sm:text-md lg:text-lg transition-all">AVAILABLE FOR FULL TIME AND FREELANCE WORK</p>
        </div>
      </div>
  )
}

export default AvailablePrompt
