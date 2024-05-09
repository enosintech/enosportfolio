import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Model } from "./Model";
import Lights from "./Lights";

const ModelView = () => {
  return (
    <Canvas
        className={`w-fit h-fit absolute`}
    >
        <ambientLight intensity={1}/>
        <Lights />
        <OrbitControls enableZoom={false} enableRotate={false} />
        <Model />
    </Canvas>
  )
}

export default ModelView;
