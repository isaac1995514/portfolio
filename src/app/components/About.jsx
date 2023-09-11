'use client'

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services, overviewText } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { Section } from './layout'
import Image from 'next/image'

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className="w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="green-pick-gradient w-full rounded-[20px] p-[1px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5"
        >
          <Image src={icon} alt={title} className="h-16 w-16 object-contain" />
          <h3 className="text-white text-center text-[20px] font-bold">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <Section
      id="about"
      className={`relative mx-auto w-full min-w-[450px] ${styles.paddingX} p-10`}
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
      >
        {overviewText}
      </motion.div>
      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service} />
        ))}
      </div>
    </Section>
  )
}

export default About
