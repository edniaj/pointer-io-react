import React, { useState } from 'react'
import { FormControl } from '@mui/material';
import { TextField } from '@mui/material';



function Register() {

  const [formData, setFormData] = useState('')
  const handleInput = (e) => {
    setFormData(
      {...formData,
        [e.target.name]:e.target.value
      }
    )
  }
  return (
    <div>
      <TextField variant="outlined" label="First name" name="firstName" onChange={handleInput} value={formData['firstName']}></TextField>
    </div>

  )
}

export default Register