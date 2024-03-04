import About from '@/components/about'
import Contact from '@/components/contact'
import Experience from '@/components/experience'
import Hero from '@/components/hero'

export default function Home() {
	return (
		<>
			<section className="h-screen flex flex-col justify-center">
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
