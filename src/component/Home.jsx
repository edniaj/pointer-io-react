import React, { useContext } from 'react'
import { loginContext } from '../App'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import { Container } from '@mui/material';
import { Typography } from '@mui/material'


function Home() {

  const sxContainer = {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '100vw',
    marginTop: '10vh',
    backgroundColor: "white",
  }

  return (
    <>
      <Container sx={sxContainer}>
        <Typography>
          
        </Typography>
      </Container>
    </>

  )
}

export default Home