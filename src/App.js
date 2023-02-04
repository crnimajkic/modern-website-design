import React from 'react'
import "./index.css"
import "./App.css"

import { Footer,Blog,Possibility,Features,WhatGPT3,Headers } from './containers'
import { Cta,Brand,Navbar } from './components'

const App = () => {
  return (
    <div className='app'>
        <div className='gradient__bg'>
          <Navbar />
          <Headers />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
    </div>
  )
}

export default App