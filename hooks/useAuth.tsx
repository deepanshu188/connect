import { AuthContext } from '@/context/AuthProvider'
import React, { useContext } from 'react'

export const useAuth = () => useContext(AuthContext)
