import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Error from './component/Error'
import Login from './component/ProtectedRoutes'
import Register from './component/Register/Register'
import { createContext, useState } from 'react'
import Navbar from './component/Navbar'
import JobEdit from './component/JobEdit/JobEdit'
import JobEditDetail from './component/JobEdit/JobEditDetail'
import JobCreate from './component/JobCreate/JobCreate'
import ChatSystem from './component/ChatSystem/ChatSystem'
import Chat from './component/ChatSystem/Chat'
import JobView from './component/JobView/JobView'
import JobViewDetail from './component/JobView/JobViewDetail'
import ProtectedRoutes from './component/ProtectedRoutes'
import Logout from './component/Logout'

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

    <div className='App' >
      <BrowserRouter>
        <loginContext.Provider value={{ login, setLogin }}>
          <tagOptionContext.Provider value={{
            jobOption,
            programmingLanguage,
            framework,
            fieldOfStudy
          }}>

            <Routes>
              <Route element={<ProtectedRoutes />}>
                <Route path='/' element={<Home />} />

                <Route path='logout' element={<Logout />} />
                <Route path='job' element={<JobView />}>  {/* This is for regular users that are finding job */}
                  <Route path=':id' element={<JobViewDetail />} />
                </Route>
                <Route path='job/edit' element={<JobEdit />}>  {/* This is for job creators to edit  */}
                  <Route path=':id' element={<JobEditDetail />} />
                </Route>
                <Route path='job/create' element={<JobCreate />} /> {/* This is for creating new job post*/}

                <Route path='/chat' element={<ChatSystem />}>
                  <Route path=':id' element={<Chat />} />
                </Route>
              </Route>
              <Route path='register' element={<Register />} />


              <Route element={<Error />} />

            </Routes>
          </tagOptionContext.Provider>
        </loginContext.Provider>
      </BrowserRouter>
    </div >
  )
}

export default App
