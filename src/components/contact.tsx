'use client'
import sr from '@/libs/scrollreveal'
import { useEffect, useRef } from 'react'

const Contact = () => {
	const revealRef = useRef(null)
	useEffect(() => {
		if (revealRef.current && sr) sr.reveal(revealRef.current)
	}, [])
	return (
		<div
			className="flex flex-col justify-center items-center max-w-[600px]"
			ref={revealRef}>
			<h2 className="text-lg text-mn-green font-mono mb-5">
				03. What&apos;s next ?
			</h2>
			<h3 className="text-5xl text-white font-bold mb-7">
				Get in Touch
			</h3>

			<p className="text-center">
				I&apos;m excited to hear from you! Whether you have a
				project in mind, want to discuss collaboration
				opportunities, or simply want to say hello, feel free to
				reach out. Your ideas and inquiries are always welcome.
			</p>

			<div className="mt-7">
				<a
					href="mailto:maninaik111@gmail.com"
					className="mn-btn-link font-mono inline-block"
					target="_blank">
					Say Hello
				</a>
			</div>
		</div>
	)
}

export default Contact
