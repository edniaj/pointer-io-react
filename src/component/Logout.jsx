import React from 'react'
import { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { loginContext } from '../App'
import Cookies from 'js-cookie'

function Logout() {
    let { login, setLogin } = useContext(loginContext)
    Cookies.remove('email')
    Cookies.remove('password')
    Cookies.remove('_id')
    setLogin(false)
    
    return <Navigate to="/"/>

}

export default Logout