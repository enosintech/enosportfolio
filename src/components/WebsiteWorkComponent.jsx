import { arrowIcon } from "../lib";

const WebsiteWorkComponent = (props) => {
  return (
    <div className="w-full h-full relative grid grid-cols-2">
        <video key={props.video} className="w-full h-full absolute z-[-1] object-cover" autoPlay={true} loop={true} muted={true} controls={false} playsInline={true} preload="none" >
            <source src={props.video} type="video/mp4"/>
        </video>
        <div className="flex items-end row row-span-1 col-span-2 col-start-1">
            <div className="w-full h-[60%] flex justify-center">
                <div className="relative w-[65%] sm:w-[70%] md:w-[55%] text-center overflow-hidden lg:w-[50%] xl:w-[40%] 2xl:w-[30%] h-[15%] sm:h-[20%] flex items-center justify-center rounded-full mt-72 sm:mt-56 bg-zinc-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                    <h1 className="font-nohemiExtraBold sm:-translate-x-0 -translate-x-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl">{props.title}</h1>
                    <a className="sm:w-20 w-14 sm:h-20 h-14 bg-white nonblue hover:opacity-70 active:opacity-50 rounded-full absolute right-2 flex items-center justify-center">
                        <img src={arrowIcon} className="size-10 -rotate-45" alt="arrow Icon"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WebsiteWorkComponent;
