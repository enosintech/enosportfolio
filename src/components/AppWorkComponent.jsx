import { phoneFrame } from "../lib";

const AppWorkComponent = (props) => {
  return (
    <div className="w-full h-full flex justify-center relative">
        <video key={props.video} className="w-full h-full bg-blue-500 absolute z-[-1] object-cover" autoPlay={true} loop={true} muted={true} controls={false} playsInline={true} preload="none" >
            <source src={props.video} type="video/mp4"/>
        </video>
        <div className="xl:w-[45%] lg:w-[60%] md:w-[75%] sm:w-[90%] w-full h-full flex flex-col items-center justify-start gap-y-4 pt-20 md:pt-5">
            <div className="md:w-[35%] sm:w-[40%] w-[45%] rounded-[40px] overflow-hidden relative">
                <img src={phoneFrame} className="w-full h-full object-contain relative z-[1]"/>
                <div className="absolute sm:w-[95%] w-[90%] right-0 mx-auto h-[97%] top-0 bottom-0 my-auto left-0 overflow-hidden rounded-[40px]">
                    <video key={props.video} className="w-full h-full object-cover" playsInline={true} autoPlay={true} loop={true} muted={true} preload="none">
                        <source src={props.video} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div className="md:w-[50%] w-[65%] h-[19%] rounded-[40px] flex flex-col items-center bg-zinc-900 overflow-hidden pt-5 px-3">
                <div className="w-full h-[15%] flex items-center justify-between px-4">
                    <p className="font-nohemiBold">{props.title}</p>
                    <p className="font-nohemiBold">ESTABLISHED {props.established}</p>
                </div>
                <p className="font-extralight text-[12px] tracking-tighter mt-2 text-center">{props.description}</p>
            </div>
        </div>
    </div>
  )
}

export default AppWorkComponent;
