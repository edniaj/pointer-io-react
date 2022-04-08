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


const sxField = {
    bgcolor: 'background.paper',
    boxShadow: 1,
    borderRadius: 2,
    minWidth: 700,
    marginTop: "2em"
}

const sxAutocomplete = {
    bgcolor: 'background.paper',
    color: 'black',
    boxShadow: 1,
    borderRadius: 2,
    minWidth: 700,
    marginTop: "2em",
    height: "5em"
}





function JobViewDetail() {
    const [formData, setFormData] = useState([])
    const [selectJob, setSelectJob] = useState([])
    const [selectProgrammingLanguage, setSelectProgrammingLanguage] = useState([])
    const [selectFramework, setSelectFramework] = useState([])
    const [selectFieldOfstudy, setSelectFieldOfStudy] = useState([])
    const [location, setLocation] = useState([0, 0]) //Location set at cityhall
    const { pathname } = useLocation()
    // const { jobOption, programmingLanguage, framework, fieldOfStudy } = useContext(tagOptionContext)
    const { showOutlet, setShowOutlet } = useContext(jobContext)
    // DRAWER


    //END OF DRAWER
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
        axios.get(`http://localhost:3005/job-offer/${_id}`).then(x => {
            if (!isCancelled) {
                let res = x.data
                setFormData(res)
                setSelectJob(res.jobTags)
                setSelectProgrammingLanguage(res.programmingLanguage)
                setSelectFramework(res.framework)
                setSelectFieldOfStudy(res.fieldOfStudy)
                setLocation(res.location)
            }
        })
        return () => {
            isCancelled = true
        }
    }, [_id])

    // console.log("res :",res)


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

                        <ListItemAvatar>
                            <Avatar alt="image not available" src={formData.organizationImageurl}
                                sx={{ width: "57px", height: "57px", marginRight: "10px" }}
                            />
                        </ListItemAvatar>
                        <FormControl
                            sx={sxField}
                        >
                            <OutlinedInput
                                value={formData['organizationName'] || ""}
                                name='organizationName'
                            ></OutlinedInput>

                        </FormControl>

                    </Box>
                    <Box>
                        <Typography>
                            {formData['jobTitle']}
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
                        >
                            Apply
                        </Button>
                    </Box>
                    <Box>

                        <Autocomplete
                            multiple
                            id='multiple-limit-tags'
                            value={selectJob}
                            freeSolo
                            defaultValue={[]}
                            renderInput={params => (
                                <TextField
                                    {...params}
                                    label='Job tags'
                                    placeholder='Job tags ( Select 1 or more )'
                                />
                            )}
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
                            sx={sxAutocomplete}
                        />

                    </Box>
                    <Box>
                        <Typography>
                            {formData['minPay']} - {formData['maxPay']}
                        </Typography>
                    </Box>
                    <Box>

                        <FormControl
                            sx={{
                                bgcolor: 'background.paper',
                                boxShadow: 1,
                                borderRadius: 2,
                                width: "100%",
                                marginTop: "2em",
                                marginLeft: 0
                            }}
                        >

                            <OutlinedInput

                                value={formData['jobDescription'] || ""}
                                name='jobDescription'
                                multiline={true}
                                rows={30}
                            ></OutlinedInput>

                        </FormControl>
                    </Box>


                </div>

            </Container>
            <MapView location={location} />

        </>
    )
}

export default JobViewDetail



// function HideOnScroll(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//   });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

// HideOnScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };
//   function HideAppBar(props) {
//     return (
//       <React.Fragment>
//         <CssBaseline />
//         <HideOnScroll {...props}>
//           <AppBar >
//             <Toolbar>
//               <Typography variant="h6" component="div">
//                 Scroll to Hide App Bar
//               </Typography>
//             </Toolbar>
//           </AppBar>
//         </HideOnScroll>
//         <Toolbar />
//         <Container>
//           <Box sx={{ my: 2 }}>

//           </Box>
//         </Container>
//       </React.Fragment>
//     );
//   }