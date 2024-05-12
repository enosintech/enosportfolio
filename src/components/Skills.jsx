import SkillsComponent from "./SkillsComponent";
import { skills } from "../constants";

const Skills = () => {

  return (
    <>
        <section id="skills" className="w-full h-[250vh] md:h-[150vh] px-5 py-4">
            <div className="w-full h-full flex flex-col">
                <div className="w-full h-[20%] sm:px-12 flex flex-col items-center">
                    <div className="w-full h-[60%] flex justify-center">
                        <div className="w-full h-full flex flex-col justify-end text-center">
                            <p className="font-nohemiMedium text-6xl">SKILLS &</p>
                            <p className="font-nohemiExtraBold text-7xl">SERVICES</p>
                        </div>
                    </div>
                    <div className="w-full h-[20%] flex items-center justify-center">
                        <p className="font-normal text-center tracking-tighter text-md mt-3 md:mt-5 md:text-xl">I have nurtured a lifelong love for learning. My eagerness to explore new technologies and embrace continuous improvement drives me to push boundaries and deliver innovative solutions.</p>
                    </div>
                </div>
                <div id="skillsContainer" className="w-full h-[80%] flex flex-wrap justify-evenly items-center">
                    <SkillsComponent {...skills[0]}/>
                    <SkillsComponent {...skills[1]}/>
                    <SkillsComponent {...skills[2]}/>
                    <SkillsComponent {...skills[3]}/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Skills;
