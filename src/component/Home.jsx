import React, { useContext } from 'react'
import { loginContext } from '../App'
import {useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'



function Home() {
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
    {login && <Navbar/>}
    </>

  )
}

export default Home