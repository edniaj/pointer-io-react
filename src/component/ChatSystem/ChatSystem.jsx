import { Box, Container, Divider, List, Typography } from '@mui/material'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'
import { AirTwoTone } from '@mui/icons-material'

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
  },
  flex: {
    xs: 1,
    lg: 4
  },
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    width: '0.6em'
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
  },
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
    cursor: 'pointer',
    fontSize: '2em'
  },
  marginRight: '1em'
}

const listFriends = () => {}

function ChatSystem () {
  let _id = Cookies.get('_id')
  const [chatDetail, setChatDetail] = useState([]) // every chat with a person is a chatId, NOT MESSAGE ID
  const [messageId, setMessageId] = useState([])
  const [friendId, setFriendId] = useState([])
  const [friendDetail, setFriendDetail] = useState([])
  useEffect(() => {
    let isCancelled = false
    axios
      .get(`http://localhost:3005/chat/${_id}`)
      .then(x => {
        // console.log(x.data[0])
        if (!isCancelled) {
          let clone = [...friendId]
          for (let chatInfo of x.data) {
            for (let friend of chatInfo.participant) {
              if (friend !== _id) {
                clone.push(friend)
              }
            }
          }
          setChatDetail(x.data)
          setFriendId(clone)
        }
      })
      .catch(err => console.log(err.response.data))
    return () => {
      isCancelled = true
    }
  }, [])
  useEffect(() => {
    let isCancelled = false
    if (friendId.length !== 0) {
      let criteria = {
        _id: {
          $in: friendId
        }
      }
      axios.post('http://localhost:3005/person/criteria', criteria).then(x => {
        if (!isCancelled) setFriendDetail(x.data)
      })
    }
    return () => {
      isCancelled = true
    }
  }, [friendId]) // Load imageUrl from Api
  useEffect(() => {
    let isCancelled = false
  
    return () => {
      isCancelled = true
    }
  }, [chatDetail])
  

  return (
    <>
      <Box sx={sxContainer}>
        <Box sx={sxMenu}>
          <List
            sx={{ width: '100%', minWidth: '', bgcolor: 'background.paper' }}
          >
            <Typography variant='h4'>Chat detail</Typography>
            {JSON.stringify(chatDetail)}
            <Divider />
            <Typography variant='h4'>friendId</Typography>
            {JSON.stringify(friendId)}
            <Divider />
            <Typography variant='h4'>friend Details</Typography>
            {JSON.stringify(friendDetail)}
          </List>
        </Box>

        <Box sx={sxDetail}>
          <Outlet />
        </Box>
      </Box>
    </>
  )
}

export default ChatSystem
