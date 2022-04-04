import React, { Fragment, useContext, useState } from 'react'
import { FormControl, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import { useEffect } from 'react'
import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'
import { useNavigate } from 'react-router-dom'
import MapComp from './MapGenerate'
import { tagOptionContext } from '../../App'
import { createContext } from 'react'




function JobCreate() {
  const [formData, setFormData] = useState({
    jobDescription: ''
  })
  const [selectJob, setSelectJob] = useState([])
  const [selectProgrammingLanguage, setSelectProgrammingLanguage] = useState([])
  const [selectFramework, setSelectFramework] = useState([])
  const [location, setLocation] = useState([1.2931213,103.8498238]) //Location set at cityhall

  // handleInput will handle regular form data
  const handleInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  ////////

  const { jobOption, programmingLanguage, framework } = useContext(tagOptionContext)

  ////////

  return (
    <>
      {/* remember to config the api */}

      {/* remember to config the api */}

      <Typography variant='h3'>Create posting</Typography>

      <Stack direction='row' spacing={2}>
        <div
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            minWidth: 800
          }}
        >
          <div>
            <FormControl
              sx={{
                bgcolor: 'background.paper',
                boxShadow: 1,
                borderRadius: 2,
                minWidth: 700
              }}
            >
              <InputLabel>Job Title</InputLabel>
              <OutlinedInput
                value={formData['jobTitle']}
                name='jobTitle'
                onChange={handleInput}
              ></OutlinedInput>
            </FormControl>
          </div>
          <div>
            <FormControl
              sx={{
                bgcolor: 'background.paper',
                boxShadow: 1,
                borderRadius: 2,
                minWidth: 700
              }}
            >
              <InputLabel>Job description</InputLabel>
              <OutlinedInput
                value={formData['jobDescription']}
                name='jobDescription'
                onChange={handleInput}
                multiline={true}
                rows={10}
              ></OutlinedInput>
            </FormControl>
          </div>
          <FormControl
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              minWidth: 700
            }}
          >
            <label>Location</label>
            <OutlinedInput
              id='outlined-read-only-input'
              label='Location'
              value={formData['location']}
              name='location'
              onChange={handleInput}
              color='primary'
              placeholder='Please click location on the map'
              disabled
            ></OutlinedInput>
          </FormControl>

          <FormControl
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              minWidth: 700
            }}
          >
            <InputLabel>Organization name</InputLabel>
            <OutlinedInput
              value={formData['organizationName']}
              name='organizationName'
              onChange={handleInput}
            ></OutlinedInput>
          </FormControl>

          <FormControl
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              minWidth: 700
            }}
          >
            <InputLabel>Organization image url</InputLabel>
            <OutlinedInput
              value={formData['organizationImageUrl']}
              name='organizationImageurl'
              onChange={handleInput}
            ></OutlinedInput>
          </FormControl>

          <Autocomplete
            multiple
            id='multiple-limit-tags'
            options={jobOption}
            value={selectJob}
            freeSolo
            onChange={(e, newValue) => {
              setSelectJob(newValue)
            }}
            defaultValue={[]}
            renderInput={params => (
              <TextField
                {...params}
                label='Job Title'
                placeholder='Job title ( Select 1 or more )'
              />
            )}
            sx={{ width: '500px' }}
          />

          <Autocomplete
            multiple
            id='multiple-tags-framework'
            options={framework}
            value={selectFramework}
            freeSolo
            onChange={(e, newValue) => {
              setSelectFramework(newValue)
            }}
            defaultValue={[]}
            renderInput={params => (
              <TextField
                {...params}
                label='Frameworks'
                placeholder='Frameworks ( Select 1 or more )'
              />
            )}
            sx={{ width: '500px' }}
          />


          <Autocomplete
            multiple
            id='multiple-tags-programminglanguage'
            options={programmingLanguage}
            value={selectProgrammingLanguage}
            freeSolo
            onChange={(e, newValue) => {
              setSelectProgrammingLanguage(newValue)
            }}
            defaultValue={[]}
            renderInput={params => (
              <TextField
                {...params}
                label='Programming language'
                placeholder='Programming langauge ( 1 or more )'
              />
            )}
            sx={{ width: '500px' }}
          />

        </div>
      </Stack >

      
        <MapComp  value={{location,setLocation}}/>
      



    </>
  )
}

export default JobCreate
