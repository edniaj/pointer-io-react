import { Paper } from '@mui/material';
import { Container } from '@mui/material';
import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import axios from 'axios'
import Cookies from 'js-cookie'
import { useState } from 'react';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { Avatar } from '@mui/material';
import { ListItemAvatar } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import { ClassNames } from '@emotion/react';
import { Checkbox } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
const sxContainer = {
  display: 'flex',
  flexDirection: 'row',
  height: '80vh',
  marginTop: '10vh'
}
const sxMenu = {
  border: 1,
  display: {
    lg: 'block'
  }
  ,
  flex: {
    xs: 1,
    lg: 4
  },
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    width: '0.6em',
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0,0,0,.1)',
    outline: '1px solid slategrey'
  }
}
const sxDetail = {
  border: 1,
  display: {
    xs: 'none',
    lg: 'block'
  }
  ,
  flex: {
    lg: 6
  }
}
const sxListItem = {
  height: '136px',
  // cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'lightskyblue'
  }
}
const sxIcon = {
  '&:hover': {
    cursor: "pointer",
    fontSize: '2em',
  },
  marginRight: '1em'
}

let _id = Cookies.get('_id')

function JobEdit() {

  const [jobOffer, setJobOffer] = useState([])

  const parseTime = (date) => {
    return (
      new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(date)
    )
  }

  const handleDelete = () => {
  }
  const handleEdit = () => {
  }
  const handleDisplayDetail = () => {
    
  }
  useEffect(() => {
    let isCancelled = false
    axios.get(`http://localhost:3005/job-offer/view/${_id}`)
      .then(x => {
        // console.log(x.data[0])
        if (!isCancelled) setJobOffer(x.data)
      })
      .catch(err => console.log(err.response.data))
    return () => {
      isCancelled = true
    }
  }, [])


  const listJobOffer = () => {
    return (
      jobOffer.map(x =>
        <>
          <ListItem
            alignItems="flex-start"
            sx={sxListItem}
            key={x._id}
            secondaryAction={
              <>
                <EditIcon sx={sxIcon}
                  onClick={handleEdit} />
                <DeleteIcon sx={sxIcon}
                  onClick={handleDelete} />
              </>
            }
            disablePadding
            onClick={() => console.log('test')}
          >



            <ListItemAvatar>
              <Avatar alt="image not available" src={x.organizationImageurl}
                sx={{ width: "57px", height: "57px", marginRight: "10px" }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={x.jobTitle}
              multiline='true'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'block', textOverflow: 'ellipsis' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {parseTime(x.timestamp)}
                  </Typography>
                  <Typography
                    sx={{ display: 'block', textOverflow: 'ellipsis' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {x.organizationName}
                  </Typography>

                  <Typography
                    sx={{ display: 'block', width: "60%", textOverflow: 'ellipsis' }}
                    component="span"
                    variant="body2"
                    color="text.primary"

                  >
                    {x.streetAddress}
                  </Typography>

                </React.Fragment>
              }

            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </>)
    )
  }


  return (
    <>
      <Box sx={sxContainer}>
        <Box sx={sxMenu}>
          <List sx={{ width: '100%', minWidth: '', bgcolor: 'background.paper' }}>
            {listJobOffer()}
          </List>
        </Box>

        <Box sx={sxDetail}>
          <Outlet />
        </Box>

      </Box>

    </>

  )
}

export default JobEdit