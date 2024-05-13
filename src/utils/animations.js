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

export const noEndTriggerPinAnimations = (target, pin, start = "top top", end = "bottom bottom") => {
    ScrollTrigger.create({
        trigger: target,
        start: start,
        end: end,
        pin: pin,
        invalidateOnRefresh: true,
    })
}