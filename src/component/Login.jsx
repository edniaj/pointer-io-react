import React, { useContext } from 'react'
import { loginContext } from '../App'
import { FormControl, Typography } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import LoginIcon from '@mui/icons-material/Login';
import { Button } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useEffect } from 'react'

function Login() {
  let { login, setLogin } = useContext(loginContext)
  let navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)



  const handleInput = (e) => {

    if (e.target.name === 'email') {
      setEmail(e.target.value)
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value)
    }
  }
  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const handlePOST = async () => {
    console.log('CLICKING ON POST SUBMIT BUTTON')
    await axios.post('http://localhost:3005/login', { email, password })
      .then(res => {
        if (res.data === []) throw Error('User not found')
        console.log(res.data)
        setLogin(true)
        const {_id} = res.data[0]
        console.log(_id)
        Cookies.set('email', email, { expires: 7 })
        Cookies.set('password', password, { expires: 7 })
        Cookies.set('_id',_id ,{expires: 7})
      })
      .catch(err => {
        console.log(err.response.data)
      })
  }

  if (login) {
    navigate('../')
  } // redirect to homepage if loggedin
  useEffect(() => {
    let isCancelled = false;
    const handleCookie = async () => {
      await axios.post('http://localhost:3000/login', { email: Cookies.get('email'), password: Cookies.get('password') })
        .then(res => {
          console.log(res.data)
          if(!isCancelled) setLogin(true)
          setLogin(true)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    }

    handleCookie()

    return () => {
      isCancelled = true
    }
  }, [Cookies.get('email')])



  return (
    <>
      <FormControl>
        <InputLabel>Login email</InputLabel>
        <OutlinedInput
          value={email}
          name='email'
          onChange={handleInput}
        ></OutlinedInput>
      </FormControl>

      <FormControl>

        <InputLabel> Password</InputLabel>
        <OutlinedInput
          type={showPassword ? 'text' : 'password'}
          value={password}
          name='password'
          onChange={handleInput}
          id='password'
          endAdornment={
            <IconButton onClick={handleShowPassword} edge='end'>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          }
          label='Password'
        ></OutlinedInput>
      </FormControl>

      <Button variant="outlined" endIcon={<LoginIcon />} onClick={handlePOST}>
        Login
      </Button>
    </>
  )
}

export default Login

// Guides

//Cookies.get('name')  get cookie by name
// Cookies.remote('name') remove cookie by name