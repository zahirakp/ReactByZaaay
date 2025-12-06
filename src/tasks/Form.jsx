import React, { useState } from 'react'

function Form() {
    let [formdatas, setformdata] = useState({})
    
    function inputshandle(e) {
        let { name, value } = e.target         //let name=e.target.name  //let value=e.target.value
        setformdata({ ...formdatas, [name]: value })
    }
    function handleform(e) {
        e.preventDefault()
        alert(`Welcome back ${formdatas.UserName} , Email : ${formdatas.UserEmail} Age : ${formdatas.UserAge}`)
    }

    return (
        <>
            <h1>Form</h1>
            <form onSubmit={handleform}>
                <input type="text" name="UserName" placeholder="entre you're Name" required onChange={inputshandle} /><br /><br />
                <input type="email" name="UserEmail" placeholder="entre you're Email" required onChange={inputshandle} /><br /><br />
                <input type="number" name="UserAge" placeholder="entre you're Age" required onChange={inputshandle} /><br /><br />
                <button>submit</button>
            </form>

        </>
    )
}

export default Form
