'use client'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../styles'
import { experiences } from '../constants'
import { Section } from '../components/layout'
import { textVariant } from '../utils/motion'
import { isMobile } from '../utils/device'
import Image from 'next/image'

const ExperienceCard = ({
  date,
  iconBg,
  icon,
  company_name,
  title,
  points,
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src={icon}
            alt={company_name}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{}</h3>
        {title}
        <p className="text-[16px] font-semibold text-secondary">
          {company_name}
        </p>
      </div>
      <ul className="ml-5 mt-5 list-disc space-y-2">
        {points.map((point, i) => (
          <li
            key={`experience-point-${i}`}
            className="pl-1 text-[14px] tracking-wider text-white-100"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <Section id="work">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Expereince</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline animate={!isMobile()}>
          {experiences.map((experience, i) => (
            <ExperienceCard key={experience.title} index={i} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </Section>
  )
}

export default Experience
