import React, { createContext } from 'react'
import "../components/style.css"
import Child1 from '../components/use-context-childs/Child1'

const DataProvider = createContext()

function Usecontext() {


    let name = "zahira"
    return (
        <>
        
            <div className='parent'>
                <p> parent</p>
                <DataProvider.Provider value={name}>
                <Child1 />
                </DataProvider.Provider>
            </div>
          
        </>
    )
}
export { DataProvider }
export default Usecontext