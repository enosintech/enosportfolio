import Lottie from "lottie-react";
import { useGSAP } from "@gsap/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons"

import { clickAnimation } from "../lib";
import { triggerToAnimations } from "../utils/animations";

const NavBar = () => {

    useGSAP(() => {
        triggerToAnimations("#playSettings", {
            opacity: 0,
            xPercent: -200 
        }, {
            trigger: "#work",
            start: "top 10%",
            toggleActions: "play none none reverse"
        })
    }, [])

  return (
    <nav className="w-full overflow-x-hidden h-[90px] flex items-center justify-center fixed top-0 left-0 z-[100]">
        <div id="playSettings" className="absolute left-10 flex items-center justify-center pl-5 pr-1 h-14 gap-x-4 rounded-full bg-zinc-900 shadow">
            <FontAwesomeIcon icon={faPause} color="white" size="xl" className="hover:opacity-70 navlink active:opacity-50"/>
            <div className="px-4 h-[90%] flex items-center">
                <p className="font-nohemiSemiBold text-[14px] hover:opacity-70 active:opacity-50 navlink">HIDE CONTENT</p>
            </div>
        </div>
        <div className="w-fit shadow pl-12 pr-2 py-2 rounded-full bg-zinc-900 flex items-center relative nonblue">
            <h1 className="font-nohemiExtraBold text-3xl navlink">ENOSINTECH</h1>
            <ul className="flex w-[350px] items-center justify-evenly font-nohemiRegular">
                <li className="navlink group active:opacity-50">
                    <a className="group-hover:text-themeblue transition-all">WHO?</a>
                </li>
                <li className="navlink group active:opacity-50">
                    <p className="group-hover:text-themeblue transition-all">SELECTED WORKS</p>
                </li>
            </ul>
            <div className="bg-themeblue hover:opacity-50 active:opacity-25 transition-all h-[55px] pl-7 pr-4 flex items-center gap-x-2 rounded-full navChat">
                <p className="font-nohemiMedium">Let's Talk</p>
                <div className="w-[40px] h-[40px] overflow-hidden flex items-center justify-center">
                    <Lottie animationData={clickAnimation}  loop={true} autoPlay={true} className="-translate-y-1 min-h-[80px] min-w-[80px]"/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
