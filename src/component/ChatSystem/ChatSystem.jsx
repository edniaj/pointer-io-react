import { Box, Container, Divider, List, Typography } from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'
import { ListItem } from '@mui/material'
import { ListItemAvatar } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Avatar } from '@mui/material'
import { Badge } from '@mui/material'
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';

import { createContext } from 'react'


const sxContainer = {
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  width: '100vw',
  marginTop: '10vh',
  backgroundColor: "white",

}

const sxListItem = {
  minHeight: "136px",
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#7BB9FF'
  }
}
const sxIcon = {
  '&:hover': {
    cursor: 'pointer',
    fontSize: '2em'
  },
  marginRight: '1em'
}





export const messageContext = createContext(null)


function ChatSystem() {
  let _id = Cookies.get('_id') // User ID
  const [cacheData, setCacheData] = useState([]) // what if cache data dont have ?
  const [showOutlet, setShowOutlet] = useState(false)
  const sxMenu = {
    border: 1,
    display: {
      xs: !showOutlet ? 'block' : 'none',
      lg: 'block'
    }
    ,
    flex: {
      xs: showOutlet ? 0 : 1,
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
    },
  }

  const sxDetail = {
    border: 1,
    display: {
      xs: showOutlet ? 'block' : 'none',
      lg: 'block'
    }
    ,
    flex: {
      xs: 1,
      lg: 6
    },

  }
  useEffect(() => {
    let isCancelled = false
    axios.get(`https://warm-citadel-62203.herokuapp.com/messageCache/${_id}`) // CacheId : {_id, chatId, from, to, lastMessage, unreadCount, timestamp, imageUrl, firstName, lastName}
      .then(x => {
        if (!isCancelled) {
          setCacheData(x.data)
        }
      })
      .catch(err => console.log(err.response.data))
    return () => {
      isCancelled = true
    }
  }, [cacheData])

  const handleShow = () => {
    setShowOutlet(!showOutlet)
  }

  const parseTime = (date) => {
    return (
      new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(date)
    )
  }
  const listChat = () => {
    return (
      cacheData.map((x) =>
        <Fragment key={x._id}>
          <Link to={`./${x.chatId}`} style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem
              alignItems="flex-start"
              sx={sxListItem}
              disablePadding
              onClick={handleShow}
            >
              <ListItemAvatar>
                <Avatar alt="image not available" src={x.imageUrl}
                  sx={{ width: "57px", height: "57px", marginTop: "0.25em", marginRight: "1em", marginLeft: "10px" }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={`${x.firstName} ${x.lastName}`}
                multiline='true'

                secondary={

                  <React.Fragment>

                    <Typography
                      sx={{ display: 'block', textOverflow: 'ellipsis', marginY: '0.2em' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {parseTime(x.timestamp)}
                    </Typography>
                    <Typography
                      sx={{ display: 'block', width: "60%", textOverflow: 'ellipsis' }}
                      component="span"
                      variant="body2"
                      color="text.primary"

                    >
                      {x.lastMessage}
                    </Typography>

                  </React.Fragment>
                }

              />
              <Badge badgeContent={x.unreadCount}
                sx={{
                  color: '#f84f31', marginRight: 5, marginTop: 5,
                  display: x.unreadCount ? 'block' : 'none'
                }}>
                <NotificationAddIcon fontSize='large' />
              </Badge>
            </ListItem>
          </Link>
          <Divider variant="inset" component="li" />
        </Fragment>)
    )
  }


  return (
    <>

      <Box sx={sxContainer}>
        <Box sx={sxMenu}>
          <List
            sx={{ width: '100%', minWidth: '', bgcolor: 'background.paper' }}
          >
            {listChat()}
            {/* <Typography variant='h4'>cache Details</Typography> //@dev debug
            {JSON.stringify(cacheData)} */}
          </List>
        </Box>

        <Box sx={sxDetail}>
          <messageContext.Provider value={{ cacheData, setCacheData, showOutlet, setShowOutlet }}>
            <Outlet />
          </messageContext.Provider>
        </Box>
      </Box>
    </>
  )
}

export default ChatSystem
