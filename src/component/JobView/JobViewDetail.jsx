import React, { Fragment, useState, useContext } from 'react'
import { useEffect } from 'react'
import { Fab } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { jobContext } from './JobView'
import { Container } from '@mui/material'
import Box from '@mui/material/Box'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MapView from './MapView'
import { Typography } from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Button from '@mui/material/Button';
import { FormControl } from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormLabel from '@mui/material/FormLabel'
import { Avatar } from '@mui/material';
import { ListItemAvatar } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete'
import { TextField } from '@mui/material'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Cookies from 'js-cookie'


const sxField = {
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
    height: "auto",
    marginTop: "2em"
}


const sxMultiline = {
    bgcolor: 'background.paper',
    boxShadow: 1,
    borderRadius: 2,
    width: "100%",
    marginTop: "2em",
    marginBottom: "2em"
}

function JobViewDetail() {
    const [formData, setFormData] = useState([])
    const [selectJob, setSelectJob] = useState([])
    const [selectProgrammingLanguage, setSelectProgrammingLanguage] = useState([])
    const [selectFramework, setSelectFramework] = useState([])
    const [selectFieldOfstudy, setSelectFieldOfStudy] = useState([])
    const [jobCreator, setJobCreator] = useState('')
    const [location, setLocation] = useState([0, 0]) //Location set at cityhall
    const { pathname } = useLocation()
    const { showOutlet, setShowOutlet } = useContext(jobContext)
    let _userId = Cookies.get('_id')
    let navigate = useNavigate()

    let _id = pathname.replace('/job/', '')
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
        let isCancelled = false
        axios.get(`https://warm-citadel-62203.herokuapp.com/job-offer/${_id}`).then(x => {
            if (!isCancelled) {
                let res = x.data
                setFormData(res)
                setSelectJob(res.jobTags)
                setSelectProgrammingLanguage(res.programmingLanguage)
                setSelectFramework(res.framework)
                setSelectFieldOfStudy(res.fieldOfStudy)
                setLocation(res.location)
                setJobCreator(res.creator)
            }
        })
        return () => {
            isCancelled = true
        }
    }, [_id])


    const handleApplyJob = () => {
        let writeData = {
            _userId,
            jobCreator
        }
        axios.post('https://warm-citadel-62203.herokuapp.com/chat/add', writeData)
            .then(x => {
                navigate(`../../chat/${x.data}`)
            })
            .catch(err => {
                navigate(`../../chat/${err.response.data}`)
            })
    }

    return (
        <>
            <Fab
                sx={{
                    margin: '1em', backgroundColor: 'royalblue', color: 'white', position: 'sticky', top: 0,
                    display: {
                        xs: showOutlet ? 'block' : 'none',
                        lg: 'none'
                    }
                }}
                aria-label='add'
                onClick={() => setShowOutlet(!showOutlet)}
            >
                <ArrowBackIcon />
            </Fab>

            <Container >
                <div>
                    <Box>

                        <Typography variant="h3">

                            {formData['organizationName'] || ""}
                        </Typography>


                    </Box>
                    <Box>
                        <Typography variant="h5">
                            {formData['jobTitle']}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h5">
                            ${formData['minPay']} - ${formData['maxPay']}
                        </Typography>
                    </Box>

                    <Box>
                        <Typography>
                            {parseTime(formData['timestamp'])}
                        </Typography>
                    </Box>

                    <Box>
                        <Button
                            variant='contained'
                            endIcon={<LibraryBooksIcon />}
                            onClick={handleApplyJob}
                        >
                            Apply
                        </Button>
                    </Box>


                    <Box>

                        <FormControl
                            sx={sxMultiline}
                        >

                            <OutlinedInput

                                value={formData['jobDescription'] || ""}
                                name='jobDescription'
                                multiline={true}
                                rows={30}
                            ></OutlinedInput>
                        </FormControl>
                        <MapView location={location} />
                    </Box>

                    <Autocomplete
                        // multiple
                        id='multiple-limit-tags'
                        value={selectJob}
                        freeSolo
                        defaultValue={[]}
                        renderInput={(params => (
                            <TextField
                                {...params}
                                label='Job tags'
                                placeholder='Job tags ( Select 1 or more )'
                            />
                        ))}
                        disabled
                        sx={sxAutocomplete}
                    />

                    <Autocomplete
                        multiple
                        id='multiple-tags-framework'
                        // options={framework}
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
                        disabled
                        sx={sxAutocomplete}
                    />

                    <Autocomplete
                        multiple
                        id='multiple-tags-programminglanguage'
                        // options={programmingLanguage}
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
                        disabled
                        sx={sxAutocomplete}
                    />

                    <Autocomplete
                        multiple
                        id='multiple-tags-fieldofstudy'
                        // options={fieldOfStudy}
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
                        disabled
                        sx={{ ...sxAutocomplete, marginBottom: "2em" }}
                    />



                </div>

            </Container>

        </>
    )
}

export default JobViewDetail

