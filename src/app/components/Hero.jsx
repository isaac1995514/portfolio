'use client'

import { styles } from '../styles'
import { AvatarCanvas } from './canvas'
import { Section } from './layout'
import { Avatar } from "@readyplayerme/visage";

const Hero = () => {
  return (
    <Section
      id="hero"
      className="grid h-screen grid-cols-1 grid-rows-6 bg-hero-pattern bg-cover bg-center bg-no-repeat p-10 sm:grid-cols-2 sm:grid-rows-1"
    >
      <div className="row-span-2 h-full sm:row-span-1">
        <div className={`mx-auto flex max-w-7xl flex-row items-start gap-5`}>
          <div className="mt-5 flex flex-col items-center justify-center">
            <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
            <div className="violet-gradient h-40 w-1 sm:h-80" />
          </div>
          <div className="">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I&apos;m <span className="text-[#915EFF]">Isaac</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop user interfaces and web applications
            </p>
          </div>
        </div>
      </div>
      <div className="row-span-4 h-full sm:row-span-1">
      <Avatar
      modelSrc="https://models.readyplayer.me/64effbac42c59d7dceb568bc.glb"
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
      cameraInitialDistance={2.5}
      cameraTarget={1.55}
      dirLightColor="#002aff"
      dirLightIntensity={5}
      environment="sunset"
      fov={50}
      scale={1}
      shadows
      spotLightAngle={0.314}
      spotLightColor="#fff5b6"
      spotLightIntensity={1}
    />
      </div>

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
      <a href='#about'>
        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
          />
        </div>
      </a>
    </div> */}
    </Section>
  )
}

export default Hero
