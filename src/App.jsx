import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
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

export const loginContext = createContext(null)


function App() {
  const [login, setLogin] = useState(false)


  return (
    <div className="App">
      <BrowserRouter>
        {login && <Navbar />}

        <loginContext.Provider value={{ login, setLogin }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/job" element={<Job />} />
            <Route path="/job/:id" element={<JobDetails />} />
            <Route path="/judge" element={<Judge />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </loginContext.Provider>
      </BrowserRouter>
    </div>
  );
}



export default App;
