'use client'
import { useState } from 'react'
import { styles } from '../styles'
import { navLinks } from '../constants'
import Image from 'next/image'
import Link from 'next/link'
import { logo, menu, close } from 'public/images'

const Navbar = () => {
    const [active, setActive] = useState("")
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
                        setActive("")
                        window.scrollTo(0, 0)
                    }}
                >
                    <Image
                        src={logo}
                        alt="logo"
                        className="h-9 w-9 object-contain "
                    />
                    <p className="text-white cursor-pointer text-lg font-bold hidden xs:block">
                        Isaac Leong
                    </p>
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map(({id, title}) => (
                        <li key={id} className={`${active === id ? "text-white" : "text-secondary"} hover:text-white cursor-pointer text-md font-medium`}>
                            <Link href={`#${id}`}>{title}</Link>
                        </li>
                    ))}
                </ul>
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <Image src={isMobileMenuOpen ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => {
                        setIsMobileMenuOpen((prev) => !prev)
                    }}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
