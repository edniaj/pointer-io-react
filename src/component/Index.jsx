import React, { useContext } from 'react'
import { loginContext } from '../App'
import { useNavigate, Outlet } from 'react-router-dom'
import { useEffect } from 'react'

import Navbar from './Navbar'
// Edit this code to enable navbar
function Index() {
    let { login } = useContext(loginContext)
    let navigate = useNavigate()

    useEffect(() => {
        if (!login) {
            console.log(login)
            navigate('./login')
        }
    }, [login, navigate])
    return (
        <>
            {login && <Navbar />}
            <Outlet /> 
        </>
    )
}

export default Index