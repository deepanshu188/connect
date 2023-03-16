import { useAuth } from '@/hooks/useAuth'
import React from 'react'
import { RxArrowUp, RxArrowDown } from 'react-icons/rx'
import { BsStar, BsStarFill } from 'react-icons/bs'
import { GoComment } from 'react-icons/go'

export const Postcard = ({ data }: any) => {
	const { authToken } = useAuth()
	const vote = (dir: string) => {
		if (!authToken) return
		fetch(`https://oauth.reddit.com/api/vote?id=${data.name}&dir=${dir}`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${authToken}`,
			},
		})
			.then(res => res.json())
			.then(vote => {})
	}

	const handleSaveUnsave = (str: string) => {
		if (!authToken) return
		fetch(`https://oauth.reddit.com/api/${str}?id=${data.name}`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${authToken}`,
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
			.then(res => res.json())
			.then(save => {})
	}

	return (
		<div className='shadow p-2 w-4/5 break-word overflow-x-hidden'>
			<div className='flex'>
				<img
					src={data?.thumbnail !== 'self' ? data?.thumbnail : '/reddit.ico'}
					alt=''
					width={25}
					height={25}
					className='rounded-full mx-1'
				/>
				<p>{data?.subreddit_name_prefixed}</p>
			</div>
			<p className='font-semibold my-1'>{data?.title}</p>
			{/* <img src={data?.thumbnail} alt='' width={200} height={200} /> */}
			<p className='bg-gray-100 p-2 rounded-md'>{data?.selftext}</p>
			<div className='flex items-center justify-between mx-2'>
				<div className='flex items-center'>
					<p className='flex items-center mx-1'>
						<RxArrowUp style={{ color: 'green', cursor: 'pointer' }} onClick={() => vote('1')} />
						{data?.ups}
					</p>
					<p className='flex items-center mx-1'>
						<RxArrowDown style={{ color: 'red', cursor: 'pointer' }} onClick={() => vote('-1')} />
						{data?.downs}
					</p>
					<div className='m-2 cursor-pointer'>
						{data.saved ? (
							<BsStarFill style={{ color: '#acacac' }} onClick={() => handleSaveUnsave('unsave')} />
						) : (
							<BsStar onClick={() => handleSaveUnsave('save')} />
						)}
					</div>
				</div>
				<GoComment style={{ cursor: 'pointer' }} />
			</div>
		</div>
	)
}
