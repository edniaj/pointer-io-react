import React, { Fragment, useContext, useState } from 'react'
import { Container, FormControl, Typography } from '@mui/material'
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
import axios from 'axios'
import Cookies from 'js-cookie'
import Navbar from '../Navbar'


const sxField = {
  bgcolor: 'background.paper',
  boxShadow: 1,
  borderRadius: 2,
  width: "100%",
  marginTop: "1vh",
  marginBottom: "1vh"
}

const sxMultiline = {
  bgcolor: 'background.paper',
  boxShadow: 1,
  borderRadius: 2,
  width: "100%",
}

const sxAutocomplete = {
  bgcolor: 'background.paper',
  boxShadow: 1,
  borderRadius: 2,
  width: "100%",
  height: "auto"
}


function JobCreate() {
  const [formData, setFormData] = useState({
    jobDescription: ''
  })
  const [selectJob, setSelectJob] = useState([])
  const [selectProgrammingLanguage, setSelectProgrammingLanguage] = useState([])
  const [selectFramework, setSelectFramework] = useState([])
  const [selectFieldOfstudy, setSelectFieldOfStudy] = useState([])
  const [location, setLocation] = useState([1.2931213, 103.8498238]) //Location set at cityhall
  const [payError, setPayError] = useState(false)
  const [emptyError, setEmptyError] = useState(false)
  let navigate = useNavigate()

  // handleInput will handle regular form data
  const handleInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handlePOST = async () => {
    let timestamp = JSON.stringify(new Date().getTime()) // Unix timestamp
    formData['minPay'] = parseInt(formData['minPay'])
    formData['maxPay'] = parseInt(formData['maxPay'])
    if (formData['minPay'] > formData['maxPay']) {
      setPayError(true)
    }
    else if ( !formData['jobDescription'] && !formData['organizationName'] && !formData['organizationImageurl'] ) {
      setEmptyError(true)
    }
    else {
      setPayError(false)
      setEmptyError(false)
      await axios.post('https://warm-citadel-62203.herokuapp.com/job-offer/add', {
        creator: Cookies.get('_id'),
        ...formData,
        jobTags: selectJob,
        programmingLanguage: selectProgrammingLanguage,
        framework: selectFramework,
        fieldOfStudy: selectFieldOfstudy,
        location,
        timestamp
      })
        .then(x => {
          navigate('../job/edit')
        })
    }
  }

  ////////

  const {
    jobOption,
    programmingLanguage,
    framework,
    fieldOfStudy
  } = useContext(tagOptionContext)
  ////////

  return (
    <>




      <Container
        sx={{
          textAlign: {
            md: "center",
            xs: "left",
            backgroundColor: "rgb(255,255,255)",
            marginTop: {
              xs: "10vh",
              md: "5vh"
            }
          },
          // textAlign:"left"
        }}
      >
        <Stack direction='column' spacing={5}>

          <div style={{ marginTop: "100px" }}>

            <Typography variant='h3'>Create posting</Typography>
            <FormControl
              sx={sxField}
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
              sx={sxMultiline}
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
            sx={sxField}
          >
            <InputLabel>Organization name</InputLabel>
            <OutlinedInput
              value={formData['organizationName']}
              name='organizationName'
              onChange={handleInput}
            ></OutlinedInput>
          </FormControl>

          <FormControl
            sx={sxField}
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
                label='Job tags'
                placeholder='Job tags ( Select 1 or more )'
              />
            )}
            sx={sxAutocomplete}
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
            sx={sxAutocomplete}
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
            sx={sxAutocomplete}
          />

          <Autocomplete
            multiple
            id='multiple-tags-fieldofstudy'
            options={fieldOfStudy}
            value={selectFieldOfstudy}
            freeSolo
            onChange={(e, newValue) => {
              setSelectFieldOfStudy(newValue)
            }}
            defaultValue={[]}
            renderInput={params => (
              <TextField
                {...params}
                label='Field of study'
                placeholder='Field of study ( 1 or more )'
              />
            )}
            sx={sxAutocomplete}
          />

          <FormControl
            sx={sxField}
          >
            <InputLabel>Postal code</InputLabel>
            <OutlinedInput
              value={formData['postalCode']}
              name='postalCode'
              onChange={handleInput}
            ></OutlinedInput>
          </FormControl>

          <div>
            <FormControl
              sx={sxField}
            >
              <InputLabel>Street address</InputLabel>
              <OutlinedInput
                value={formData['streetAddress']}
                name='streetAddress'
                onChange={handleInput}
              ></OutlinedInput>
            </FormControl>

            <FormControl
              sx={sxField}>
              <OutlinedInput
                value={formData['blockNumber']}
                name='blockNumber'
                placeholder='apt, Suite, Unit, Building, Floor, etc (optional)'
                onChange={handleInput}
              ></OutlinedInput>
            </FormControl>
            <div>
              <FormControl
                sx={sxField}
              >

                <InputLabel>Minimum pay</InputLabel>
                <OutlinedInput
                  value={formData['minPay']}
                  name='minPay'
                  type='number'
                  placeholder='Minimum pay'
                  onChange={handleInput}
                ></OutlinedInput>
              </FormControl>

              <FormControl
                sx={sxField}>
                <InputLabel>Maximum pay</InputLabel>
                <OutlinedInput
                  value={formData['maxPay']}
                  name='maxPay'
                  type='number'
                  placeholder='Maximum pay'
                  onChange={handleInput}
                ></OutlinedInput>
              </FormControl>
            </div>

          </div>

        </Stack>

        <Container sx={{ marginTop: 2, marginBottom: 10 }}>

          <OutlinedInput
            sx={sxField}
            id='outlined-read-only-input'
            label='Location'
            name='location'
            color='primary'
            placeholder='Please mark location on the map by clicking on the magnifying glass'
            disabled
          ></OutlinedInput>
          <MapComp value={{ location, setLocation }} />
          <Button
            variant='contained'
            endIcon={<SendIcon />}
            onClick={handlePOST}
          >
            Submit
          </Button>

          <div style={{ display: payError ? "block" : "none", color: "red", marginTop: "10px" }}>
            <Typography>Minimum pay must be less than maximum pay</Typography>
          </div>

          <div style={{ display: emptyError ? "block" : "none", color: "red", marginTop: "10px" }}>
            <Typography>Fields cannot be empty</Typography>
          </div>

        </Container>
      </Container>
    </>
  )
}

export default JobCreate

// db.jobOffer.updateOne(
//   {
//     "_id": ObjectId("624d1d2555469b89e419d593")
//   }
//   ,
//   {
//     "$unset": { "clone": "" }
//   }
// )

// db.jobOffer.findOne({
//   "_id": ObjectId("624d1d2555469b89e419d593")
// },{})