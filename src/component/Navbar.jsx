import { Avatar, Badge, Button } from '@mui/material'
import { AppBar, Toolbar, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import { Tabs } from '@mui/material';
import { Box } from '@mui/material';
import { Tab } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import { loginContext } from '../App';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
function Navbar() {
  const [value, setValue] = React.useState(0);
  const { login } = useContext(loginContext)
  let navigate = useNavigate()

  const sxLoggedIn = {
    width: "100vw",
    position: "fixed",
    top: 0,
    display: !login ? "none" : "block",
    backgroundColor: "rgb(235,235,235,0.91)",
    zIndex: 999,
  }
  const sxLoggedOut = {
    width: "100vw",
    position: "fixed",
    top: 0,
    display: !login ? "block" : "none",
    backgroundColor: "rgb(235,235,235,0.91)",
    zIndex: 999,
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={sxLoggedIn}>
        <Tabs value={value} onChange={handleChange} aria-label="nav tabs example"
        >
          <Tab label="Home" iconPosition="start" icon={<HomeOutlinedIcon />} onClick={() => navigate('./')} />
          <Tab label="Chat" iconPosition="start" icon={<MessageOutlinedIcon />} onClick={() => navigate('./chat')} />
          <Tab label="Job" iconPosition="start" icon={<WorkOutlineIcon />} onClick={() => navigate('./job')} />
          <Tab label="Edit job" iconPosition="start" icon={<EngineeringOutlinedIcon />} onClick={() => navigate('./job/edit')} />
          <Tab label="Create posting" iconPosition="start" icon={<NoteAddIcon />} onClick={() => navigate('./job/create')} />
          <Tab label="Log out" iconPosition="start" icon={<LogoutIcon />} onClick={() => navigate('./logout')} />
        </Tabs>
      </Box>

      <Box sx={sxLoggedOut}>
        <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
          <Tab label="Home" iconPosition="start" icon={<HomeOutlinedIcon />} onClick={() => navigate('./')} />
          <Tab label="Register" iconPosition="start" icon={<GroupAddIcon />} onClick={() => navigate('./register')} />
        </Tabs>
      </Box>
    </>
  );
}

export default Navbar