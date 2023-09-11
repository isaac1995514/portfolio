'use client'
import { useState } from 'react'
import { styles } from '../styles'
import { navLinks } from '../constants'
import Image from 'next/image'
import Link from 'next/link'
import { logo, menu, close } from 'public/images'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav
      className={`${styles.paddingX} sticky top-0 z-20 flex w-full items-center bg-primary py-5`}
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
          <Image src={logo} alt="logo" className="h-9 w-9 object-contain " />
          <p className="text-white hidden cursor-pointer text-lg font-bold xs:block">
            Isaac Leong
          </p>
        </Link>
        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map(({ id, title }) => (
            <li
              key={id}
              className={`${
                active === id ? 'text-white' : 'text-secondary'
              } hover:text-white text-md cursor-pointer font-medium`}
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
    </nav>
  )
}

export default Navbar
