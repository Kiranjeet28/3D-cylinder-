import React from "react";
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import image from "../images/Image.png"
export const Scene = () => {
    let tex = useTexture(image)
    let cyl = useRef(null);
    useFrame((state,delta)=>{
        cyl.current.rotation.y += delta;    
    })
    return(
        <mesh ref = {cyl} rotation={[0,0,0]}>
        <cylinderGeometry args={[1,1,3.5,40,40,true]}/>
        <meshBasicMaterial map={tex} transparent side={THREE.DoubleSide}/>
      </mesh>
    )
}