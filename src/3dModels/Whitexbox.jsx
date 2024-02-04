import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/whitexbox.gltf')
  return (
    <group scale={5.5} {...props} dispose={null}>
      <mesh geometry={nodes.Object_5.geometry} material={materials.material} position={[0, 0, 0]} rotation={[0, -Math.PI / 2, 0]} scale={0.053} />
    </group>
  )
}

useGLTF.preload('/whitexbox.gltf')
