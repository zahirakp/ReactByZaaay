import React from 'react'
import Nav from '../components/Router-Elements/Nav'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from '../components/Router-Elements/Home'
import About from '../components/Router-Elements/About'
import Contact from '../components/Router-Elements/Contact'
import NotFound from '../components/Router-Elements/NotFound'
import Details from '../components/Router-Elements/Details'

function RouterReact() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
        <Route path='/about' element={<About />}>
          <Route path='details' element={<Details />} >
          </Route>
        </Route>
        <Route path='/contact' element={<Contact />}>
        </Route>
        <Route path='*' element={<NotFound />}>
        </Route>

      </Routes>
    </>
  )
}

export default RouterReact