import React, { useEffect, useState } from 'react'

function UseEffect() {
    let[count,setcount]=useState(0)
    useEffect(()=>{
        console.log("page effected");  //runs after every render    
    })


    let [count1,setcount1]=useState(0)
    let [count2,setcount2]=useState(0)

    useEffect(()=>{
        console.log("count1 effected");       //only for count1
        
    },[count1])
  return (
    <>
     <h1>{count}</h1>
    <button onClick={()=>{setcount(count+1)}}>+</button>   


    <h1>{count1}</h1>
    <button onClick={()=>{setcount1(count1+1)}}>+</button>   
     <h1>{count2}</h1>
    <button onClick={()=>{setcount2(count2+1)}}>+</button>   


    </>
  )
}

export default UseEffect