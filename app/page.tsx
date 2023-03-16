'use client'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
	const { authToken } = useAuth()
	const router = useRouter()

	const REDIRECT_URI = 'http://127.0.0.1:3000/user'
	const RESPONSE_TYPE = 'code'
	const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
	const SCOPE = 'identity+read+mysubreddits+vote+subscribe+save+edit'
	const DURATION = 'permanent'
	const STATE = Math.random().toString(16).substring(2)
	const authUrl = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&state=${STATE}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&duration=${DURATION}`

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
