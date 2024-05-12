import { cypressIcon, figmaIcon, gsapIcon, javascript, landingVideo3, landingVideo5, mernStack, qaImg, reactjs, tailwindcss, testcaseImg, threeDImg, threejsIcon, uxuiImg, webMobileImg } from "../lib";

export const contactData = [
    {
        id: 1,
        placeholder: "Your Name"
    },
    {
        id: 2,
        placeholder: "Your Email"
    },
    {
        id: 3,
        placeholder: "Your Message"
    },
]

export const skills = [
    {
        id: 1,
        service: "WEB & MOBILE DEVELOPMENT",
        description: "I develop sylish and future-proof web and mobile applications using mostly React and React Native.",
        keySkills: [{id: 1, skill: "JavaScript", icon: javascript}, {id: 2, skill: "React Native", icon: reactjs}, {id: 3, skill: "MERN", icon: mernStack},],
        bgImage: webMobileImg
    },
    {
        id: 2,
        service: "UX/ UI DESIGN",
        description: "I don't simply create an app, I create an experience. I usually thrive at design in real time (as I code), but I am equally as proficient in designing before development.",
        keySkills: [{id: 1, skill: "Figma", icon: figmaIcon}, {id: 2, skill: "Tailwind", icon: tailwindcss}],
        bgImage: uxuiImg
    },
    {
        id: 3,
        service: "MOTION AND 3D DESIGN",
        description: "I embrace interactivity and love a site packed with a surprise on every scroll. I believe end users deserve a captivating experience on every site they visit.",
        keySkills: [{id: 1, skill: "GSAP", icon: gsapIcon}, {id: 2, skill: "ThreeJs", icon: threejsIcon}],
        bgImage: threeDImg
    },
    {
        id:4,
        service: "QUALITY ASSURANCE",
        description: "Having previously worked as a Quality Assurance intern, I pay close attention to even the finest of details to ensure poor applications are not pushed to production.",
        keySkills: [{id: 1, skill: "Cypress Testing", icon: cypressIcon}, {id: 2, skill: "Test Case Formulation", icon: testcaseImg}],
        bgImage: qaImg
    },
]

export const websiteWork = [
    {
        id: 1,
        title: "MAKEUPBYRAM",
        video: landingVideo5,
        link: "",
    },
    {
        id: 2,
        title: "MEALROCKET",
        video: landingVideo3,
        link: "",
    },
]

export const appWork = [
    {
        id: 1,
        title: "BANTURIDE",
        video: landingVideo5,
    },
]