import React, { useState } from 'react'

function InLConRend() {
    let [Islogin, setIslogin] = useState(false)
    return (
        <>

            {Islogin ? (
                <>
                    <h1>Home Page</h1>
                    <h3>Welcome Back</h3>
                    <button onClick={()=>{setIslogin(false)}}>Logout</button>
                </>
            ) : (
                <>
                    <h1>login</h1>
                    <input type="text" /><br /><br />
                    <input type="password" /><br /><br />
                    <button  onClick={()=>{setIslogin(true)}}>submit</button>
                </>)
            }

        </>
    )
}

export default InLConRend
