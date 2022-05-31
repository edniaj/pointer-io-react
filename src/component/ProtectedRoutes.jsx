import React, { useContext } from 'react'
import { loginContext } from '../App'
import { Container, FormControl, Typography } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton'
import LoginIcon from '@mui/icons-material/Login'
import { Button } from '@mui/material'
import axios from 'axios'
import { Outlet, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import Stack from '@mui/material/Stack'
import Navbar from './Navbar'
import { useLayoutEffect } from 'react'
import { Carousel } from 'react-bootstrap'

function ProtectedRoutes() {
  let { login, setLogin } = useContext(loginContext)
  let navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showError, setShowError] = useState(false)

  const handleInput = e => {
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
    await axios
      .post('https://warm-citadel-62203.herokuapp.com/login', { email, password })
      .then(res => {
        if (res.data === [] || undefined) throw Error('User not found')
        setLogin(true)
        setShowError(false)
        const { _id } = res.data
        Cookies.set('email', email, { expires: 7 })
        Cookies.set('password', password, { expires: 7 })
        Cookies.set('_id', _id, { expires: 7 })

      })
      .catch(err => {
        setShowError(true)
      })
  }


  useEffect(() => {
    let isCancelled = false
    const handleCookie = async () => {
      await axios
        .post('https://warm-citadel-62203.herokuapp.com/login', {
          email: Cookies.get('email'),
          password: Cookies.get('password')
        })
        .then(async (res) => {
          if (!isCancelled) setLogin(true)
          await setLogin(true)
          navigate("./")
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
    login ?
      <Container maxWidth='' disableGutters
        sx={{
          display: 'flex',
          flexDirection: "column",
          width: "100%",
          minHeight: "100vh",
          height: "auto",
          backgroundColor: "#ebebeb",
        }}  >
        <Navbar />
        <Outlet />
      </Container>
      :
      <>

        <Navbar />




        <Container sx={{ marginTop: "70px" }}>



          <div style={{
            backgroundColor: "rgb(235,235,235,0.91)",
            zIndex: 5,
            borderRadius: 20,
            border: "1px solid black",
            height: "600px",
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: "10vh",
          }}>

            <div style={{ display: showError ? "block" : "none", marginBottom: "5vh", color: "red", border: "1px solid black", padding: "10px" }}>Login Failed - Wrong credentials</div>

            <h2>Pointer.io</h2>
            <p4 style={{marginBottom:"20px", fontFamily:"Segoe Script"}}>Best job portal since 2022</p4>
            <Stack direction='column' spacing={2}>


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

              <Button
                variant='outlined'
                endIcon={<LoginIcon />}
                onClick={handlePOST}
              >
                Login
              </Button>
            </Stack>
            <Stack sx={{ marginTop: "5vh" }}>

              <div>Username : test@hotmail.com </div>
              <div>Password: Test1234</div>

            </Stack>
          </div>


        </Container>
      </>
  )
}

export default ProtectedRoutes

