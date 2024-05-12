import { useGSAP } from "@gsap/react";
import { triggerToAnimations } from "../utils/animations";

const SkillsComponent = (props) => {

    useGSAP(() => {
        
        triggerToAnimations("#skillImgScale", {
            scale: 1,
            opacity: 0.8,
        }, {
            trigger: "#skillsContainer",
            start: "top 60%",
            end: "bottom top",
            scrub: 10
        })
    }, [])

  return (
    <div className="md:w-[45%] w-[90%] bg-black h-[23%] md:h-[45%] p-10 flex flex-col relative overflow-hidden rounded-[40px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
        <img id="skillImgScale" src={props.bgImage} className="absolute opacity-10 scale-[1.5] w-full h-full top-0 left-0 object-cover" alt="skill Background" />
        <div className="flex flex-col gap-y-4 2xl:max-w-[65%] xl:max-w-[75%] lg:max-w-[80%] relative z-[1]">
            <h1 className="font-nohemiExtraBold text-3xl">{props.service}</h1>
            <p className="font-medium tracking-tighter">{props.description}</p>
        </div>
        <div className="absolute w-[150px] h-[75px] bottom-8 right-5 flex flex-col justify-center z-[1]">
            <p className="text-center h-[25px] text-[14px] font-nohemiBold">KEY SKILLS</p>
            <div className="w-full h-[50px] mt-4 flex items-center justify-evenly">
                {props.keySkills.map((skill, index) => (
                    <div key={skill.id} index={index} className="flex flex-col items-center justify-center gap-y-2">
                        <img key={skill.id} index={index} src={skill.icon} className={`w-[30px] h-[30px] rounded-full overflow-visible object-contain" alt="skill icon ${props.id === 3 && skill.id === 2 ?  "invert" : "invert-0"}`}/>
                        <p className="text-[10px] text-center tracking-tighter font-extralight">{skill.skill}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default SkillsComponent;
