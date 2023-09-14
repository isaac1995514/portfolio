'use client'
import { useState } from 'react'
import { styles } from '../../../styles'
import { navLinks } from '../../../constants'
import Image from 'next/image'
import Link from 'next/link'
import { logo, menu, close } from 'public/images'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav
      className={`${styles.paddingX} shadow-md fixed inset-x-0 top-5 z-20 mx-auto flex w-11/12 flex-wrap items-center rounded-3xl border-transparent bg-tertiary/80 py-5 shadow-violet-900/40 transition-all sm:flex-nowrap sm:rounded-full sm:py-1 sm:transition-none`}
    >
      <div className="max-ws-7xl mx-auto flex w-full items-center justify-between">
        <Link
          href="/"
          className="flex flex-1 basis-3/4 items-center gap-2 sm:basis-1/2"
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <Image
            src={logo}
            alt="logo"
            width={16}
            height={16}
            className=" h-16 w-16 object-contain"
          />
          <p className="hidden cursor-pointer text-2xl font-bold text-white xs:block sm:text-lg">
            Isaac Leong
          </p>
        </Link>
        <div className="flex flex-1 basis-1/4 items-center justify-end sm:hidden sm:basis-0">
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
      <ul
        className={`flex-1 basis-full list-none flex-col justify-center pt-8 sm:flex sm:basis-1/2 sm:flex-row sm:justify-end sm:gap-2 sm:pt-0 ${
          isMobileMenuOpen ? 'flex' : 'hidden'
        }`}
      >
        {navLinks.map(({ id, title }) => (
          <li
            key={id}
            className={`text- cursor-pointer rounded-xl px-5 py-5 text-xl font-medium text-secondary hover:bg-secondary/80 hover:text-white sm:py-2 sm:text-base`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Link href={`#${id}`} className="flex w-full">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
