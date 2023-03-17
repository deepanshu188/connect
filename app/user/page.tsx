'use client'
import React, { useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { TabView } from '@/components/tabview'
import constants from '@/utils/constants'

const User = () => {
	const { setAuthToken } = useAuth()

	const getAuthToken = async () => {
		const data = await fetch('https://www.reddit.com/api/v1/access_token', {
			method: 'POST',
			headers: {
				Authorization: `Basic ${Buffer.from(
					`${constants.CLIENT_ID}:${constants.CLIENT_SECRET}`,
				).toString('base64')}`,
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: `grant_type=authorization_code&${window.location.search.slice(1)}&redirect_uri=${
				constants.REDIRECT_URI
			}`,
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
