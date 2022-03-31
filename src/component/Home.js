import { makeStyles } from '@mui/styles'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles= makeStyles((theme) => ({
  home:{
    marginTop:'5 em',
    backgroundColor:'black',
    height:'1000 px'
  }
}))
function Home() {
  const styles = useStyles()
  return (
    <body className={styles.home}>
        
    </body>
    
    
  )
}

export default Home