import { Badge } from '@mui/material'
import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  badge: {    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer'
  },
  icon:{
    textDecoration: 'none',
    color:'white'
  }
});

function Navbar() {

  const styles = useStyles()

  return (

    <AppBar>
      <Toolbar>
        <Badge className={styles.badge}>
          <Link to="/" className={styles.icon}>
            <div>
              <HomeIcon fontSize='large'/>
            </div>
            <Typography variant="">
              Home
            </Typography>
          </Link>
        </Badge>

      </Toolbar>

    </AppBar>
  )
}

export default Navbar