import Lottie from "lottie-react";

import { clickAnimation } from "../lib";

const NavBar = () => {
  return (
    <nav className="w-fit left-0 right-0 mx-auto overflow-x-hidden h-fit shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] rounded-full flex items-center justify-center fixed bottom-5 z-[100]">
        <div className="w-fit pl-12 pr-2 py-2 rounded-full bg-zinc-900 flex items-center relative nonblue shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            <h1 className="font-nohemiExtraBold text-4xl navlink">ENOSINTECH</h1>
            <ul className="flex w-[350px] items-center justify-evenly font-nohemiMedium text-[17p]">
                <li className="navlink group active:opacity-50">
                    <a className="group-hover:text-themeblue transition-all">WHO?</a>
                </li>
                <li className="navlink group active:opacity-50">
                    <p className="group-hover:text-themeblue transition-all">SELECTED WORKS</p>
                </li>
            </ul>
            <div className="bg-themeblue hover:opacity-50 active:opacity-25 transition-all h-[55px] pl-7 pr-4 flex items-center gap-x-2 rounded-full navChat">
                <p className="font-nohemiMedium text-lg">Let's Talk</p>
                <div className="w-[40px] h-[40px] overflow-hidden flex items-center justify-center">
                    <Lottie animationData={clickAnimation}  loop={true} autoPlay={true} className="-translate-y-1 min-h-[80px] min-w-[80px]"/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
