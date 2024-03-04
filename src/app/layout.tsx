import type { Metadata } from 'next'
import { Inter, Roboto_Mono, Space_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import SocialHandles from '@/components/social-handles'
import Footer from '@/components/footer'

export const metadata: Metadata = {
	title: 'Mani Naik',
	description: "Mani Naik's portfolio",
}

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
})

const roboto_mono = Space_Mono({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-space-mono',
	weight: '400',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${roboto_mono.variable}`}>
				<Nav />
				<SocialHandles />
				<main className="px-32 font-sans">{children}</main>
				<Footer />
			</body>
		</html>
	)
}
