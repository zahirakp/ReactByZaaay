import React, { useEffect, useState } from 'react'

function FetchData() {

    let [users, setusers] = useState([]);
    let [loading, setloading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then((res) => { return res.json() })
            .then((data) => {
                setusers(data)
                setloading(false)
            })
    }, [])


    return (
        <>

            <h1>Fetch Data</h1>
            {loading ? (
                <p>Loading....</p>
            ) : (
                <ol>
                    {
                        users.map((user, i) => {
                            return <li key={i}> name : {user.name} | Age : {user.age}  city : {user.city}</li>
                        })
                    }
                </ol>
            )

            }

        </>
    )
}

export default FetchData