import { appBgImg, appstoreIcon, phoneFrame, playstoreIcon } from "../lib";

const AppWorkComponent = (props) => {

  return (
    <div id="appWork" className="w-full h-full flex justify-center relative bg-black overflow-hidden">
        <img className="w-full h-full opacity-60 absolute object-cover" alt="app Bg" src={appBgImg}/>
        <div className="xl:w-[45%] lg:w-[60%] md:w-[75%] sm:w-[90%] w-full h-full flex flex-col items-center justify-start gap-y-4 pt-14 sm:pt-20 max-[550px]:pt-32 md:pt-5">
            <div className="md:w-[35%] sm:w-[40%] w-[45%] rounded-[40px] overflow-hidden relative">
                <img src={phoneFrame} className="w-full h-full object-contain relative z-[1]"/>
                <div className="absolute sm:w-[95%] w-[92%] right-0 mx-auto h-[97%] top-0 bottom-0 my-auto left-0 overflow-hidden rounded-[30px] md:rounded-[40px]">
                    <video key={props.video} className="w-full h-full object-cover" playsInline={true} autoPlay={true} loop={true} muted={true} preload="none">
                        <source src={props.video} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div className="relative w-[90%] sm:w-[75%] md:w-[65%] text-center overflow-hidden lg:w-[70%] xl:w-[65%] 2xl:w-[60%] h-[8%] flex items-center justify-center rounded-full bg-zinc-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                <h1 className="font-nohemiExtraBold text-md sm:text-lg w-[30%] flex items-center justify-center">{props.title}</h1>
                <div className="w-[70%] h-full flex items-center justify-evenly">
                    <img className="w-[45%] h-[70%] object-cover" src={appstoreIcon}/>
                    <img className="w-[45%] h-[70%] object-cover" src={playstoreIcon} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppWorkComponent;
