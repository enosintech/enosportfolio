import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillsComponent = (props) => {

  return (
    <div className="w-full h-full flex lg:flex-row flex-col">
        <div className="lg:w-1/2 w-full lg:h-full h-1/2 flex flex-col p-10">
            <p className="font-nohemiRegular">{props.id === 6 ? "TOP SKILL" : "SERVICE"}</p>
            <h1 className="font-nohemiBold text-lg md:text-2xl lg:text-3xl xl:text-4xl mt-4">{props.service}</h1>
            <p className="mt-5 font-light tracking-tight hidden lg:block lg:text-[12px] xl:text-[14px]">{props.description}</p>
            <div className="mt-3 lg:mt-5 2xl:mt-10">
                {props.id == 1 || props.id == 4 || props.id == 5 || props.id == 6 ?
                    <FontAwesomeIcon icon={props.logo} size="2x" color="white" />
                :
                    <img src={props.logo} className={`lg:w-[60px] w-[40px] rounded-full ${props.id === 3 ? "invert" : "invert-none"}`} alt="service icon"/>
                }
            </div>
        </div>
        <div className="lg:w-1/2 w-full lg:h-full h-1/2 flex items-center justify-center">
            <div className="w-[85%] h-[85%] rounded-[40px] overflow-hidden p-5 bg-zinc-800 flex flex-col justify-between">
                <div className="w-full lg:h-1/2 h-full flex flex-col">
                    <h1 className="w-full h-[15%] px-2 font-nohemiSemiBold flex items-center border-b-4 border-white text-[12px] lg:text-[14px] xl:text-[16px]">KEY SKILLS</h1>
                    <div className="w-full h-[85%]">
                        {props.keySkills.map((skill, index) => (
                            <div key={skill.id} index={index} className="w-full h-1/3 flex items-center justify-between px-2 border-b-[0.5px] border-white">
                                <p className="font-nohemiLight truncate text-[10px] mr-2 sm:text-[12px] xl:text-[14px]">{skill.skill}</p>
                                {props.id === 4 && skill.id == 2 || props.id === 6 ?
                                    <FontAwesomeIcon icon={skill.icon} color="white" className="w-[30px]"/>
                                :
                                    <img src={skill.icon} className={`w-[30px] rounded-full overflow-visible ${props.id === 3 && skill.id === 2 || props.id === 5 && skill.id === 1 ? "invert" : "invert-none"}`} alt="skill icon"/>
                                }
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full h-[30%] flex-col lg:flex hidden">
                    <h1 className="w-full h-[30%] px-2 font-nohemiMedium lg:text-[14px] xl:text-[16px] flex items-center border-b-2 border-white">CURRENTLY LEARNING</h1>
                    <div className="w-full h-[70%] px-2 mt-2">
                        <p className="font-nohemiExtraLight lg:text-[12px] xl:text-[14px]">{props.currentlyLearning}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillsComponent;
