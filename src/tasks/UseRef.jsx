import React, { useRef } from 'react'

function UseRef() {
    let input=useRef(null)
    function inpuitfocus(){
         input.current.focus()
    }
  return (
    <>
      <input type="text" ref={input} /><br /><br />
      <button onClick={inpuitfocus}>focus</button>
    </>
  )
}

export default UseRef
