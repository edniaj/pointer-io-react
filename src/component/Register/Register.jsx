import React, { Fragment, useState } from 'react'
import {
  Container,
  FormControl,
  FormHelperText,
  Typography
} from '@mui/material'
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
import RemoveIcon from '@mui/icons-material/Remove'
import { Divider } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Tabs } from '@mui/material';
import { Tab } from '@mui/material';
import Navbar from '../Navbar'
import Cookies from 'js-cookie'
const axios = require('axios')

// Add image url later

const countries = [
  { code: 'AD', label: 'Andorra', phone: '376' },
  {
    code: 'AE',
    label: 'United Arab Emirates',
    phone: '971'
  },
  { code: 'AF', label: 'Afghanistan', phone: '93' },
  {
    code: 'AG',
    label: 'Antigua and Barbuda',
    phone: '1-268'
  },
  { code: 'AI', label: 'Anguilla', phone: '1-264' },
  { code: 'AL', label: 'Albania', phone: '355' },
  { code: 'AM', label: 'Armenia', phone: '374' },
  { code: 'AO', label: 'Angola', phone: '244' },
  { code: 'AQ', label: 'Antarctica', phone: '672' },
  { code: 'AR', label: 'Argentina', phone: '54' },
  { code: 'AS', label: 'American Samoa', phone: '1-684' },
  { code: 'AT', label: 'Austria', phone: '43' },
  {
    code: 'AU',
    label: 'Australia',
    phone: '61',
    suggested: true
  },
  { code: 'AW', label: 'Aruba', phone: '297' },
  { code: 'AX', label: 'Alland Islands', phone: '358' },
  { code: 'AZ', label: 'Azerbaijan', phone: '994' },
  {
    code: 'BA',
    label: 'Bosnia and Herzegovina',
    phone: '387'
  },
  { code: 'BB', label: 'Barbados', phone: '1-246' },
  { code: 'BD', label: 'Bangladesh', phone: '880' },
  { code: 'BE', label: 'Belgium', phone: '32' },
  { code: 'BF', label: 'Burkina Faso', phone: '226' },
  { code: 'BG', label: 'Bulgaria', phone: '359' },
  { code: 'BH', label: 'Bahrain', phone: '973' },
  { code: 'BI', label: 'Burundi', phone: '257' },
  { code: 'BJ', label: 'Benin', phone: '229' },
  { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
  { code: 'BM', label: 'Bermuda', phone: '1-441' },
  { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
  { code: 'BO', label: 'Bolivia', phone: '591' },
  { code: 'BR', label: 'Brazil', phone: '55' },
  { code: 'BS', label: 'Bahamas', phone: '1-242' },
  { code: 'BT', label: 'Bhutan', phone: '975' },
  { code: 'BV', label: 'Bouvet Island', phone: '47' },
  { code: 'BW', label: 'Botswana', phone: '267' },
  { code: 'BY', label: 'Belarus', phone: '375' },
  { code: 'BZ', label: 'Belize', phone: '501' },
  {
    code: 'CA',
    label: 'Canada',
    phone: '1',
    suggested: true
  },
  {
    code: 'CC',
    label: 'Cocos (Keeling) Islands',
    phone: '61'
  },
  {
    code: 'CD',
    label: 'Congo, Democratic Republic of the',
    phone: '243'
  },
  {
    code: 'CF',
    label: 'Central African Republic',
    phone: '236'
  },
  {
    code: 'CG',
    label: 'Congo, Republic of the',
    phone: '242'
  },
  { code: 'CH', label: 'Switzerland', phone: '41' },
  { code: 'CI', label: "Cote d'Ivoire", phone: '225' },
  { code: 'CK', label: 'Cook Islands', phone: '682' },
  { code: 'CL', label: 'Chile', phone: '56' },
  { code: 'CM', label: 'Cameroon', phone: '237' },
  { code: 'CN', label: 'China', phone: '86' },
  { code: 'CO', label: 'Colombia', phone: '57' },
  { code: 'CR', label: 'Costa Rica', phone: '506' },
  { code: 'CU', label: 'Cuba', phone: '53' },
  { code: 'CV', label: 'Cape Verde', phone: '238' },
  { code: 'CW', label: 'Curacao', phone: '599' },
  { code: 'CX', label: 'Christmas Island', phone: '61' },
  { code: 'CY', label: 'Cyprus', phone: '357' },
  { code: 'CZ', label: 'Czech Republic', phone: '420' },
  {
    code: 'DE',
    label: 'Germany',
    phone: '49',
    suggested: true
  },
  { code: 'DJ', label: 'Djibouti', phone: '253' },
  { code: 'DK', label: 'Denmark', phone: '45' },
  { code: 'DM', label: 'Dominica', phone: '1-767' },
  {
    code: 'DO',
    label: 'Dominican Republic',
    phone: '1-809'
  },
  { code: 'DZ', label: 'Algeria', phone: '213' },
  { code: 'EC', label: 'Ecuador', phone: '593' },
  { code: 'EE', label: 'Estonia', phone: '372' },
  { code: 'EG', label: 'Egypt', phone: '20' },
  { code: 'EH', label: 'Western Sahara', phone: '212' },
  { code: 'ER', label: 'Eritrea', phone: '291' },
  { code: 'ES', label: 'Spain', phone: '34' },
  { code: 'ET', label: 'Ethiopia', phone: '251' },
  { code: 'FI', label: 'Finland', phone: '358' },
  { code: 'FJ', label: 'Fiji', phone: '679' },
  {
    code: 'FK',
    label: 'Falkland Islands (Malvinas)',
    phone: '500'
  },
  {
    code: 'FM',
    label: 'Micronesia, Federated States of',
    phone: '691'
  },
  { code: 'FO', label: 'Faroe Islands', phone: '298' },
  {
    code: 'FR',
    label: 'France',
    phone: '33',
    suggested: true
  },
  { code: 'GA', label: 'Gabon', phone: '241' },
  { code: 'GB', label: 'United Kingdom', phone: '44' },
  { code: 'GD', label: 'Grenada', phone: '1-473' },
  { code: 'GE', label: 'Georgia', phone: '995' },
  { code: 'GF', label: 'French Guiana', phone: '594' },
  { code: 'GG', label: 'Guernsey', phone: '44' },
  { code: 'GH', label: 'Ghana', phone: '233' },
  { code: 'GI', label: 'Gibraltar', phone: '350' },
  { code: 'GL', label: 'Greenland', phone: '299' },
  { code: 'GM', label: 'Gambia', phone: '220' },
  { code: 'GN', label: 'Guinea', phone: '224' },
  { code: 'GP', label: 'Guadeloupe', phone: '590' },
  { code: 'GQ', label: 'Equatorial Guinea', phone: '240' },
  { code: 'GR', label: 'Greece', phone: '30' },
  {
    code: 'GS',
    label: 'South Georgia and the South Sandwich Islands',
    phone: '500'
  },
  { code: 'GT', label: 'Guatemala', phone: '502' },
  { code: 'GU', label: 'Guam', phone: '1-671' },
  { code: 'GW', label: 'Guinea-Bissau', phone: '245' },
  { code: 'GY', label: 'Guyana', phone: '592' },
  { code: 'HK', label: 'Hong Kong', phone: '852' },
  {
    code: 'HM',
    label: 'Heard Island and McDonald Islands',
    phone: '672'
  },
  { code: 'HN', label: 'Honduras', phone: '504' },
  { code: 'HR', label: 'Croatia', phone: '385' },
  { code: 'HT', label: 'Haiti', phone: '509' },
  { code: 'HU', label: 'Hungary', phone: '36' },
  { code: 'ID', label: 'Indonesia', phone: '62' },
  { code: 'IE', label: 'Ireland', phone: '353' },
  { code: 'IL', label: 'Israel', phone: '972' },
  { code: 'IM', label: 'Isle of Man', phone: '44' },
  { code: 'IN', label: 'India', phone: '91' },
  {
    code: 'IO',
    label: 'British Indian Ocean Territory',
    phone: '246'
  },
  { code: 'IQ', label: 'Iraq', phone: '964' },
  {
    code: 'IR',
    label: 'Iran, Islamic Republic of',
    phone: '98'
  },
  { code: 'IS', label: 'Iceland', phone: '354' },
  { code: 'IT', label: 'Italy', phone: '39' },
  { code: 'JE', label: 'Jersey', phone: '44' },
  { code: 'JM', label: 'Jamaica', phone: '1-876' },
  { code: 'JO', label: 'Jordan', phone: '962' },
  {
    code: 'JP',
    label: 'Japan',
    phone: '81',
    suggested: true
  },
  { code: 'KE', label: 'Kenya', phone: '254' },
  { code: 'KG', label: 'Kyrgyzstan', phone: '996' },
  { code: 'KH', label: 'Cambodia', phone: '855' },
  { code: 'KI', label: 'Kiribati', phone: '686' },
  { code: 'KM', label: 'Comoros', phone: '269' },
  {
    code: 'KN',
    label: 'Saint Kitts and Nevis',
    phone: '1-869'
  },
  {
    code: 'KP',
    label: "Korea, Democratic People's Republic of",
    phone: '850'
  },
  { code: 'KR', label: 'Korea, Republic of', phone: '82' },
  { code: 'KW', label: 'Kuwait', phone: '965' },
  { code: 'KY', label: 'Cayman Islands', phone: '1-345' },
  { code: 'KZ', label: 'Kazakhstan', phone: '7' },
  {
    code: 'LA',
    label: "Lao People's Democratic Republic",
    phone: '856'
  },
  { code: 'LB', label: 'Lebanon', phone: '961' },
  { code: 'LC', label: 'Saint Lucia', phone: '1-758' },
  { code: 'LI', label: 'Liechtenstein', phone: '423' },
  { code: 'LK', label: 'Sri Lanka', phone: '94' },
  { code: 'LR', label: 'Liberia', phone: '231' },
  { code: 'LS', label: 'Lesotho', phone: '266' },
  { code: 'LT', label: 'Lithuania', phone: '370' },
  { code: 'LU', label: 'Luxembourg', phone: '352' },
  { code: 'LV', label: 'Latvia', phone: '371' },
  { code: 'LY', label: 'Libya', phone: '218' },
  { code: 'MA', label: 'Morocco', phone: '212' },
  { code: 'MC', label: 'Monaco', phone: '377' },
  {
    code: 'MD',
    label: 'Moldova, Republic of',
    phone: '373'
  },
  { code: 'ME', label: 'Montenegro', phone: '382' },
  {
    code: 'MF',
    label: 'Saint Martin (French part)',
    phone: '590'
  },
  { code: 'MG', label: 'Madagascar', phone: '261' },
  { code: 'MH', label: 'Marshall Islands', phone: '692' },
  {
    code: 'MK',
    label: 'Macedonia, the Former Yugoslav Republic of',
    phone: '389'
  },
  { code: 'ML', label: 'Mali', phone: '223' },
  { code: 'MM', label: 'Myanmar', phone: '95' },
  { code: 'MN', label: 'Mongolia', phone: '976' },
  { code: 'MO', label: 'Macao', phone: '853' },
  {
    code: 'MP',
    label: 'Northern Mariana Islands',
    phone: '1-670'
  },
  { code: 'MQ', label: 'Martinique', phone: '596' },
  { code: 'MR', label: 'Mauritania', phone: '222' },
  { code: 'MS', label: 'Montserrat', phone: '1-664' },
  { code: 'MT', label: 'Malta', phone: '356' },
  { code: 'MU', label: 'Mauritius', phone: '230' },
  { code: 'MV', label: 'Maldives', phone: '960' },
  { code: 'MW', label: 'Malawi', phone: '265' },
  { code: 'MX', label: 'Mexico', phone: '52' },
  { code: 'MY', label: 'Malaysia', phone: '60' },
  { code: 'MZ', label: 'Mozambique', phone: '258' },
  { code: 'NA', label: 'Namibia', phone: '264' },
  { code: 'NC', label: 'New Caledonia', phone: '687' },
  { code: 'NE', label: 'Niger', phone: '227' },
  { code: 'NF', label: 'Norfolk Island', phone: '672' },
  { code: 'NG', label: 'Nigeria', phone: '234' },
  { code: 'NI', label: 'Nicaragua', phone: '505' },
  { code: 'NL', label: 'Netherlands', phone: '31' },
  { code: 'NO', label: 'Norway', phone: '47' },
  { code: 'NP', label: 'Nepal', phone: '977' },
  { code: 'NR', label: 'Nauru', phone: '674' },
  { code: 'NU', label: 'Niue', phone: '683' },
  { code: 'NZ', label: 'New Zealand', phone: '64' },
  { code: 'OM', label: 'Oman', phone: '968' },
  { code: 'PA', label: 'Panama', phone: '507' },
  { code: 'PE', label: 'Peru', phone: '51' },
  { code: 'PF', label: 'French Polynesia', phone: '689' },
  { code: 'PG', label: 'Papua New Guinea', phone: '675' },
  { code: 'PH', label: 'Philippines', phone: '63' },
  { code: 'PK', label: 'Pakistan', phone: '92' },
  { code: 'PL', label: 'Poland', phone: '48' },
  {
    code: 'PM',
    label: 'Saint Pierre and Miquelon',
    phone: '508'
  },
  { code: 'PN', label: 'Pitcairn', phone: '870' },
  { code: 'PR', label: 'Puerto Rico', phone: '1' },
  {
    code: 'PS',
    label: 'Palestine, State of',
    phone: '970'
  },
  { code: 'PT', label: 'Portugal', phone: '351' },
  { code: 'PW', label: 'Palau', phone: '680' },
  { code: 'PY', label: 'Paraguay', phone: '595' },
  { code: 'QA', label: 'Qatar', phone: '974' },
  { code: 'RE', label: 'Reunion', phone: '262' },
  { code: 'RO', label: 'Romania', phone: '40' },
  { code: 'RS', label: 'Serbia', phone: '381' },
  { code: 'RU', label: 'Russian Federation', phone: '7' },
  { code: 'RW', label: 'Rwanda', phone: '250' },
  { code: 'SA', label: 'Saudi Arabia', phone: '966' },
  { code: 'SB', label: 'Solomon Islands', phone: '677' },
  { code: 'SC', label: 'Seychelles', phone: '248' },
  { code: 'SD', label: 'Sudan', phone: '249' },
  { code: 'SE', label: 'Sweden', phone: '46' },
  { code: 'SG', label: 'Singapore', phone: '65' },
  { code: 'SH', label: 'Saint Helena', phone: '290' },
  { code: 'SI', label: 'Slovenia', phone: '386' },
  {
    code: 'SJ',
    label: 'Svalbard and Jan Mayen',
    phone: '47'
  },
  { code: 'SK', label: 'Slovakia', phone: '421' },
  { code: 'SL', label: 'Sierra Leone', phone: '232' },
  { code: 'SM', label: 'San Marino', phone: '378' },
  { code: 'SN', label: 'Senegal', phone: '221' },
  { code: 'SO', label: 'Somalia', phone: '252' },
  { code: 'SR', label: 'Suriname', phone: '597' },
  { code: 'SS', label: 'South Sudan', phone: '211' },
  {
    code: 'ST',
    label: 'Sao Tome and Principe',
    phone: '239'
  },
  { code: 'SV', label: 'El Salvador', phone: '503' },
  {
    code: 'SX',
    label: 'Sint Maarten (Dutch part)',
    phone: '1-721'
  },
  {
    code: 'SY',
    label: 'Syrian Arab Republic',
    phone: '963'
  },
  { code: 'SZ', label: 'Swaziland', phone: '268' },
  {
    code: 'TC',
    label: 'Turks and Caicos Islands',
    phone: '1-649'
  },
  { code: 'TD', label: 'Chad', phone: '235' },
  {
    code: 'TF',
    label: 'French Southern Territories',
    phone: '262'
  },
  { code: 'TG', label: 'Togo', phone: '228' },
  { code: 'TH', label: 'Thailand', phone: '66' },
  { code: 'TJ', label: 'Tajikistan', phone: '992' },
  { code: 'TK', label: 'Tokelau', phone: '690' },
  { code: 'TL', label: 'Timor-Leste', phone: '670' },
  { code: 'TM', label: 'Turkmenistan', phone: '993' },
  { code: 'TN', label: 'Tunisia', phone: '216' },
  { code: 'TO', label: 'Tonga', phone: '676' },
  { code: 'TR', label: 'Turkey', phone: '90' },
  {
    code: 'TT',
    label: 'Trinidad and Tobago',
    phone: '1-868'
  },
  { code: 'TV', label: 'Tuvalu', phone: '688' },
  {
    code: 'TW',
    label: 'Taiwan, Province of China',
    phone: '886'
  },
  {
    code: 'TZ',
    label: 'United Republic of Tanzania',
    phone: '255'
  },
  { code: 'UA', label: 'Ukraine', phone: '380' },
  { code: 'UG', label: 'Uganda', phone: '256' },
  {
    code: 'US',
    label: 'United States',
    phone: '1',
    suggested: true
  },
  { code: 'UY', label: 'Uruguay', phone: '598' },
  { code: 'UZ', label: 'Uzbekistan', phone: '998' },
  {
    code: 'VA',
    label: 'Holy See (Vatican City State)',
    phone: '379'
  },
  {
    code: 'VC',
    label: 'Saint Vincent and the Grenadines',
    phone: '1-784'
  },
  { code: 'VE', label: 'Venezuela', phone: '58' },
  {
    code: 'VG',
    label: 'British Virgin Islands',
    phone: '1-284'
  },
  {
    code: 'VI',
    label: 'US Virgin Islands',
    phone: '1-340'
  },
  { code: 'VN', label: 'Vietnam', phone: '84' },
  { code: 'VU', label: 'Vanuatu', phone: '678' },
  { code: 'WF', label: 'Wallis and Futuna', phone: '681' },
  { code: 'WS', label: 'Samoa', phone: '685' },
  { code: 'XK', label: 'Kosovo', phone: '383' },
  { code: 'YE', label: 'Yemen', phone: '967' },
  { code: 'YT', label: 'Mayotte', phone: '262' },
  { code: 'ZA', label: 'South Africa', phone: '27' },
  { code: 'ZM', label: 'Zambia', phone: '260' },
  { code: 'ZW', label: 'Zimbabwe', phone: '263' }
]
const sxField = {
  bgcolor: 'background.paper',
  boxShadow: 1,
  borderRadius: 2,
  width: "100%",
}
const sxContainer = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100vw',
  marginTop: '10vh',
  backgroundColor: "white",
}
function Register() {
  const [formData, setFormData] = useState({
    education: {
      0: {}
    },
    licenseAndCertificate: {
      0: {}
    },
    imageUrl: ''
  })
  const [educationCount, setEducationaCount] = useState(1)
  const [licenseCount, setLicenseCount] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  let navigate = useNavigate()
  // This is to populate education field inside the form
  useEffect(() => {
    formData['education'][educationCount] = {}
  }, [educationCount])
  // this is to populaate the license and certificates field inside the form

  useEffect(() => {
    formData['licenseAndCertificate'][licenseCount] = {}
  }, [licenseCount])

  // handleInput will handle regular form data
  const handleInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  // Mainly handles fields that are arrays and have to be managed dynamically
  const handleArray = (e, fieldName, index) => {
    let clone = { ...formData }
    clone[fieldName][index][e.target.name] = e.target.value
    setFormData(clone)
  }
  // Handles Date. Date form field does not emit event.
  const handleDate = (dateValue, fieldName, keyName, index) => {
    let clone = { ...formData }
    clone[fieldName][index][keyName] = dateValue
    setFormData(clone)
  }
  const handleCountryCode = e => {
    let value = `(${e.code}) +${e.phone}`
    setFormData({
      ...formData,
      countryCode: value,
      country: e.label
    })
  }
  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const handlePOST = async () => {
    let clone = JSON.parse(JSON.stringify(formData)) // @dev Deep copy because nested object inside form data
    delete clone['education'][educationCount] // Delete buffer
    delete clone['licenseAndCertificate'][licenseCount] // Delete buffer
    // Clean up empty fields
    for (let key in clone['education']) {
      if (Object.keys(clone['education'][key]).length === 0) {
        delete clone['education'][key]
      }
    }
    for (let key in clone['licenseAndCertificate']) {
      if (Object.keys(clone['licenseAndCertificate'][key]).length === 0) {
        delete clone['licenseAndCertificate'][key]
      }
    }

    await axios
      .post('https://warm-citadel-62203.herokuapp.com/register', clone)
      .then(res => {
        Cookies.set('email', formData['email'], { expires: 7 })
        Cookies.set('password', formData['password'], { expires: 7 })
        Cookies.set('_id', res.data, { expires: 7 })
        navigate('../') // Important
      })
      .catch(err => {
        setErrorMessage(err.response.data)
      })
  }

  // Form validation
  const validateEmail = x => {
    x = x === undefined ? '' : x
    let isValid = x.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    return isValid ? false : true // isValid == false implies invalid thus trigger error
  }
  const validatePassword = x => {
    x = x === undefined ? '' : x
    let upperCase = false
    let lowerCase = false
    let number = false
    for (let i of x) {
      if (/[a-z]/.test(i)) lowerCase = true
      if (/[A-Z]/.test(i)) upperCase = true
      if (/[0-9]/.test(i)) number = true
    }
    if (x.length >= 8 && x.length <= 16 && lowerCase && upperCase && number) {
      return false
    }
    // at least one uppercase letter, one lowercase letter, one number and one special character: min length 8, max length 16
    return true
  }
  const validateString = x => {
    x = x === undefined ? '' : x
    if (x.length === 0) {
      return true
    }
    for (let i of x) {
      if (!/[a-zA-Z\s]/.test(i)) return true
    }
    return false
  }
  const validateContactNumber = x => {
    x = x === undefined ? '' : x
    if (x.length === 0) return true
    for (let i of x) {
      if (!/[0-9]/.test(i)) {
        if (i !== '-') return true
      }
    }
    return false
  }
  const validateRadio = x => {
    x = x === undefined ? '' : x
    if (x === '') return true
  }
  // @dev Helper functions

  // Dynamically generate Education field
  const populateEducation = () => {
    let writeData = []
    let fieldName = 'education'
    for (let index = 0; index < educationCount; index++) {
      writeData.push(
        <Fragment key={index}>
          <Stack direction='column' spacing={2}>
            <Stack direction='row' spacing={2}>
              <div>
                <FormControl>
                  <TextField
                    label='School name'
                    value={formData[fieldName][index]['schoolName']}
                    name='schoolName'
                    onChange={e => handleArray(e, fieldName, index)}
                  // error
                  // helperText=''
                  ></TextField>
                </FormControl>
              </div>
              <div>
                <FormControl>
                  <InputLabel>Field of study</InputLabel>
                  <OutlinedInput
                    value={formData[fieldName][index]['fieldOfStudy']}
                    name='fieldOfStudy'
                    onChange={e => handleArray(e, fieldName, index)} //handleArray( event, fieldName inside formData, index)
                  ></OutlinedInput>
                </FormControl>
              </div>

              <div>
                <FormControl>
                  <InputLabel>Level of education</InputLabel>
                  <OutlinedInput
                    value={formData[fieldName][index]['levelOfEducation']}
                    name='levelOfEducation'
                    onChange={e => handleArray(e, fieldName, index)} //handleArray( event, fieldName inside formData, index)
                  ></OutlinedInput>
                </FormControl>
              </div>
            </Stack>
            <div>
              <Stack direction='row' spacing={2}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label='Start Date'
                    value={formData[fieldName][index]['startDate']}
                    name='startDate'
                    onChange={dateValue =>
                      handleDate(dateValue, fieldName, 'startDate', index)
                    }
                    renderInput={params => (
                      <TextField
                        {...params}
                        helperText={params?.inputProps?.placeholder}
                      />
                    )}
                  />
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label='End Date'
                    value={formData[fieldName][index]['endDate']}
                    name='endDate'
                    onChange={dateValue =>
                      handleDate(dateValue, fieldName, 'endDate', index)
                    }
                    renderInput={params => (
                      <TextField
                        {...params}
                        helperText={params?.inputProps?.placeholder}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Stack>
            </div>
            <div>
              <FormControl sx={{ width: '100%', marginBottom: '1em' }}>
                <InputLabel>Description</InputLabel>
                <OutlinedInput
                  value={formData[fieldName][index]['description']}
                  name='description'
                  multiline={true}
                  rows={10}
                  onChange={e => handleArray(e, fieldName, index)} //handleArray( event, fieldName inside formData, index)
                ></OutlinedInput>
              </FormControl>
            </div>
          </Stack>

          <Divider />
        </Fragment>
      )
    }

    return <>{writeData}</>
  }
  const populateLicense = () => {
    let writeData = []
    let fieldName = 'licenseAndCertificate'
    for (let index = 0; index < licenseCount; index++) {
      writeData.push(
        <Fragment key={index}>
          <Stack direction='column' spacing={2}>
            <FormControl>
              <InputLabel>Name</InputLabel>{' '}
              {/*i.e. microsoft certified network security */}
              <OutlinedInput
                value={formData[fieldName][index]['schoolName']}
                name='name'
                onChange={e => handleArray(e, fieldName, index)}
              ></OutlinedInput>
            </FormControl>


            <FormControl>
              <InputLabel>Issuing organisation</InputLabel>{' '}
              {/*i.e. microsoft certified network security */}
              <OutlinedInput
                value={formData[fieldName][index]['issuingOrganisation']}
                name='issuingOrganisation'
                onChange={e => handleArray(e, fieldName, index)}
              ></OutlinedInput>
            </FormControl>
            <Stack spacing={2}>
              <FormControl>
                <InputLabel>Credential URL</InputLabel>{' '}
                {/*i.e. microsoft certified network security */}
                <OutlinedInput
                  value={formData[fieldName][index]['credentialURL']}
                  name='credentialURL'
                  onChange={e => handleArray(e, fieldName, index)}
                ></OutlinedInput>
              </FormControl>
              <FormControl>
                <InputLabel>Image URL</InputLabel>{' '}
                {/*i.e. microsoft certified network security */}
                <OutlinedInput
                  value={formData[fieldName][index]['imageUrl']}
                  name='imageUrl'
                  onChange={e => handleArray(e, fieldName, index)}
                ></OutlinedInput>
              </FormControl>
            </Stack>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label='Start Date'
                value={formData[fieldName][index]['startDate']}
                name='startDate'
                onChange={dateValue =>
                  handleDate(dateValue, fieldName, 'startDate', index)
                }
                renderInput={params => (
                  <TextField
                    {...params}
                    helperText={params?.inputProps?.placeholder}
                  />
                )}
              />
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label='End Date'
                value={formData[fieldName][index]['endDate']}
                name='endDate'
                onChange={dateValue =>
                  handleDate(dateValue, fieldName, 'endDate', index)
                }
                renderInput={params => (
                  <TextField
                    {...params}
                    helperText={params?.inputProps?.placeholder}
                  />
                )}
              />
            </LocalizationProvider>
          </Stack>
          <Divider sx={{ marginBottom: '1em' }} />
        </Fragment>
      )
    }
    return writeData
  }

  return (
    <div style={{ margin: 0 }}>
      <Box sx={{
        display: errorMessage ? "block" : "none",
        backgroundColor: "#f44336",
        color: 'white',
        minHeight: "3vh",
        width: "100%",
        position: 'fixed',
        zIndex: 999,
        marginBottom: 100,
        top: 0
      }}>
        {errorMessage}
      </Box>
      <Box sx={{backgroundColor:"white",marginBottom:0}}>
        <Tabs >
          <Tab label="Home" iconPosition="start" sx={{
            backgroundColor:"white",
            border: 1,
            borderRadius:5,
            marginTop: "4vh",
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'lightskyblue'
            },
            borderColor: 'primary.main'
          }} icon={<KeyboardBackspaceIcon />} onClick={() => navigate('../')} />
        </Tabs>
      </Box>


      <Container sx={{...sxContainer, backgroundColor:"white",marginTop:0}}>

        <div style={{marginTop:"5vh", marginBottom:"1vh"}}>
          <FormControl
            sx={sxField}>
            <TextField
              label='Email'
              value={formData['email']}
              name='email'
              onChange={handleInput}
              error={validateEmail(formData['email'])}
              helperText={
                validateEmail(formData['email']) &&
                'Please enter a valid email address'
              }
              sx={sxField}
            ></TextField>
          </FormControl>
        </div>
        <div style={{marginTop:"1vh", marginBottom:"1vh"}}>
          <FormControl
            sx={sxField}>
            {' '}
            {/*password*/}
            <InputLabel> Password</InputLabel>
            <OutlinedInput
              type={showPassword ? 'text' : 'password'}
              value={formData['password']}
              name='password'
              onChange={handleInput}
              id='password'
              error={validatePassword(formData['password'])}
              endAdornment={
                <IconButton onClick={handleShowPassword} edge='end'>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              }
              label='Password'
            ></OutlinedInput>
            <FormHelperText sx={{ color: 'indianred' }}>
              {validatePassword(formData['password']) &&
                'Password should consist 8-16 characters, lowercase, uppercase and a number'}
            </FormHelperText>
          </FormControl>
        </div>
        <div style={{marginTop:"1vh", marginBottom:"1vh"}}>
          <FormControl
            sx={sxField}>
            <TextField
              variant='outlined'
              label='Profile picture'
              name='imageUrl'
              onChange={handleInput}
              value={formData['imageUrl']}
              error={formData['imageUrl'].length === 0}
              helperText={
                validateString(formData['imageUrl']) &&
                'Field must consist at least a character'
              }
            ></TextField>
          </FormControl>
        </div>
        <div style={{marginTop:"1vh", marginBottom:"1vh"}}>
          <FormControl
            sx={sxField}>
            <TextField
              variant='outlined'
              label='First name'
              name='firstName'
              onChange={handleInput}
              value={formData['firstName']}
              error={validateString(formData['firstName'])}
              helperText={
                validateString(formData['firstName']) &&
                'Field must consist at least a character'
              }
            ></TextField>
          </FormControl>
          <FormControl
            sx={sxField}>
            <TextField
              variant='outlined'
              label='Last name'
              name='lastName'
              onChange={handleInput}
              value={formData['lastName']}
              error={validateString(formData['lastName'])}
              helperText={
                validateString(formData['lastName']) &&
                'Field must consist at least a character'
              }
            ></TextField>
          </FormControl>
        </div>


        <div style={{marginTop:"1vh", marginBottom:"1vh"}}>
          <FormControl
            sx={sxField}>
            <Autocomplete
              id='country-select-demo'

              options={countries}
              name='countryCode'
              onChange={(value, event) => {
                handleCountryCode(event)
              }}
              autoHighlight
              getOptionLabel={option => option.label}
              renderOption={(props, option) => (
                <Box
                  component='li'
                  sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  <img
                    loading='lazy'
                    width='20'
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    alt=''
                  />
                  {option.label} ({option.code}) +{option.phone}
                </Box>
              )}
              renderInput={params => (
                <TextField
                  error={formData['countryCode'] === undefined ? true : false}
                  {...params}
                  label='Choose a country'
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password' // disable autocomplete and autofill
                  }}
                />
              )}
            />
            <FormHelperText sx={{ color: 'indianred' }}>
              {formData['countryCode'] ? '' : 'You must select a country'}
            </FormHelperText>
          </FormControl>


        </div>
        <div style={{ width: "100%", display: "flex" }}>
          <FormControl>
            <TextField value={formData['countryCode']}
              placeholder="Country code"
              disabled />
          </FormControl>
          <FormControl sx={sxField}>
            <TextField
              label='Contact number'
              value={formData['contactNumber']}
              onChange={handleInput}
              error={validateContactNumber(formData['contactNumber'])}
              name='contactNumber'
              helperText={
                !validateContactNumber(formData['contactNumber']) ||
                "Form can only consist digits and '-'\n Field cannot be empty"
              }
            ></TextField>
          </FormControl>
        </div>


        <Box sx={{ textAlign: "left" }}>
          <FormControl

            error={validateRadio(formData['jobAvailability'])}>

            <FormLabel id='demo-radio-buttons-group-label'>
              Looking for job ?
            </FormLabel>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              name='jobAvailability'
            >
              <FormControlLabel
                value='Yes'
                control={<Radio />}
                label='Yes'
                name='jobAvailability'
                onChange={handleInput}
                checked={formData['jobAvailability'] === 'Yes' ? true : false}
              />

              <FormControlLabel
                value='No'
                control={<Radio />}
                label='No'
                name='jobAvailability'
                onChange={handleInput}
                checked={formData['jobAvailability'] === 'No' ? true : false}
              />
            </RadioGroup>
            <FormHelperText>
              {'Please select at least one option' ||
                validateRadio(formData['jobAvailability'])}
            </FormHelperText>
          </FormControl>
        </Box>

        <Typography variant='h4'>Education</Typography>
        {populateEducation()}
        <Fab
          sx={{ margin: '1em', backgroundColor: 'royalblue', color: 'white' }}
          aria-label='add'
          onClick={() => setEducationaCount(educationCount + 1)}
        >
          <AddIcon />
        </Fab>
        <Fab
          sx={{ margin: '1em', backgroundColor: 'crimson', color: 'white' }}
          color='primary'
          aria-label='remove'
          onClick={() => setEducationaCount(educationCount - 1)}
        >
          <RemoveIcon />
        </Fab>

        <Typography variant='h4'>License and certificates</Typography>
        {populateLicense()}
        <Fab
          sx={{ margin: '1em', backgroundColor: 'royalblue', color: 'white' }}
          color='primary'
          aria-label='add'
          onClick={() => setLicenseCount(licenseCount + 1)}
        >
          <AddIcon />
        </Fab>
        <Fab
          sx={{ margin: '1em', backgroundColor: 'crimson', color: 'white' }}
          color='primary'
          aria-label='remove'
          onClick={() => setLicenseCount(licenseCount - 1)}
        >
          <RemoveIcon />
        </Fab>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            marginBottom: 50
          }}
        >
          <Button
            variant='contained'
            endIcon={<SendIcon />}
            onClick={handlePOST}
          >
            Submit
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default Register

/*
Master plan
  Deisgn database properly
  Check online how to do form control


  Need to do[]
  https://mui.com/components/autocomplete/#heading-autocomplete-autofill - For password form

  https://mui.com/components/autocomplete/#multiple-values - Education


*/

// db.chat.insertOne({participant:[ObjectId("624ed316bed37d50765b291c"), ObjectId("624d1b9455469b89e419d590")]})
