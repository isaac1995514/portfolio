'use client'

import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'

import { styles } from '../../../styles'
import { Section } from '../../layout'
import { textVariant } from '../../../utils/motion'

import 'react-vertical-timeline-component/style.min.css'
const ExperienceTimeline = lazy(() => import('./Timeline'))

const Experience = () => {
  return (
    <Section id="work">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Expereince</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <Suspense fallback={<div>Loading ...</div>}>
          <ExperienceTimeline />
        </Suspense>
      </div>
    </Section>
  )
}

export default Experience
