import { useAuth } from '@/hooks/useAuth'
import { CircularProgress } from '@mui/material'
import { useEffect, useState } from 'react'

export const Mine = () => {
	const { authToken } = useAuth()
	const [subscribers, setSubscribers] = useState<any>([])

	const getSubscribers = (token: string) => {
		if (!token) return
		fetch(`https://oauth.reddit.com/subreddits/mine/subscriber?limit=100`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then(res => res.json())
			.then(subs => setSubscribers(subs.data.children))
	}

	useEffect(() => {
		getSubscribers(authToken)
	}, [authToken])

	console.log(subscribers, 'subsc')

	const height = subscribers?.length ? 'h-auto' : 'h-[94vh] flex justify-center items-center'

	return (
		<div className={`bg-slate-100 p-2 ${height}`}>
			{subscribers?.length ? (
				<>
					{subscribers?.map(({ data }: any, i: any) => (
						<div
							key={i}
							className='flex items-center shadow-md rounded-xl w-2/4 mx-auto p-2 bg-white my-2'
						>
							<img
								src={data?.icon_img || data.mobile_banner_image || data.community_icon}
								width={22}
								height={22}
								className='rounded-full'
							/>
							<p className='mx-1'>{data?.url.slice(0, -1)}</p>
						</div>
					))}
				</>
			) : (
				<CircularProgress />
			)}
		</div>
	)
}
