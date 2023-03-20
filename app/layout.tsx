import AuthProvider from '@/context/AuthProvider'
import './globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
	weight: ['400', '700'],
	subsets: ['latin'],
	variable: '--font-nunito',
})

export const metadata = {
	title: 'Connect',
	description: 'Connect with the reddit client!',
	manifest: '/manifest.json',
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 1,
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<AuthProvider>{children}</AuthProvider>
			</body>
		</html>
	)
}
