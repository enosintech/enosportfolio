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

export const noEndTriggerPinAnimations = (target, start = "top top", end = "bottom -600%") => {
    ScrollTrigger.create({
        trigger: target,
        start: start,
        end: end,
        pin: true,
        invalidateOnRefresh: true
    })
}

export const endTriggerPinAnimations = (target, start = "top top") => {
    ScrollTrigger.create({
        trigger: target,
        start: start,
        endTrigger: "#contactTrigger",
        end: "bottom -100%",
        pin: true,
        invalidateOnRefresh: true,
    })
}