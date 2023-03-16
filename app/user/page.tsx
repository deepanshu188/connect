'use client'
import React, { useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { TabView } from '@/components/tabview'

const User = () => {
	const { setAuthToken } = useAuth()
	const REDIRECT_URI = 'http://127.0.0.1:3000/user'
	const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
	const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET

	const getAuthToken = async () => {
		const data = await fetch('https://www.reddit.com/api/v1/access_token', {
			method: 'POST',
			headers: {
				Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: `grant_type=authorization_code&${window.location.search.slice(
				1,
			)}&redirect_uri=${REDIRECT_URI}`,
		})

		return data.json()
	}

	useEffect(() => {
		getAuthToken().then(res => res.access_token && setAuthToken(res.access_token))
	}, [])

	return (
		<>
			<TabView />
		</>
	)
}

export default User
