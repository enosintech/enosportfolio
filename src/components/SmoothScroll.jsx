import { ReactLenis } from "@studio-freight/react-lenis";

const SmoothScroll = ({children}) => {

    return (
        <ReactLenis root options={{ lerp:0.025, duration: 1, smoothTouch: true}}>
            {children}
        </ReactLenis>
    )
}

export default SmoothScroll;