import React from 'react'
import Navbar from '../Components/Navbar'
import Heropage from '../Components/homepage/Heropage.jsx'
import Hiresections from '../Components/homepage/Hiresections.jsx'

const homepage = () => {
  return (
    <div>
      <Navbar/>
      <Heropage/>
      <Hiresections/>
    </div>
  )
}

export default homepage
