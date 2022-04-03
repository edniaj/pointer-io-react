import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './component/Home'
import About from './component/About'
import Error from './component/Error'
import Job from './component/Job'
import JobDetails from './component/JobDetails'
import Judge from './component/Judge'
import Login from './component/Login'
import Register from './component/Register/Register'
import Profile from './component/Profile'
import { createContext, useState } from 'react';
import Navbar from './component/Navbar';
import JobEdit from './component/JobEdit';
import JobCreate from './component/JobCreate';

export const loginContext = createContext(null)



function App() {
  const [login, setLogin] = useState(false)


  return (
    <div className="App">
      <BrowserRouter>

        <loginContext.Provider value={{ login, setLogin }}>
        {login && <Navbar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profile/:id" element={<Profile />} />
            <Route path="login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="about" element={<About />} />
            <Route path="job" element={<Job />} >
              <Route path=":id" element={<JobDetails />} />
            </Route>
            <Route path="job/create" element={<JobCreate />} /> 
            <Route path="job/edit" element={<JobEdit />} />
            <Route path="judge" element={<Judge />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </loginContext.Provider>
      </BrowserRouter>
    </div>
  );
}



export default App;
