import React, {useContext} from 'react'
import { loginContext } from '../App'


function Login() {
  let {login, setLogin} = useContext(loginContext)
  return (
    <>
    {JSON.stringify(login)}
    </>
  )
}

export default Login