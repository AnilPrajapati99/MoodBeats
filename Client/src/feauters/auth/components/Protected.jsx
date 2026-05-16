import React from 'react'
import { useAuth } from '../hooks/use.auth'
import { Navigate, useNavigate } from 'react-router-dom'
import MainHome from '../../home/pages/MainHome'
import { useContext } from 'react'

const Protected = ({children}) => {
    const {user,loading} = useAuth()
    const navigate = useNavigate()

    console.log(loading)

    console.log(user,loading)

       if(loading){
        return <h1>Loading...</h1>
    }


    if(!user){
       return  <Navigate to="/register" replace />
    }

 

  return children
}

export default Protected
