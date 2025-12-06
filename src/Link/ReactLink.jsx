import React from 'react'
import NavBarLink from './NavBarLink'
import { Route, Routes } from 'react-router-dom'
import HomeLink from './HomeLink'
import ContactLink from './ContactLink'
import AboutLink from './AboutLink'


function ReactLink() {
  return (
    <>
<NavBarLink/>
   <Routes>
      <Route path='/' element={<HomeLink/>}/>
      <Route path='/cnt' element={<ContactLink/>}/>
      <Route path='/abt' element={<AboutLink/>}/>
    
    </Routes>
    
    </>
  )
}

export default ReactLink