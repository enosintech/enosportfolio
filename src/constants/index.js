import { faBookOpenReader, faCode, faLinesLeaning, faListCheck, faPenToSquare, faPersonWalkingDashedLineArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";

import { cypressIcon, enos1, enos2, enos3, enos4, enos5, enos6, figmaIcon, googleDocsIcon, gsapIcon, javascript, landingVideo1, landingVideo2, landingVideo3, landingVideo4, landingVideo5, letterO, mernStack, notionIcon, reactjs, tailwindcss, threejsIcon, uxuiIcon } from "../lib";

export const aboutImages = [
    {
        id: 1,
        src: enos2,
        alt: "Enos Image 1"
    },
    {
        id: 1,
        src: enos3,
        alt: "Enos Image 2"
    },
    {
        id: 1,
        src: enos4,
        alt: "Enos Image 3"
    },
    {
        id: 1,
        src: enos5,
        alt: "Enos Image 4"
    },
    {
        id: 1,
        src: enos6,
        alt: "Enos Image 5"
    },
    {
        id: 1,
        src: enos1,
        alt: "Enos Image 6"
    },
]

export const landingVideos = [
    {
        id: 1,
        video: landingVideo2,
    },
    {
        id: 2,
        video: landingVideo3,
    },
    {
        id: 3,
        video: landingVideo4,
    },
    {
        id: 4,
        video: landingVideo1,
    },
    {
        id: 5,
        video: landingVideo5,
    },
]

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
        description: "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit",
        logo: faCode,
        keySkills: [{id: 1, skill: "HTML, CSS, JavaScript", icon: javascript}, {id: 2, skill: "Mern Stack", icon: mernStack}, {id: 3, skill: "React / React Native", icon: reactjs}],
        currentlyLearning: "NextJs, TypeScript",
    },
    {
        id: 2,
        service: "UX/ UI DESIGN",
        description: "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit",
        logo: uxuiIcon,
        keySkills: [{id: 1, skill: "Figma", icon: figmaIcon}, {id: 2, skill: "Tailwind", icon: tailwindcss}],
        currentlyLearning: "Advanced Figma",
    },
    {
        id: 3,
        service: "MOTION AND 3D DESIGN",
        description: "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit",
        logo: letterO,
        keySkills: [{id: 1, skill: "GSAP", icon: gsapIcon}, {id: 2, skill: "ThreeJs", icon: threejsIcon}],
        currentlyLearning: "Advanced Three JS, p5.js & Canvas-sketch",
    },
    {
        id:4,
        service: "QUALITY ASSURANCE",
        description: "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit",
        logo: faStar,
        keySkills: [{id: 1, skill: "Cypress Testing", icon: cypressIcon}, {id: 2, skill: "Test Case Formulation", icon: faListCheck}],
        currentlyLearning: "Advanced Debugging Practices",
    },
    {
        id: 5,
        service: "DOCUMENTATION",
        description: "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit",
        logo: faPenToSquare,
        keySkills: [{id: 1, skill: "Notion", icon: notionIcon}, {id: 2, skill: "Google Docs", icon: googleDocsIcon}],
        currentlyLearning: "Advanced Technical Writing",
    },
    {
        id: 6,
        service: "LEARNING",
        description: "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit",
        logo: faLinesLeaning,
        keySkills: [{id: 1, skill: "Quick Comprehension", icon: faBookOpenReader}, {id: 2, skill: "Applying Initiative", icon: faPersonWalkingDashedLineArrowRight},],
        currentlyLearning: "How to make perfect lasagna.",
    },
]

export const websiteWork = [
    {
        id: 1,
        title: "MAKEUPBYRAM",
        established: "2022",
        description: "Makeupbyram is a mobile makeup studio based in Kuala Lumpur, Malaysia.",
        video: landingVideo5,
        link: "",
    },
    {
        id: 2,
        title: "MEALROCKET",
        established: "2021",
        description: "MealRocket is a fast food restaurant based in Lusaka, Zambia.",
        video: landingVideo3,
        link: "",
    },
]

export const appWork = [
    {
        id: 1,
        title: "BANTURIDE",
        established: "2024",
        description: "BantuRide is an ehailing application based in Livingstone, Zambia",
        bgVideo: landingVideo1,
        video: landingVideo4,
        playstorelink: "",
        appstorelink: ""
    },
]