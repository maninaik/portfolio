'use client'
import useScrollDirection from '@/hooks/use-scroll-direction'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const navList = [
	{ name: 'About', url: '#about' },
	{ name: 'Experience', url: '#experience' },
	// { name: 'Work', url: '#work' },
	{ name: 'Contact', url: '#contact' },
]

const Nav = () => {
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
	const [scrolledToTop, setScrolledToTop] = useState(true)
	const scrollDir = useScrollDirection({ initialDirection: 'down' })
	useEffect(() => {
		document.body.style.overflow = isSideMenuOpen ? 'hidden' : 'unset'
	}, [isSideMenuOpen])

	console.log(scrollDir, ' - this is the scroll')

	const toggleMenu = () => setIsSideMenuOpen(prevVal => !prevVal)
	const handleScroll = () => setScrolledToTop(window.scrollY < 50)

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	})

	return (
		<header
			className="h-16 flex items-center justify-end md:justify-normal fixed bg-secondary w-full z-10 transition-transform"
			style={{
				boxShadow:
					scrollDir === 'up' && !scrolledToTop
						? '0 10px 30px -10px rgb(2, 12, 27, 0.7)'
						: '',
				transform:
					scrollDir === 'down' && !scrolledToTop
						? 'translateY(calc(4rem * -1))'
						: 'translateY(0px)',
			}}>
			<div className="ml-auto hidden md:flex pr-4 md:pr-0">
				<ul className="flex flex-row ml-auto font-mono pr-16">
					{navList.map(({ name, url }, index) => (
						<li
							key={url}
							className="p-2 text-sm hover:text-mn-green duration-100">
							<Link href={url}>
								<span className="text-mn-green">{`0${
									index + 1
								}.`}</span>{' '}
								{name}
							</Link>
						</li>
					))}
				</ul>
			</div>

			<button
				onClick={toggleMenu}
				className="pr-4 z-20 block md:hidden">
				<div className="hamburger-menu">
					<div
						className={`hamburger-menu_line ${
							isSideMenuOpen ? 'close-icon' : ''
						}`}></div>
				</div>
			</button>

			<aside
				className="side-menu z-10 scroll-smooth block md:hidden"
				style={{
					transform: isSideMenuOpen
						? 'translateX(0%)'
						: 'translateX(100%)',
				}}>
				<ul className="flex flex-col font-mono gap-5">
					{navList.map(({ name, url }, index) => (
						<li
							key={url}
							className="p-2 text-sm hover:text-mn-green duration-100">
							<Link
								href={url}
								onClick={() => setIsSideMenuOpen(false)}
								className="flex flex-col gap-3 items-center text-white text-lg">
								<div className="text-mn-green">{`0${
									index + 1
								}.`}</div>{' '}
								{name}
							</Link>
						</li>
					))}
				</ul>
			</aside>
		</header>
	)
}

export default Nav
