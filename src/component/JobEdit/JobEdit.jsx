import { Paper } from '@mui/material';
import { Container } from '@mui/material';
import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';


const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
});



function JobEdit() {


  return (
    <>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
      }}>
        <Box sx={{ 
          border: 1,
          flex:4
          }}>Job editee</Box>

        <Box sx={{
          border:1,
          flex:2

        }}>
          <Outlet />
        </Box>

      </Box>

    </>

  )
}

export default JobEdit