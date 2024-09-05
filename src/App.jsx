import { useState } from 'react'
import Hero from './Hero'
import './css/App.css'
import Navigation from './Navigation'
import Work from './Work'
import About from './About'
function App() {

  return (
    <>
      <Navigation></Navigation>
      <Hero></Hero>
      <Work></Work>
      <About></About>
    </>
  )
}

export default App
