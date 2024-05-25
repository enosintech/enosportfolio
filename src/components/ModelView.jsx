import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Model } from "./Model";
import { Model as Test } from "./TestModel";
import { Model as Test2 } from "./TestModel2"
import Lights from "./Lights";

const ModelView = () => {
  
  return (
    <Canvas
    >
        <ambientLight intensity={1}/>
        <Lights />
        <OrbitControls enableZoom={false} enableRotate={false} />
        <Model />
    </Canvas>
  )
}

export default ModelView;
