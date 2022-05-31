import React, { useContext } from 'react'
import { loginContext } from '../App'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import { Container, createTheme } from '@mui/material';
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
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from '@mui/styles'
import ChatIcon from '@mui/icons-material/Chat';

const theme = createTheme({
  typography: {
    fontFamily: "Helvetica Neue"
  },
});

function Home() {

  const sxContainer = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    marginTop: '10vh',
  }

  return (
    <React.Fragment>

      <div className="container-fluid specialBackground" >

        <Container sx={sxContainer} >
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://miro.medium.com/max/1200/0*a16EHXgiNxdLohzI.jpg" className="d-block w-100" alt="Looking for a job" />
              </div>
              <div className="carousel-item">
                <img src="https://www.nyit.edu/files/events/Event_20210209_QuickChatHowToTalkAboutYourselfToEmployers_Hero.jpg" className="d-block w-100" alt="Chat with employer" />
              </div>
              <div className="carousel-item">
                <img src="https://img.freepik.com/free-vector/creative-teamwork-male-female-character-designing-new-products-improving-existing-ones-business-brainstorming-ui-ux-design-concept-creating-application-flat-style-vector-illustration_187411-466.jpg" className="d-block w-100" alt="Creating job" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <ThemeProvider theme={theme}>
            <Box sx={{ marginTop: "3vh" }}>
              <Box >
                <Box>
                  <Typography variant='h5'> Explore job offers <WorkOutlineIcon/></Typography>
                  <Typography variant='body'>Find jobs that only excites you !!!</Typography>
                </Box>
                <Box sx={{marginTop:"5vh"}}>
                  <Typography variant='h5'> Chat with experts&nbsp;<MessageOutlinedIcon/></Typography>
                  <Typography variant='body'>Talk to potential exployers!</Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ marginTop: "5vh", paddingBottom:"5vh" }}>
              <Typography variant='h5'> Create listings&nbsp;<NoteAddIcon/></Typography>
              <Typography variant='body'> Recruit employees that are a good fit to your organization</Typography>
            </Box>
          </ThemeProvider>
        </Container>

      </div>



    </React.Fragment>

  )
}

export default Home