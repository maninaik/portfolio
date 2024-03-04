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
const SocialHandles = () => {
	return (
		<div className="fixed left-8 bottom-0">
			<ol className="mn-social-handle__list flex flex-col items-center">
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
