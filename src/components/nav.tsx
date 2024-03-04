import Link from 'next/link'
import React from 'react'

const navList = [
	{ name: 'About', url: '#about' },
	{ name: 'Experience', url: '#experience' },
	// { name: 'Work', url: '#work' },
	{ name: 'Contact', url: '#contact' },
]

const Nav = () => {
	return (
		<header className="h-16 flex items-center">
			<div className="flex ml-auto">
				<ol className="flex flex-row ml-auto font-mono pr-16">
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
				</ol>
			</div>
		</header>
	)
}

export default Nav
