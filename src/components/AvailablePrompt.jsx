import { useGSAP } from "@gsap/react";

import { noTriggerToAnimations } from "../utils/animations";

const AvailablePrompt = () => {

    useGSAP(() => {
        noTriggerToAnimations("#textSlider", {
            duration: 10,
            xPercent: -60,
            ease: "none",
            yoyo: true,
            repeat: -1,
        })
    }, [])

  return (
    <div className="fixed bottom-8 left-10 rounded-full overflow-hidden w-[225px] h-[50px] z-[100] flex items-center shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-zinc-900 nonblue">
      <div className="h-full w-full flex items-center pl-5 overflow-hidden group navlink">
            <p id="textSlider" className="text-nowrap font-nohemiBold text-lg group-hover:text-themeblue transition-all">AVAILABLE FOR FULL TIME AND FREELANCE WORK</p>
      </div>
    </div>
  )
}

export default AvailablePrompt
