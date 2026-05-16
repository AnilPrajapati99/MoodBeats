import React from 'react'
import { useAuth } from '../hooks/use.auth'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({children}) => {
    const {user} = useAuth()
    console.log(user)

   

    if(user){
        return <Navigate to="/player" replace />
    }
  return children
}

export default PublicRoute
