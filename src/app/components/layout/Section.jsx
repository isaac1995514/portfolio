'use client'

import { motion } from 'framer-motion'
import { styles } from '../../styles'
import { staggerContainer } from '../../utils/motion'

export const Section = ({ children, className, id, ...rest }) => {
  return (
    <motion.section
      id={id}
      variants={staggerContainer()}
      initial="initial"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`relative mx-auto w-full min-w-[450px] ${styles.padding} ${className}`}
      {...rest}
    >
      {children}
    </motion.section>
  )
}
