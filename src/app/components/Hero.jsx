'use client'

import { motion } from 'framer-motion'
import { styles } from '../styles'
import { AvatarCanvas } from './canvas'

const Hero = () => {
  return (
    <section
      className={`relative mx-auto h-screen w-full bg-hero-pattern ${styles.paddingX} grid grid-cols-1 p-10 sm:grid-cols-2`}
    >
      <div className="flex-grow-1 h-full">
        <div className={`mx-auto flex  max-w-7xl flex-row items-start gap-5`}>
          <div className="mt-5 flex flex-col items-center justify-center">
            <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
            <div className="violet-gradient sm:h-160 h-40 w-1" />
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
      <div className="flex-grow-1 h-full">
        <AvatarCanvas />
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
    </section>
  )
}

export default Hero
