export default {
	REDIRECT_URI: `${window.location.origin}/user`,
	CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID,
	CLIENT_SECRET: process.env.NEXT_PUBLIC_CLIENT_SECRET,
	SCOPE: 'identity+read+mysubreddits+vote+subscribe+save+edit',
	DURATION: 'permanent',
	RESPONSE_TYPE: 'code',
}
