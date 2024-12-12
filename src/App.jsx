import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import GettingStarted from './pages/GettingStarted'
function App() {
  return (
    <div className='dark:bg-gray-900'>

      <div className='mx-4 sm:mx-[10%]'>
      


     <Routes>
          <Route path='/Doc-Time/'  element={ <GettingStarted/> } />
          <Route path='/' element={ <Home/> } />
          <Route path='/doctors' element={ <Doctors/> } />
          <Route path='/doctors/:speciality' element={ <Doctors/> } />
          <Route path='/login' element={ <Login/> } />
          <Route path='/about' element={ <About/> } />
          <Route path='/contact' element={ <Contact/> } />
          <Route path='/my-profile' element={ <MyProile/> } />
          <Route path='/my-appointments' element={ <MyAppointments/> } />
          <Route path='/appointment/:docId' element={ <Appointment/> } />
      </Routes>
    
    </div>
    </div>

  )
}

export default App
