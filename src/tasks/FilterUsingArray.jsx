import React, { useState } from 'react'

function FilterUsingArray() {
  let [names, settnames] = useState(["zaeyee", "sappu", "shana", "hiba"])
  function removename(cliked_i) {
    settnames(names.filter((n, i) => {
      return cliked_i != i
    }))
  }

  
  //use another method
  //let newaray=names.filter((n,i)=>{
  //   return cliked_i != i
  //  settnames(newaray)

  return (
    <>

      <u>{

        names.map((n, i) => {
          return (
            <li key={i}>{n} <br /><button onClick={() => { removename(i) }}>remove</button></li>
          )

        })

      }
      </u>

    </>
  )
}

export default FilterUsingArray