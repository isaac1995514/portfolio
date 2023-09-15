'use client'

import { memo, useId, useState } from 'react'
import { Avatar } from '@readyplayerme/visage'
import { Vector3 } from 'three'

const BodyTypeToggle = ({ isFullBody, onChange }) => {
  const toggleId = useId()

  return (
    <label
      htmlFor={toggleId}
      className="shadow-sm absolute right-0 top-0 flex h-10 w-20 cursor-pointer rounded-xl bg-slate-300/10 shadow-neutral-200/20 hover:bg-slate-300/30"
    >
      <input
        id={toggleId}
        type="checkbox"
        className="h-0 w-0 opacity-0"
        onChange={onChange}
      />
      <span
        className={`h-10/12 absolute m-1 flex h-5/6 w-1/2 items-center justify-center rounded-xl bg-slate-300/20 text-sm hover:bg-slate-300/50 ${
          isFullBody ? 'left-0' : 'right-0'
        }`}
      >
        {isFullBody ? 'Full' : 'Half'}
      </span>
    </label>
  )
}

const FullBodyAvatar = memo(
  () => {
    return (
      <Avatar
        className="cursor-pointer"
        modelSrc="/3d-assets/avatar/blue-outfit-avatar.glb"
        animationSrc="/3d-assets/avatar/gangnam-style.fbx"
        ambientLightColor="#fff5b6"
        ambientLightIntensity={0.25}
        bloom={{
          intensity: 0.1,
          kernelSize: 1,
          luminanceSmoothing: 1,
          luminanceThreshold: 1,
          materialIntensity: 3.3,
          mipmapBlur: true,
        }}
        cameraInitialDistance={2.5}
        cameraTarget={1.3}
        cameraZoomTarget={new Vector3(-0.11, 0, 3.2)}
        dirLightColor="#002aff"
        dirLightIntensity={5}
        dirLightPosition={new Vector3(-3, 5, -5)}
        environment="sunset"
        fov={60}
        scale={1}
        shadows
        spotLightAngle={0.314}
        spotLightColor="#fff5b6"
        spotLightIntensity={1}
        spotLightPosition={new Vector3(12, 10, 7.5)}
      />
    )
  },
  () => true
)

const HalfBodyAvatar = memo(
  () => {
    return (
      <Avatar
        ambientLightColor="#fff5b6"
        ambientLightIntensity={2.5}
        bloom={{
          intensity: 0.1,
          kernelSize: 1,
          luminanceSmoothing: 1,
          luminanceThreshold: 1,
          materialIntensity: 3.3,
          mipmapBlur: true,
        }}
        cameraInitialDistance={0.5}
        cameraTarget={0.6}
        cameraZoomTarget={new Vector3(0.3, 0, 0.55)}
        dirLightColor="#002aff"
        dirLightIntensity={5}
        dirLightPosition={new Vector3(-3, 5, -5)}
        environment="hub"
        fov={50}
        halfBody
        modelSrc="/3d-assets/avatar/half-body-avatar.glb"
        scale={1}
        shadows
        spotLightAngle={0.314}
        spotLightColor="#fff5b6"
        spotLightIntensity={4}
        spotLightPosition={new Vector3(12, 10, 7.5)}
        headMovement
      />
    )
  },
  () => true
)

const AnimatedAvatar = () => {
  const [isFullBody, setIsFullBody] = useState(false)

  const handleChange = () => {
    setIsFullBody((prev) => !prev)
  }

  return (
    <div className="relative h-full w-full">
      {isFullBody ? <FullBodyAvatar /> : <HalfBodyAvatar />}
      <BodyTypeToggle isFullBody={isFullBody} onChange={handleChange} />
    </div>
  )
}

HalfBodyAvatar.displayName = 'HalfBodyAvatar'

FullBodyAvatar.displayName = 'FullBodyAvatar'

export default AnimatedAvatar
