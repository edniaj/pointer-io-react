import React, { Fragment, useContext, useEffect } from 'react';
import { Box, Container, Divider, List, Typography } from '@mui/material'
import ChatMsg from '@mui-treasury/components/chatMsg/ChatMsg';
import { TextField } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import { FormControl } from '@mui/material'
import { useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useLocation, useNavigate, useNavigationType } from 'react-router-dom';
import { createContext } from 'react';
import { messageContext } from './ChatSystem';


const sxFragment = { display: 'flex', height: "100%", flexDirection: "column" }
const sxDisplayMessage = {
  flexGrow: 7,
  overflowX: "hidden",
  overflowY: 'auto',
  paddingLeft: 2,
  paddingRight: 2,
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
  },

}
const sxTextbox = {
  flexGrow: 3,
  display: "flex",
  boxSizing: "border-box"
}


function Chat() {
  const [messaging, setMessaging] = useState("")
  const handleInput = e => setMessaging(e.target.value)
  const { pathname } = useLocation()
  const [messageId, setMessageId] = useState([])
  const { cacheData, setCacheData } = useContext(messageContext)
  let navigate = useNavigate()

  let from = Cookies.get('_id') // Me 
  let chatId = pathname.replace('/chat/', '')
  let usableCache = cacheData.filter(x => x["chatId"] === chatId)
  let friendImage = usableCache.length == 0 ? '' : usableCache[0]['imageUrl']
  const handlePost = async () => {
    let timestamp = JSON.stringify(new Date().getTime())
    let writeData = {
      chatId,
      timestamp,
      message: messaging,
      from
    }
    await axios.post("http://localhost:3005/message/add", writeData)
      .then(x => {
        console.log(x.data)
        setMessaging("")
        setCacheData([])
      })
      .catch(err => console.log(err.response.data))
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
  useEffect(() => {
    setInterval(() => {
      let putData = {
        chatId,
        from
      }
      axios.put(`http://localhost:3005/messageCache/clear/`, putData)
    }, 1000);

  }, []) // This will clear all the unread count from the cache

  useEffect(() => {
    setInterval(() => {
      axios.post(("http://localhost:3005/message/criteria"), { chatId })
        .then(x => {
          setMessageId(x.data)
        })
    }, 1000);

  }, []) // This will clear all the unread count from the cache

  const listMessages = () => {
    return (
      messageId.map(x => {
        if (x['from'] === from) {
          return (
            <Fragment key={x._id}>
              <ChatMsg
                side={'right'}
                messages={[x.message]}
              />
              <Typography variant="body2">
                {parseTime(x.timestamp)}
              </Typography>
            </Fragment>)
        } else {
          return (<Fragment key={x._id}>
            <ChatMsg
              avatar={friendImage}
              messages={[x.message]}
            />
            <Typography variant="body2" align="left">
              {parseTime(x.timestamp)}
            </Typography>
          </Fragment>)
        }
      })
    )
  }

  return (
    < Box key="chatDetail" sx={sxFragment}>


      <Box sx={sxDisplayMessage}>
        {/* {JSON.stringify(messageId)} */}
        {listMessages()}
      </Box>
      <Box style={sxTextbox}>
        <FormControl sx={{ margin: 0, flexGrow: 7, height: "100%" }}>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={5}
            value={messaging}
            onChange={handleInput}
            placeholder="Type a message..."
            style={{ height: "100%", padding: 20 }}
          />
        </FormControl>
        <Button endIcon={<SendIcon />} sx={{ flexGrow: 1 }} onClick={handlePost}>
          Submit
        </Button>
      </Box>
    </Box >
  )
}




export default Chat;

/*
        <ChatMsg
          avatar={''}
          messages={[
            'Hi Jenny, How r u today?',
            'Did you train yesterday',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
          ]}
        />
        <ChatMsg
          side={'right'}
          messages={[
            "Great! What's about you?",
            'Of course I did. Speaking of which check this out',
          ]}
        /><ChatMsg
          avatar={''}
          messages={[
            'Hi Jenny, How r u today?',
            'Did you train yesterday',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
          ]}
        />
        <ChatMsg
          side={'right'}
          messages={[
            "Great! What's about you?",
            'Of course I did. Speaking of which check this out',
          ]}
        /><ChatMsg
          avatar={''}
          messages={[
            'Hi Jenny, How r u today?',
            'Did you train yesterday',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
          ]}
        />
        <ChatMsg
          side={'right'}
          messages={[
            "Great! What's about you?",
            'Of course I did. Speaking of which check this out',
          ]}
        /><ChatMsg
          side={'right'}
          messages={[
            "Great! What's about you?",
            'Of course I did. Speaking of which check this out',
          ]}
        />
*/