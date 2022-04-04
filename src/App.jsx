import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Error from './component/Error'
import Job from './component/Job'
import JobDetails from './component/JobDetails'
import Judge from './component/Judge'
import Login from './component/Login'
import Register from './component/Register/Register'
import Profile from './component/Profile'
import { createContext, useState } from 'react'
import Navbar from './component/Navbar'
import JobEdit from './component/JobEdit'
import JobCreate from './component/JobCreate/JobCreate'

export const loginContext = createContext(null)
export const tagOptionContext = createContext(null)

function App () {
  const [login, setLogin] = useState(false)
  const [jobOption, setJobOption] = useState([
    "Engineering & Technology",
    "Sales, Service & Support",
    "Marketing & Communications",
    "Design",
    "Business Strategy",
    "Finance",
    "Legal",
    "People",
    "Facilities",
    "Frontend Developer",
    "Backend Developer",
    "Full stack Developer",
    "Mobile  Developer",
    "Game Developer",
    "Data Scientist Developer",
    "DevOps Developer",
    "Software Developer",
    "Web Developer",
    "Security Developer"
  ])
  const [programmingLanguage, setProgrammingLanguage] = useState([
    "Python",
    "Java",
    'JavaScript',
    'C#',
    'PHP',
    'R',
    'Swift',
    'Objective-C',
    'Matlab',
    'Typescript',
    'Go',
    'C/C++',
    'Kotlin',
    'VBA',
    'Rust',
    'Ruby',
    'Ada',
    'Scala',
    'Dart',
    'Abap',
    'Visual Basic',
    'Groovy',
    'Lua',
    'Julia',
    'Perl',
    'Haskell',
    'Cobol',
    'Solidity',
    "SQL",
    'Assembly language',
    'Swift',
    'Delphi/Object Pascal',
    'Classic Visual Vasic',
    'Groovy',
    'Fortran'
  ])
  const [framework, setFramework] = useState([
    'Ruby on Rails',
    '.NET Core',
    'Django',
    'ExpressJS',
    'Symfony',
    'CodeIgniter',
    'Spring',
    'Flask',
    'CakePHP',
    'Larevel',
    'Meteor',
    'Koa',
    'Nest.JS',
    'Next.Js',
    'React.JS',
    'React-Native',
    'Strapi',
    'BeeGo',
    'Symfony',
    'Koa',
    'Iris',
    'Angular',
    'Vue.js',
    'Redux',
    'Ember.Js',
    'Meteor',
    'Mithril',
    'Aurelia',
    'Ionic',
    'Mocha',
    'Webix',
    'Jasmine',
    'Mercury',
    'Riot.Js',
    'Backbone',
    'Ava',
    'WebRx',
    'Polymer',
    'Jest',
    'Knockout',
    'Socket',
    'MobX',
    'Omniscient',
    'Algolia Places',
    'Three.Js',
    'TaffyDB',
    'Voca',
    'Popper.Js',
    'Multiple.Js'
  ])

  return (
    <div className='App'>
      <BrowserRouter>
        <loginContext.Provider value={{ login, setLogin }}>
          <tagOptionContext.Provider value={{ jobOption, setJobOption
          ,programmingLanguage, setProgrammingLanguage,
          framework, setFramework }}>
            {login && <Navbar />}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='profile/:id' element={<Profile />} />
              <Route path='login' element={<Login />} />
              <Route path='Register' element={<Register />} />
              <Route path='about' element={<About />} />
              <Route path='judge' element={<Judge />} />
              <Route path='job' element={<Job />}>
                <Route path=':id' element={<JobDetails />} />
              </Route>
              <Route path='job/create' element={<JobCreate />} />
              <Route path='job/edit' element={<JobEdit />} />
              <Route element={<Error />} />
            </Routes>
          </tagOptionContext.Provider>
        </loginContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
