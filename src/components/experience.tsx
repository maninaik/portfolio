'use client'
import sr from '@/libs/scrollreveal'
import React, { useEffect, useRef, useState } from 'react'

const jobs = [
	{
		name: 'Datapoem',
		role: 'Frontend Developer',
		url: 'https://datapoem.com',
		duration: 'July 2023 - Present',
		description: [
			'Implemented changes to the webpack and nginx configurations resulting in a Lighthouse performance metric improvement from 54 to 72 for an existing Vue app.',
			'Successfully integrated Azure-AD login functionality into Vue App, leveraging the MSAL library. Additionally, I streamlined authentication for our internal tools web app by using Next-Auth.',
			'Spearheaded the creation of a comprehensive UI library using shadcn/ui within an Nx Monorepo. My focus on accessibility was central to this project, ensuring usability for all.',
			'Resolving bugs and introducing new functionalities to an existing Vue2-based web app.',
		],
	},
	{
		name: 'Accenture',
		role: 'Application Development Analyst',
		url: 'https://www.accenture.com/in-en',
		duration: 'January 2021 - July 2023',
		description: [
			'Developed and maintained a high-traffic search tool utilized by thousands of users daily, resulting in improved',
			'Enhanced dashboard performance by implementing widgets and optimizing code, resulting in faster load times and improved overall performance.',
			"Collaborated with the client's design team to convert wireframes into efficient and accessible user interfaces, ensuring seamless interactions and design guideline adherence.",
			'Streamlined onboarding for new Accenture clients by creating a React starter kit, expediting project kickstarts.',
			'Maintained and updated various website sections using React, AngularJS, Sass, and HTML to ensure a consistent and polished user experience.',
		],
	},
	{
		name: 'Konnections India',
		role: 'Junior Software Developer (Intern)',
		url: 'https://konnectionsindia.com',
		duration: 'January 2019 - February 2019',
		description: [
			'Konnections is a service based startup which also has a product called Jewelzie.',
			'Implemented various User Interfaces using PHP, CSS, HTML and JavaScript.',
		],
	},
]
const Experience = () => {
	const [activeTab, setActiveTab] = useState(0)

	const revealRef = useRef(null)
	useEffect(() => {
		if (revealRef.current && sr) sr.reveal(revealRef.current)
	}, [])
	return (
		<div className="max-w-[700px]">
			<div className="flex items-center mb-8 gap-4">
				<h2 className="font-bold text-white text-2xl">
					<span className="text-mn-green font-mono">02.</span>
					Work Experience
				</h2>
				<div className="h-[1px] w-[300px] bg-zinc-700"></div>
			</div>

			<div className="flex">
				{/* company list */}
				<div className="w-1/5">
					<ul className="font-mono flex flex-col tablist">
						{jobs.map((job, index) => (
							<button
								key={job.name}
								onClick={() => setActiveTab(index)}
								className={`text-sm ${
									index === activeTab
										? 'text-mn-green'
										: ''
								}`}>
								{job.name}
							</button>
						))}
						<div
							className="tablist_selected"
							style={{
								transform: `translateY(calc(${activeTab} * 52px ))`,
							}}></div>
					</ul>
				</div>

				{/* company info  */}
				<div className="ml-4">
					<div className="mb-4">
						<h3 className="text-lg">
							<span className="text-white">
								{jobs[activeTab].role}
							</span>
							<span className="text-mn-green">
								{' '}
								@{' '}
								<a
									href={jobs[activeTab].url}
									target="_blank"
									className="mn-inline-link">
									{jobs[activeTab].name}
								</a>
							</span>
						</h3>
						<p className="text-sm font-mono">
							{jobs[activeTab].duration}
						</p>
					</div>
					{
						<ul className="mn-green-arrow text-[0.9rem]">
							{jobs[activeTab].description.map(
								(point, index) => (
									<li
										key={index}
										className="mb-2">
										{point}
									</li>
								)
							)}
						</ul>
					}
				</div>
			</div>
		</div>
	)
}

export default Experience
