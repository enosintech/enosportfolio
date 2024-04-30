import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { noTriggerToAnimations } from "../utils/animations";
import { arrowIcon } from "../lib";

const isTouchDevice = "ontouchstart" in window;

const Cursor = () => {
    useGSAP(() => {

        if(isTouchDevice) {
            return;
        }

        gsap.set("#cursor", {xPercent: -50, yPercent: -50})
        gsap.set("#cursor2", {xPercent: -50, yPercent: -50})

        window.addEventListener("mousemove", (e) => {

            const {target} = e;

            const isTargetLinkOrBtn = target?.closest("a") || target?.closest("button") || target?.closest(".navlink");
            const isTargetNavChatBtn = target?.closest(".navChat");
            const isTargetNonBlue = target?.closest(".nonblue");

            noTriggerToAnimations("#cursor", {
                duration: 0.7,
                x: e.clientX,
                y: e.clientY,
                backgroundColor: isTargetNonBlue ? "#004080" : "white",
                opacity: isTargetLinkOrBtn ? 0.7 : 1,
                transform: `scale(${isTargetLinkOrBtn ? 1.5 : 1})`,
                ease: "power4",
                overwrite: "auto",
            });

            noTriggerToAnimations("#cursor2", {
                duration: 0.7,
                x: e.clientX,
                y: e.clientY,
                opacity: isTargetNavChatBtn ? 1 : 0,
                ease: "power4",
                overwrite: "auto"
            });
        })

        document.addEventListener("mouseleave", () => {
            noTriggerToAnimations("#cursor", {
                duration: 0.7,
                opacity: 0,
                ease: "power4"
            })
        })
    }, [])

  return (
    <>
        <div id="cursor" className="w-4 h-4 fixed top-0 left-0 rounded-full z-[110] opacity-0 select-none pointer-events-none"></div>
        <div id="cursor2" className="w-20 h-20 bg-white shadow fixed top-0 left-0 rounded-full z-[120] opacity-0 select-none pointer-events-none flex items-center justify-center">
            <img src={arrowIcon} className="rotate-90 size-10"/>
        </div>
    </>
  )
}

export default Cursor;
