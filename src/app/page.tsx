import dynamic from 'next/dynamic'
const Hero = dynamic(() => import('@/components/hero'), { ssr: false })
const About = dynamic(() => import('@/components/about'), { ssr: false })
const Experience = dynamic(() => import('@/components/experience'), {
	ssr: false,
})
const Contact = dynamic(() => import('@/components/contact'), { ssr: false })

export default function Home() {
	return (
		<>
			<section className="py-36 flex flex-col justify-center">
				<Hero />
			</section>
			<section
				className="py-36 flex flex-col justify-center"
				id="about">
				<About />
			</section>
			<section
				className="py-36 flex flex-col justify-center items-center"
				id="experience">
				<Experience />
			</section>
			<section
				className="py-36 flex flex-col justify-center items-center"
				id="contact">
				<Contact />
			</section>
		</>
	)
}
