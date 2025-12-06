import "../components/style.css"
import { NavLink } from 'react-router-dom'

function NavlinNavbar() {
  return (
     <>
     <nav className='Navbar'>
       <NavLink to="/">home</NavLink>
       <NavLink to="/abt">about</NavLink>
       <NavLink to="/cnt">contact</NavLink>

     </nav>
     
     </>
  )
}

export default NavlinNavbar