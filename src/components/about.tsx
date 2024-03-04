'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import sr from '@/utils/scrollreveal'

const About = () => {
	const aboutRef = useRef(null)

	useEffect(() => {
		if (aboutRef.current) sr.reveal(aboutRef.current)
	}, [])

	return (
		<div ref={aboutRef}>
			<div className="flex items-center mb-8 gap-4">
				<h2 className="font-bold text-white text-2xl">
					<span className="text-mn-green font-mono">01.</span>{' '}
					About Me
				</h2>
				<div className="h-[1px] w-[300px] bg-zinc-700"></div>
			</div>

			<div className="grid grid-cols-32  gap-12">
				<div>
					Hello! My Name is Mani and I enjoy creating things that
					live on the internet. My interest in web development
					started in 2016 when I tried to create a website with
					plain HTML and CSS during my summer vacation! After I
					completed my engineering in Information Technology from
					Mumbai University I started my career at Accenture.
					Currently, I am working as a front end developer at{' '}
					<a
						href="https://datapoem.com"
						target="_blank"
						className="text-mn-green mn-inline-link">
						Datapoem
					</a>{' '}
					in Bengaluru, India.
					<p className="mt-8">
						Here are a few technologies I’ve been working with
						recently:
					</p>
					<ul className="grid grid-cols-2 gap-x-8 mt-5 mn-green-arrow">
						<li>Javascript (ES6+)</li>
						<li>TypeScript</li>
						<li>React</li>
						<li>NextJS</li>
					</ul>
				</div>

				<div className="mn-img-green-tint">
					<Image
						className="aspect-square object-cover"
						src="/image/Mani pic.jpg"
						alt="Mani picture"
						width={250}
						height={250}
					/>
				</div>
			</div>
		</div>
	)
}

export default About
