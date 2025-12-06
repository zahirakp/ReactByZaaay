import React from 'react'
import { Outlet } from 'react-router-dom'

function About() {
  return (
    <>

      <h1>About page</h1>
      <a href="about/details">details</a>
      <Outlet />
    </>
  )
}

export default About