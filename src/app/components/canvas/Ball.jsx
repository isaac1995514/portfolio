'use client'

import { Suspense, memo } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl])

  return (
    <group>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} intensity={0.5} />
      <directionalLight position={[0, 0.05, 0]} intensity={0.3} />
      <mesh
        rotation={[2 * Math.PI, 0, 6.25]}
        castShadow
        receiveShadow
        scale={2.75}
      >
        <icosahedronGeometry args={[1, 10]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </group>
  )
}

const BallCanvas = memo(
  ({ imgUrl }) => {
    return (
      <Canvas frameloop="demand" dpr={1} gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} panSpeed={0.5} />
          <Ball imgUrl={imgUrl} />
        </Suspense>

        <Preload all />
      </Canvas>
    )
  },
  () => true
)

BallCanvas.displayName = 'BallCanvas'

export default BallCanvas
