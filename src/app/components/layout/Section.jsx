'use client'

import { motion } from 'framer-motion'
import { styles } from '../../styles'
import { staggerContainer } from '../../utils/motion'

export const Section = ({ children, className = '', id, ...rest }) => {
  return (
    <motion.section
      id={id}
      variants={staggerContainer()}
      initial="initial"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`relative mx-auto box-border w-full min-w-[400px] max-w-[100vw] ${styles.padding} ${className}`}
      {...rest}
    >
      {children}
    </motion.section>
  )
}
