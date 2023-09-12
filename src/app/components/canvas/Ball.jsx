'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ball = ({imgUrl}) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <group>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <directionalLight position={[0, 0, -0.05]} intensity={0.3} />
      <mesh rotation={[2 * Math.PI, 0, 6.25]} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color='#fff8eb'
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
  );
};

const BallCanvas = ({ imgUrl }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={imgUrl} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas