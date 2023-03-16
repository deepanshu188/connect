import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Skeleton } from '@mui/material'
import { useAuth } from '@/hooks/useAuth'
import { RiUserFollowLine, RiSettingsFill } from 'react-icons/ri'

export const Profile = () => {
	const [user, setUser] = useState<any>({})
	const { authToken } = useAuth()

	const getUser = (token: string) => {
		if (!token) return
		fetch('https://oauth.reddit.com/api/v1/me', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then(res => res.json())
			.then(u => setUser(u))
	}

	useEffect(() => {
		getUser(authToken)
	}, [authToken])

	return (
		<div className='h-[94vh] flex items-center bg-slate-100'>
			{user?.subreddit ? (
				<div className='m-auto rounded-lg shadow-lg p-4 w-4/5 sm:w-[400px] h-4/5 bg-white'>
					{/* <RiSettingsFill size={24} color='red' /> */}
					<div className='flex flex-col items-center'>
						<Image
							className='rounded-lg m-2'
							src={user?.subreddit?.banner_img}
							alt=''
							width={500}
							height={200}
						/>
						<Image
							src={user?.snoovatar_img || '/reddit.ico'}
							alt=''
							className='rounded-full shadow-md'
							width={80}
							height={80}
						/>
						<p className='text-lg font-semibold font-nunito'>
							{user?.subreddit?.title?.toUpperCase()}
						</p>
						<p>{user?.subreddit?.display_name_prefixed}</p>
						<div className='flex items-start'>
							<RiUserFollowLine style={{ height: 24 }} />
							<p className='mx-1'>
								Followers: <span className='font-nunito'>{user?.subreddit?.subscribers}</span>
							</p>
						</div>
						<p className='m-2 text-center'>{user?.subreddit?.description}</p>
					</div>
				</div>
			) : (
				<Skeleton className='m-auto w-4/5 sm:w-[400px]' variant='rounded' height={'80%'} />
			)}
		</div>
	)
}
