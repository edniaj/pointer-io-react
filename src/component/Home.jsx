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
    flexDirection: 'column',
    height: '100%',
    width: '100vw',
    marginTop: '10vh',
    backgroundColor: "white",
  }

  return (
    <>
      <Container sx={sxContainer}>
      
        <img sx={{width:"100%"}} src="https://media3.giphy.com/media/RiykPw9tgdOylwFgUe/giphy.gif" alt='looking for job'/>
      
        <div>
          <Typography variant="h4">
            Documentation
          </Typography>
        </div>
        <div>
          <Typography variant="h6">
            <a href="https://github.com/edniaj/pointer-io-react" >Github link</a>
          </Typography>
        </div>
      </Container>
    </>

  )
}

export default Home