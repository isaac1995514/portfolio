'use client'

import { useState, useId, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../../../styles'
import { Section } from '../../layout'
import { slideIn } from '../../../utils/motion'

const EarthCanvas = lazy(() => import('../../canvas/Earth'))

function createFormId(formControlId, controlName) {
  return `${formControlId}-${controlName}`
}

const ContactForm = () => {
  const [loading, setLoading] = useState(false)
  const formControlId = useId()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.target)
    await new Promise((resolve, reject) => setInterval(resolve, 2000))
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
      <div className="flex flex-col">
        <label
          htmlFor={createFormId(formControlId, 'name')}
          className="mb-4 flex flex-row font-medium text-white"
        >
          Your Name
        </label>
        <input
          id={createFormId(formControlId, 'name')}
          type="text"
          name="name"
          placeholder="What`s your name?"
          className="outlined-none rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white placeholder:text-secondary"
          aria-required
          required
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor={createFormId(formControlId, 'email')}
          className="mb-4 flex flex-row font-medium text-white"
        >
          Your Email
        </label>
        <input
          id={createFormId(formControlId, 'email')}
          type="email"
          name="email"
          placeholder="What`s your email?"
          className="outlined-none rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white placeholder:text-secondary"
          required
          aria-required
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor={createFormId(formControlId, 'message')}
          className="mb-4 flex flex-row font-medium text-white"
        >
          Your Message
        </label>
        <textarea
          id={createFormId(formControlId, 'message')}
          rows={7}
          name="message"
          placeholder="What`s is your message for me?"
          className="outlined-none rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white placeholder:text-secondary"
        />
      </div>
      <div className="flex flex-col">
        <button
          type="submit"
          className="shadow-md w-fit rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-primary outline-none disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </form>
  )
}

const ContactSection = () => {
  return (
    <Section
      className={`${styles.paddingBottom} flex w-full flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] rounded-2xl bg-black-100 p-8"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <ContactForm />
      </motion.div>
      <motion.dv
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <Suspense fallback={null}>
          <EarthCanvas />
        </Suspense>
      </motion.dv>
    </Section>
  )
}

export default ContactSection
