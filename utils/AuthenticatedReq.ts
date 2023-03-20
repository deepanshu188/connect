import constants from './constants'

export const AuthenticatedReq = (authToken: string, ApiReq: any) => {
	const time = 2000
	const currentTime = 2001
	if (currentTime > time) {
		const getAuthToken = async () => {
			const data = await fetch(`https://www.reddit.com/api/v1/access_token`, {
				method: 'POST',
				headers: {
					Authorization: `Basic ${Buffer.from(
						`${constants.CLIENT_ID}:${constants.CLIENT_SECRET}`,
					).toString('base64')}`,
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: `grant_type=refresh_token&refresh_token=${authToken}`,
			})

			return data.json()
		}
		getAuthToken()
	}
	ApiReq(authToken)
}
