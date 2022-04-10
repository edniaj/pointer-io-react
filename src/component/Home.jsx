import React, { useContext } from 'react'
import { loginContext } from '../App'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import { Container } from '@mui/material';
import { Typography } from '@mui/material'
import { Tabs } from '@mui/material';
import { Box } from '@mui/material';
import { Tab } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

function Home() {

  const sxContainer = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100vw',
    marginTop: '10vh',
    backgroundColor: "ebebeb",
  }

  return (
    <>
      <Container sx={sxContainer}>
      

        <div>
          <Typography>
         <WorkOutlineIcon/>
          </Typography>
        </div>
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