'use client'

import { Tilt } from 'react-tilt'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { styles } from '../../../styles'
import { Section } from '../../layout'
import { testimonials } from '../../../constants'
import { fadeIn, textVariant } from '../../../utils/motion'
import ComingSoonLoader from '../../ComingSoonLoader'

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className="w-full rounded-3xl bg-black-200 p-10 xs:w-[320px]"
  >
    <p className="text-[48px] font-black text-white">"</p>

    <div className="mt-1">
      <p className="text-[18px] tracking-wider text-white">{testimonial}</p>

      <div className="mt-7 flex items-center justify-between gap-1">
        <div className="flex flex-1 flex-col">
          <p className="text-[16px] font-medium text-white">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-[12px] text-secondary">
            {designation} of {company}
          </p>
        </div>

        <Image
          src={image}
          alt={`feedback_by-${name}`}
          height={40}
          width={40}
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
)

const TestimonialsList = () => {
  return (
    <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
      {testimonials.map((testimonial, index) => (
        <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
      ))}
    </div>
  )
}

const Feedbacks = () => {
  return (
    <Section id="testimonials" className={`mt-12 rounded-[20px] bg-black-100`}>
      <div
        className={`rounded-2xl bg-tertiary ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <ComingSoonLoader />
    </Section>
  )
}

export default Feedbacks
