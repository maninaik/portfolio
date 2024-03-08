'use client'
import sr from '@/libs/scrollreveal'
import React, { useEffect, useRef } from 'react'

const Hero = () => {
	const revealRef = useRef(null)
	useEffect(() => {
		if (revealRef.current && sr) sr.reveal(revealRef.current)
	}, [])

	return (
		<div ref={revealRef}>
			<h1 className="text-mn-green mb-8 font-mono">Hi, my name is</h1>
			<h2 className="text-white text-7xl font-bold">Mani Naik.</h2>
			<h3 className="text-7xl font-bold font-sans">
				I build things for the web.
			</h3>
			<p className="max-w-[600px] mt-12 text-lg">
				I&apos;m a software engineer specializing in crafting
				high-performance web applications with a focus on
				exceptional user experiences. Currently, I am dedicated to
				building accessible and human-centered products at{' '}
				<a
					href="https://www.datapoem.com"
					target="_blank"
					referrerPolicy="no-referrer"
					className="text-mn-green mn-inline-link">
					Datapoem
				</a>
				.
			</p>
			<div className="mt-7">
				<a
					href="./resume/Mani Naik Resume.pdf"
					className="mn-btn-link font-mono inline-block"
					target="_blank">
					Resume
				</a>
			</div>
		</div>
	)
}

export default Hero
