import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";

const Hero = () => {

    useGSAP(() => {
        const slideOptions = {
            slides: document.querySelectorAll(".slide"),
            list: document.querySelector(".slides"),
            duration: 0.3,
            lineHeight: 102,
        }

        const slideTl = gsap.timeline({
            paused: true,
            repeat: -1,
        })

        slideOptions.slides.forEach((slide, i) => {
            let label = "slide" + i;
            slideTl.add(label);

            if(i > 0){
                slideTl.to(slideOptions.list, {
                    duration: slideOptions.duration,
                    y: i * -1 * slideOptions.lineHeight,
                }, label);

                let letters = SplitType.create(slide, {types: "chars"}).chars;
                slideTl.from(letters, {
                    duration: slideOptions.duration,
                    y: 50,
                    stagger: slideOptions.duration / 10
                }, label);

                slideTl.to({}, {duration: 1})
            }
        })
        slideTl.play();

    }, [])

  return (
    <div className="w-[100vw] h-full flex flex-col items-center justify-center font-nohemiExtraBold text-[102px] leading-[102px]">
        <div className="text-center h-[102px] overflow-hidden nonblue">
            <ul className="p-0 m-0 list-none slides">
                <li className="slide h-[102px]"></li>
                <li className="slide">CREATIVE</li>
                <li className="slide">CURIOUS</li>
                <li className="slide">PLAYFUL</li>
                <li className="slide">COMMITTED</li>
            </ul>
        </div>
        <p className="nonblue">FULL STACK</p>
        <p className="nonblue">DEVELOPER</p>
    </div>
  )
}

export default Hero;
