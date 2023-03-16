import { Posts } from '@/app/posts/posts'
import { Profile } from '@/app/profile/profile'
import { Mine } from '@/app/subreddits/mine'
import { Tabs } from './tabs'

export const TabView = () => {
	const items = [
		{
			label: 'Posts',
			component: <Posts />,
		},
		{
			label: 'Profile',
			component: <Profile />,
		},
		{
			label: 'Subreddits',
			component: <Mine />,
		},
	]

	return <Tabs values={items} />
}
