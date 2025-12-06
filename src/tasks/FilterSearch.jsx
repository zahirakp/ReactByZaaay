import React, { useState } from 'react'

function FilterSearch() {
let names=["zaay","sappu","nidha","neja","zaay"]
let [search,setsearch]=useState("");
let [filterName,setFilterName]=useState([""]);

function hndlebtn(){
setFilterName(
    names.filter((name)=>{
        return search.toLocaleLowerCase() === name.toLocaleLowerCase()
    })
)
}


  return (
    <>
    <input type="text" placeholder='Entre you"re name' onChange={((e)=>{
          setsearch(e.target.value)
    })}/>

    <button onClick={hndlebtn}>search</button>
    <ul>
        { filterName != "" ?(
            names.map((name,i)=>{
             return   <li key={i}>{name}</li>
            })
        ):(
            <p>no name</p>
        )
        }
    </ul>
    </>
  )
}

export default FilterSearch