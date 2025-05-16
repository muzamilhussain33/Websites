import { useState } from 'react'
import Navbar from './components/Navbar'
import NotFound from './pages/Not-found'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Loginsignup from './pages/Login-signup'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Services from './pages/Services'
import ServiceDetails from './pages/ServiceDetails'
import Footer from './components/Footer'
import BookNow from './pages/BookNow'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="*" element={<NotFound/>} />
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login-signup' element={<Loginsignup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/servicesdetails' element={<ServiceDetails />}/>
        <Route path='/book-now' element={<BookNow />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
