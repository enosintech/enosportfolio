import ModelView from "./ModelView";
import HeroInfo from "./HeroInfo";

import { landingBgVideo } from "../lib";

const LandingBg = () => {

  return (
    <div className="w-full h-[100lvh] bg-neutral-800 flex items-center justify-center fixed z-[-1]">
        <div className="absolute w-full h-full top-0 left-0 z-[-1]">
        <video key={landingBgVideo} className="w-full h-full object-cover" playsInline={true} loop={true} muted={true} autoPlay={true} controls={false}>
            <source src={landingBgVideo} type="video/mp4" />
        </video>
        </div>
        <div className="circle z-10 absolute"></div>
        <ModelView />
        <HeroInfo />
    </div>
  )
}

export default LandingBg
