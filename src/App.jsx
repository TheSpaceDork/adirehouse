import { useState } from 'react'

import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Details from './components/Details'
import Footer from './components/Footer'
function App() {


  return (
    <div className="App px-6 lg:px-32 py-8">
      <Navbar />
      <Hero />
      <Details />
      <Footer/>
    </div>
  )
}

export default App
