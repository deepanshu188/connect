'use client'
import dynamic from 'next/dynamic'
import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext<any>({})

const AuthProvider = ({ children }: any) => {
	const [authToken, setAuthToken] = useState(localStorage.getItem('token') || '')

	useEffect(() => {
		localStorage.setItem('token', authToken)
	}, [authToken])

	return <AuthContext.Provider value={{ authToken, setAuthToken }}>{children}</AuthContext.Provider>
}

export default dynamic(() => Promise.resolve(AuthProvider), { ssr: false })
