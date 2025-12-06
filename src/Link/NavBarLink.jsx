import React from 'react'
import { Link } from 'react-router-dom'
function NavBarLink() {
  return (
    <>
      <div>
         <nav style={{display:"flex",gap:"20px",backgroundColor:"gray",height:40,}}>
                <Link to="/">home</Link>
                <Link to="/cnt">contact</Link>
                <Link to="/abt">about</Link>
         </nav>
    </div>
    
    </>
  )
}

export default NavBarLink