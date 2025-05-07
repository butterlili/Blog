import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Signup from './pages/signup'
import Dashboard from './pages/dashboard'
import Signin from './pages/signin'
import Projects from './pages/Projects'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
      </BrowserRouter>
  )
}
