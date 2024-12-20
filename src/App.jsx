import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login  from './pages/Login'
import SignUp from './pages/SignUp'
import Navbar from './components/common/Navbar'

function App() {
  return (
    <div className=' w-screen min-h-screen z-10 bg-richblack-900 flex flex-col font-inter '>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signUp' element={<SignUp/>} />
      </Routes>
    </div>
  )
}

export default App