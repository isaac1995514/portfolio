'use client'

import { Avatar } from "@readyplayerme/visage";

const AnimatedAvatar = () => {
    return (
        <Avatar
            className='cursor-pointer'
            modelSrc="/3d-assets/avatar/blue-outfit-avatar.glb"
            animationSrc='/3d-assets/avatar/gangnam-style.fbx'
            ambientLightColor="#fff5b6"
            ambientLightIntensity={0.25}
            bloom={{
            intensity: 0.1,
            kernelSize: 1,
            luminanceSmoothing: 1,
            luminanceThreshold: 1,
            materialIntensity: 3.3,
            mipmapBlur: true
            }}
            cameraInitialDistance={3}
            cameraTarget={1.55}
            dirLightColor="#002aff"
            dirLightIntensity={5}
            environment="sunset"
            fov={60}
            scale={1}
            shadows
            spotLightAngle={0.314}
            spotLightColor="#fff5b6"
            spotLightIntensity={1}
        />
    )
}

export default AnimatedAvatar