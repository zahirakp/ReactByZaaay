import React from 'react'
import "../style.css"
import { useContext } from 'react'
import { DataProvider } from '../../tasks/UseContext'


function Child3() {
    let name=useContext(DataProvider)
  return (
    <div className='child-3'>
        <p>child3</p>
      <h1>{name}</h1>
    </div>
  )
}

export default Child3