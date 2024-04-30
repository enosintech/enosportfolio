import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const noTriggerToAnimations = (target, animationProps) => {
    gsap.to(target, {
        ...animationProps
    })
};

export const noTriggerFromAnimations = (target, animationProps) => {
    gsap.from(target, {
        ...animationProps
    })
}

export const triggerToAnimations = (target, animationProps, scrollProps) => {
    gsap.to(target, {
        ...animationProps,
        scrollTrigger: {
            ...scrollProps
        }
    })
}

export const triggerFromAnimations = (target, animationProps, scrollProps) => {
    gsap.from(target, {
        ...animationProps,
        scrollTrigger: {
            ...scrollProps
        }
    })
}

export const noEndTriggerPinAnimations = (target, start = "top top", end = "bottom -700%") => {
    ScrollTrigger.create({
        trigger: target,
        start: start,
        end: end,
        pin: true
    })
}

export const endTriggerPinAnimations = (target, start = "top top", end = "top bottom", endTrigger = "#bgVideoTrigger") => {
    ScrollTrigger.create({
        trigger: target,
        start: start,
        end: end,
        endTrigger: endTrigger,
        pin: true
    })
}