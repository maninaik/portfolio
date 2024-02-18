import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import SocialHandles from '@/components/social-handles'

export const metadata: Metadata = {
	title: 'Mani Naik',
	description: "Mani Naik's portfolio",
}

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
})

const roboto_mono = Roboto_Mono({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto-mono',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} ${roboto_mono.className}`}>
				<Nav />
				<SocialHandles />
				<main className="px-40">{children}</main>
			</body>
		</html>
	)
}
