import React from 'react'
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
const Icon = ({ name }: { name: string }) => {
	switch (name) {
		case 'Github':
			return <Github />
		case 'Linkedin':
			return <Linkedin />
		case 'Instagram':
			return <Instagram />
		case 'Twitter':
			return <Twitter />
		default:
			return <Twitter />
	}
}

export default Icon
