import { arrowIcon } from "../lib";

const WebsiteWorkComponent = (props) => {
  return (
    <div className="w-full h-full relative grid grid-cols-2">
        <video key={props.video} className="w-full h-full absolute z-[-1] object-cover" autoPlay={true} loop={true} muted={true} controls={false} playsInline={true} preload="none" >
            <source src={props.video} type="video/mp4"/>
        </video>
        <div className="flex items-end row row-span-1 col-span-2 col-start-1">
            <div className="w-full h-[60%] flex justify-center">
                <div className="relative w-[85%] sm:w-[70%] md:w-[55%] text-center overflow-hidden lg:w-[50%] xl:w-[40%] 2xl:w-[30%] h-[55%] flex flex-col items-center p-10 rounded-[40px] mt-14 bg-zinc-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                    <h1 className="font-nohemiExtraBold text-3xl sm:text-5xl">{props.title}</h1>
                    <p className="mt-1 font-nohemiSemiBold lg:text-xl">ESTABLISHED {props.established}</p>
                    <p className="mt-2 sm:max-w-[65%] lg:max-w-[75%] xl:max-w-[70%] font-extralight tracking-tighter">{props.description}</p>
                    <div className="w-[90%] h-[30%] bg-zinc-800 absolute bottom-2 rounded-t-[20px] rounded-b-[50px] left-0 right-0 mx-auto flex items-center justify-center">
                        <a href={props.link} target="_blank" className="rounded-full w-fit px-5 hover:opacity-70 active:opacity-50 h-[75%] navlink bg-white flex items-center justify-center gap-x-2">
                            <p className="text-black font-nohemiSemiBold">VIEW LIVE</p>
                            <img src={arrowIcon} className="size-6 -rotate-45"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WebsiteWorkComponent;
