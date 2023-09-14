'use client'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { styles } from '../../../styles'
import { navLinks } from '../../../constants'
import Image from 'next/image'
import Link from 'next/link'
import { logo, menu, close } from 'public/images'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../utils/motion'

const NavSidebar = () => {
  return (
    <motion.aside
      variants={fadeIn('right')}
      className="fixed inset-0 z-10 flex h-screen w-2/5 bg-black-100/90"
    >
      <ul className="flex w-full list-none flex-col">
        {navLinks.map(({ id, title }) => (
          <li
            key={id}
            className={`text-md justify-left flex h-12 w-full cursor-pointer px-4 py-2 font-medium hover:bg-white-100/10`}
          >
            <Link href={`#${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </motion.aside>
  )
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav
      className={`${styles.paddingX} fixed inset-x-0 top-5 z-20 mx-auto flex w-11/12 items-center rounded-full border-transparent bg-tertiary/70 py-5`}
    >
      <div className="max-ws-7xl mx-auto flex w-full items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <Image
            src={logo}
            alt="logo"
            width={9}
            height={9}
            className="h-9 w-9 object-contain"
          />
          <p className="hidden cursor-pointer text-lg font-bold text-white xs:block">
            Isaac Leong
          </p>
        </Link>
        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map(({ id, title }) => (
            <li
              key={id}
              className={`text-md cursor-pointer font-medium text-secondary hover:text-white`}
            >
              <Link href={`#${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-1 items-center justify-end sm:hidden">
          <button
            aria-label="Navigation Menu Button"
            onClick={() => {
              setIsMobileMenuOpen((prev) => !prev)
            }}
          >
            <Image
              src={isMobileMenuOpen ? close : menu}
              alt="menu"
              className="h-[28px] w-[28px] cursor-pointer object-contain"
            />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && createPortal(<NavSidebar />, document.body)}
    </nav>
  )
}

export default Navbar
