import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../components/style.css"


function AxiosReact() {

    //get

    let [users, setusers] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/users")
            .then((res) => {
                setusers(res.data)
            })
            .catch((error) => {
                console.log(error.message);

            })


    }, [])

    //post

    let [Name, setName] = useState("")
    let [Mark, setMark] = useState("")

    async function addUser() {
        if (!Name || !Mark) return
        let newUser = await axios.post("http://localhost:3000/users", {
            name: Name,
            Mark: Number(Mark)
        })
        setusers([...users, newUser.data])
        setName("")
        setMark("")

    }

    //patch

    async function UpdateUser(id) {
        let newMark = parseInt(prompt("Enter new Mark"))
        let UpdatedUser = await axios.patch(`http://localhost:3000/users/${id}`, { Mark: newMark })
        setusers(users.map((u) => { return u.id == id ? UpdatedUser.data : u }))


    }
//Delete

async function DltBtn(id) {
    let conf=confirm(" Are You sure delete User?")

if( ! conf) return;

await axios.delete(`http://localhost:3000/users/${id}`)

setusers(users.filter((u)=>{
    return u.id != id;
}))
    
}


    return (
        <>

            <h1>Axios</h1>
            <h1>get  user</h1>

            <div className='AxiosDivP'>
                {
                    users.map((user, i) => {
                        return <div key={i} className='AxiosDivC'> <div>Name: {user.name}  </div>
                            <div> Mark: {user.Mark}  </div> <br /> 
                            <button className='edit-btn' onClick={() => { UpdateUser(user.id) }}>Edit</button> <br /> <br />
                            <button className='dlt-Btn' onClick={()=>{DltBtn(user.id)}}>Delete</button>


                        </div>
                    })
                }

            </div>

            <h1>Post User</h1>

            <div className='axiosInputDiv'>
                <input className='inp' type="text" placeholder="Entre you're Name" onChange={(e) => { setName(e.target.value) }} value={Name} />  <br /> <br />
                <input className='inp' type="number" placeholder="Entre you're Mark" onChange={(e) => { setMark(e.target.value) }} value={Mark} /> <br /> <br />
                <button className='add-btn' onClick={addUser}>Add User</button>

            </div>


        </>
    )
}

export default AxiosReact