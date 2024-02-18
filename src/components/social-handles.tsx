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
		url: 'https://www.instagram.com/maniinaik/',
	},
]
const SocialHandles = () => {
	return (
		<div className="fixed left-8 bottom-0">
			{socialHandles.map(({ name, url }) => (
				<li
					key={name}
					className="list-none py-2">
					<a
						href={url}
						aria-label={name}>
						<Icon name={name} />
					</a>
				</li>
			))}
		</div>
	)
}

export default SocialHandles
