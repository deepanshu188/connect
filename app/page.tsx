'use client'
import { useAuth } from '@/hooks/useAuth'
import constants from '@/utils/constants'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
	const { authToken } = useAuth()
	const router = useRouter()

	const STATE = Math.random().toString(16).substring(2)
	const authUrl = `https://www.reddit.com/api/v1/authorize?client_id=${constants.CLIENT_ID}&response_type=${constants.RESPONSE_TYPE}&state=${STATE}&redirect_uri=${constants.REDIRECT_URI}&scope=${constants.SCOPE}&duration=${constants.DURATION}`

	if (authToken) router.push('/user')

	return (
		<>
			<main className='h-screen flex bg-slate-100'>
				<div className='w-3/5 m-auto flex flex-col items-center'>
					<p className={`font-nunito font-bold text-xl`}>Connect</p>
					<a className='no-underline text-blue-600 hover:scale-110' href={authUrl}>
						Login
					</a>
				</div>
			</main>
		</>
	)
}
