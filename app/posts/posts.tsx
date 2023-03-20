import { Btn, Select } from '@/components/customInputs'
import { Postcard } from '@/components/postcard'
import { useAuth } from '@/hooks/useAuth'
import { AuthenticatedReq } from '@/utils/AuthenticatedReq'
import { CircularProgress } from '@mui/material'
import { useEffect, useState } from 'react'

export const Posts: any = () => {
	const { authToken } = useAuth()
	const [posts, setPosts] = useState([])
	const [postType, setPostTyle] = useState('new')
	const [loading, setLoading] = useState(true)
	const [after, setAfter] = useState<string | undefined>('')

	const getNewPosts = (token: string) => {
		if (!token) return
		fetch(`https://oauth.reddit.com/${postType}?after=${after}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then(res => res.json())
			.then(posts => {
				setLoading(false)
				setPosts(posts?.data?.children)
			})
	}

	useEffect(() => {
		// AuthenticatedReq(authToken, getNewPosts)
		getNewPosts(authToken)
	}, [authToken, postType, after])

	const postTypeOptions = [
		{
			id: 'new',
			value: 'New',
		},
		{
			id: 'hot',
			value: 'Hot',
		},
		{
			id: 'top',
			value: 'Top',
		},
		{
			id: 'rising',
			value: 'Rising',
		},
	]

	console.log(posts.at(-1), after, 'type')
	const loadingStyle = loading ? 'w-screen h-[80vh] justify-center' : ''

	return (
		<div className='flex flex-col items-end m-2'>
			<Select
				options={postTypeOptions}
				className='w-52'
				onChange={({ target }: any) => {
					setPostTyle(target.value)
					setLoading(true)
				}}
			/>
			<div className={`flex flex-col items-center my-2 gap-4 w-full ${loadingStyle}`}>
				{loading ? (
					<CircularProgress style={{ color: '#121417' }} />
				) : (
					<>
						{posts?.map(({ data }, i) => (
							<Postcard key={i} data={data} />
						))}
						<Btn
							onClick={() => {
								setLoading(true)
								const thing = posts.at(-1)?.['data']?.['id']
								setAfter(thing === after ? '' : thing)
							}}
						>
							More
						</Btn>
					</>
				)}
			</div>
		</div>
	)
}
