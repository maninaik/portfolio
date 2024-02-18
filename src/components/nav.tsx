import Link from 'next/link'
import React from 'react'

const navList = [
	{ name: 'About', url: '#aobut' },
	{ name: 'Experience', url: '#experience' },
	{ name: 'Work', url: '#work' },
	{ name: 'Contact', url: '#contact' },
]

const Nav = () => {
	return (
		<header className="h-16">
			<div className="flex">
				<ol className="flex flex-row ml-auto font-mono">
					{navList.map(({ name, url }, index) => (
						<li
							key={url}
							className="p-2">
							<Link href={url}> {name}</Link>
						</li>
					))}
				</ol>
			</div>
		</header>
	)
}

export default Nav
