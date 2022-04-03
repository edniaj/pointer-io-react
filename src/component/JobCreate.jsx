import React, { Fragment, useState } from 'react'
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
import AddIcon from '@mui/icons-material/Add';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom'

function JobCreate() {
    const [formData, setFormData] = useState({
        'jobDescription': 'f\nf'
    })


    // handleInput will handle regular form data
    const handleInput = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <Typography variant="h3">Create posting</Typography>

            <Stack direction="row" spacing={2}>
                <div>

                    <FormControl sx={{
                        bgcolor: 'background.paper',
                        boxShadow: 1,
                        borderRadius: 2,
                        minWidth: 600,
                    }}>
                        <InputLabel>Job description</InputLabel>
                        <OutlinedInput
                            value={formData['jobDescription']}
                            name='jobDescription'
                            onChange={handleInput}
                            multiline={true}
                            rows={10}

                        ></OutlinedInput>
                    </FormControl>
                    <InputLabel>Skill tags</InputLabel>
                    <OutlinedInput
                        value={formData['skillTags']}
                        name='skillTags'
                        onChange={handleInput}
                    ></OutlinedInput>

                
            </div>


        </Stack>

        </>
    )
}

export default JobCreate