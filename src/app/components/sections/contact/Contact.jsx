'use client'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../../../styles'
import { EarthCanvas } from '../..'
import { Section } from '../../layout'
import { slideIn } from '../../../utils/motion'

const Contact = () => {
  const formRef = useRef(null)

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {}

  return (
    <div className="xl:fles-row flex flex-col-reverse gap-10 overflow-hidden xl:mt-12">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] rounded-2xl bg-black-100 p-8"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <div className="flex flex-col">
            <label
              htmlFor="contact-name"
              className="mb-4 flex flex-row font-medium text-white"
            >
              Your Name
            </label>
            <input
              id="contant-name"
              type="text"
              name="name"
              placeholder="What`s your name?"
              className="outlined-none rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white placeholder:text-secondary"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="contact-email"
              className="mb-4 flex flex-row font-medium text-white"
            >
              Your Email
            </label>
            <input
              id="contant-email"
              type="email"
              name="email"
              placeholder="What`s your email?"
              className="outlined-none rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white placeholder:text-secondary"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="contact-name"
              className="mb-4 flex flex-row font-medium text-white"
            >
              Your Message
            </label>
            <textarea
              id="contant-message"
              rows={7}
              name="message"
              placeholder="What`s is your message for me?"
              className="outlined-none rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white placeholder:text-secondary"
            />
          </div>
          <div className="flex flex-col">
            <button
              type="submit"
              className="shadow-md w-fit bg-tertiary px-8 py-3 font-bold text-white shadow-primary outline-none"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default Contact
