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
import JobEdit from './component/JobEdit/JobEdit'
import JobEditDetail from './component/JobEdit/JobEditDetail'
import JobCreate from './component/JobCreate/JobCreate'

export const loginContext = createContext(null)
export const tagOptionContext = createContext(null)

function App() {
  const [login, setLogin] = useState(false)

  const jobOption = [
    "Frontend Developer",
    "Backend Developer",
    "Full stack Developer",
    "Mobile  Developer",
    "Game Developer",
    "Data Scientist Developer",
    "DevOps Developer",
    "Software Developer",
    "Web Developer",
    "Security Developer",
    "Engineering & Technology",
    "Design",
    "Business Strategy",
    "Finance",
    "Legal",
    "Marketing & Communications",
    "Sales, Service & Support",
    "People"
  ]
  const programmingLanguage = [
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
    'Delphi/Object Pascal',
    'Classic Visual Vasic',
    'Fortran'
  ]
  const framework = [
    'Ruby on Rails',
    '.NET Core',
    'MONGO',
    'NodeJS',
    'Django',
    'ExpressJS',
    'Symfony',
    'CodeIgniter',
    'Spring',
    'Flask',
    'CakePHP',
    'Larevel',
    'Nest.JS',
    'Next.Js',
    'React.JS',
    'React-Native',
    'Strapi',
    'BeeGo',
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
  ]
  const fieldOfStudy = [
    'Computer Science',
    'Informational Security',
    'Information Systems',
    'Computer engineering',
    'Business Analytics',
    'Mathematics',
    'Applied Mathematics',
    'Law',
    'Architecture',
    'Industrial Design',
    'Project and Facilities Management',
    'Biomedical Engineering',
    'Chemical Engineering',
    'Civil Engineering',
    'Electrical Engineering',
    'Engineering Science',
    'Environmental Engineering',
    'Industrial and Systems Engineering',
    'Materials Science and Engineering',
    'Mechanical Engineering',
    'Business Administration',
  ]

  return (
    <div className='App'>
      <BrowserRouter>
        <loginContext.Provider value={{ login, setLogin }}>
          <Navbar 
          />
          <tagOptionContext.Provider value={{
            jobOption,
            programmingLanguage,
            framework,
            fieldOfStudy
          }}>
            {login && <Navbar />}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='profile/:id' element={<Profile />} />
              <Route path='login' element={<Login />} />
              <Route path='Register' element={<Register />} />
              <Route path='about' element={<About />} />
              <Route path='judge' element={<Judge />} />

              <Route path='job' element={<Job />}>  {/* This is for regular users that are finding job */}
                <Route path=':id' element={<JobDetails />} />
              </Route>
              <Route path='job/edit' element={<JobEdit />}>  {/* This is for job creators to edit  */}
                <Route path=':id' element={<JobEditDetail />} /> 
              </Route>
              <Route path='job/create' element={<JobCreate />} /> {/* This is for creating new job post*/}


              <Route element={<Error />} />
            </Routes>
          </tagOptionContext.Provider>
        </loginContext.Provider>
      </BrowserRouter>
    </div >
  )
}

export default App
