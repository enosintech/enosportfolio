import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import {Outlines, useGLTF } from '@react-three/drei';

import { noTriggerToAnimations, triggerToAnimations } from '../utils/animations';

export function Model(props) {
  const { nodes, materials } = useGLTF('/assets/models/eyeball.glb')

  const modelRef = useRef(null);

  useGSAP(() => {

    triggerToAnimations(modelRef?.current.scale, {
      x: 12, 
      y: 12,
      z: 6,
      ease: "power1.in",
    }, {
      trigger: '#eyescale',
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
    })

    const landingContainer = document.getElementById("landing");

    landingContainer.addEventListener("mouseleave", () => {
      noTriggerToAnimations(modelRef?.current.rotation, {
        x: 0,
        y: -Math.PI / 2,
        z: 0,
        duration: 1,
        ease: "power1.in",
      })
    })

    landingContainer.addEventListener("mouseenter", (e) => {

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const anchor = document.querySelector(".circle");
      const rekt = anchor.getBoundingClientRect();
      const anchorX = rekt.left + rekt.width / 2;
      const anchorY = rekt.top + rekt.height / 2;

      const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

      noTriggerToAnimations(modelRef?.current.rotation, {
        x: angleDeg < 90 && angleDeg > 0 || angleDeg > 90  ? -0.2 : 0.2,
        y: angleDeg < 90 && angleDeg > -90 ? -0.2 : 0.2,
      })
    })

    landingContainer.addEventListener("mousemove", (e) => {

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const anchor = document.querySelector(".circle");
      const rekt = anchor.getBoundingClientRect();
      const anchorX = rekt.left + rekt.width / 2;
      const anchorY = rekt.top + rekt.height / 2;

      const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

      noTriggerToAnimations(modelRef?.current.rotation, {
        x: angleDeg < 90 && angleDeg > 0 || angleDeg > 90  ? -0.2 : 0.2,
        y: angleDeg < 90 && angleDeg > -90 ? -0.2 : 0.2,
      })

    })

    window.addEventListener("resize", () => {
      if(window.innerWidth < 1024){
        noTriggerToAnimations(modelRef?.current.scale, {
          x: 1.7,
          y: 1.7,
          z: 1.7,
        })
      } else {
        noTriggerToAnimations(modelRef?.current.scale, {
          x: 2.1,
          y: 2.1,
          z: 2.1,
        })
      }
    })

  }, [])

  const angle = (cx, cy, ex, ey) => {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
  }  

  return (
    <group {...props} dispose={null}>
      <group ref={modelRef} rotation={[10 , -Math.PI / 2, 10]} scale={[2, 2, 2]}>
        <group rotation={[0, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.Material_002}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.Material_001}
          >
            <Outlines polygonOffset polygonOffsetFactor={10000} thickness={0.03} color="white"/>
          </mesh>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/eyeball.glb')