import React from 'react'
import SocialHandles from './social-handles'

const Footer = () => {
	return (
		<div className="flex justify-center flex-col md:flex-row items-center gap-3 md:gap-0">
			<SocialHandles className="block md:hidden" />
			<a
				href="https://github.com/maninaik"
				className="font-mono text-xs mb-6 hover:text-mn-green"
				target="_blank">
				Built by Mani Naik
			</a>
		</div>
	)
}
export default Footer
