import React from 'react'
import Icon from './icons'

const socialHandles = [
	{
		name: 'Github',
		url: 'https://github.com/maninaik',
	},
	{
		name: 'Linkedin',
		url: 'https://linkedin.com/in/maninaik',
	},
	{
		name: 'Twitter',
		url: 'https://twitter.com/maninaik111',
	},
	{
		name: 'Instagram',
		url: 'https://instagram.com/maniinaik/',
	},
]
const SocialHandles = ({ className = '' }: { className?: string }) => {
	return (
		<div
			className={`md:fixed left-8 bottom-0 w-full px-5 md:px-0 md:w-auto ${className}`}>
			<ol className="mn-social-handle__list flex md:flex-col items-center gap-8 md:gap-0 justify-evenly">
				{socialHandles.map(({ name, url }) => (
					<li
						key={name}
						className="list-none py-2">
						<a
							href={url}
							className="hover:text-mn-green transition"
							aria-label={name}
							target="_blank">
							<Icon name={name} />
						</a>
					</li>
				))}
			</ol>
		</div>
	)
}

export default SocialHandles
