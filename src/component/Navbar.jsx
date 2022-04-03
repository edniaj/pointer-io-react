import { Avatar, Badge, Button } from '@mui/material'
import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import { makeStyles } from '@mui/styles';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import WorkIcon from '@mui/icons-material/Work';
import { Search } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material';




const useStyles = makeStyles((theme) => ({
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    position:'sticky '
  },
  navbar__left: { // Maybe delete navbar__left and navbar__right. Dont think its necessary
    flex: 1,
    flexDirection: 'row'
  },
  navbar__right: {
    flexDirection: 'row',
    alignContent: 'flex-end'
  },
  badge: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    marginRight: '2em'
  },
  icon: {
    textDecoration: 'none',
    color: 'white'
  },
  name: {
    textAlign: 'center'
  },
  brand: {
    display: 'inline-block',
  },
  search:{
    display:"inline-block",
    marginLeft:'3em'
  }
}));



function Navbar() {

  const styles = useStyles()

  return (

    <AppBar className={styles.navbar}>
      <Toolbar>
        <div className={styles.navbar__left}>
          <Typography variant='h5' className={styles.brand}>
            Pointer.io
          </Typography>
          <div className={styles.search}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Search />

          </div>
        </div>



        <div className={styles.navbar__right}>
          <Badge className={styles.badge}>
            <Link to="/" className={styles.icon}>
              <div>
                <WorkIcon fontSize='medium' />
              </div>

            </Link>
          </Badge>

          <Badge className={styles.badge}>

            <Link to="/" className={styles.icon}>
              <NotificationsActiveIcon fontSize='medium' />
            </Link>
          </Badge>

          <Badge className={styles.badge}>
            <Link to="/" className={styles.icon}>
              <div>
                <MessageIcon fontSize='medium' />
              </div>

            </Link>
          </Badge>

          <Badge className={styles.badge} badgeContent={2} color='secondary'>
            <Link to="/" className={styles.icon}>
              <div>
                <HomeIcon fontSize='medium' />
              </div>

            </Link>
          </Badge>

          <Badge >
            <Link to="/" className={styles.icon}>
              <div>
                <Avatar src="data:image/png;base64,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"
                  sx={{ width: 40, height: 40, marginRight: '3em' }} ></Avatar>
              </div>
            </Link>
          </Badge>
        </div>

      </Toolbar>

    </AppBar>
  )
}

export default Navbar