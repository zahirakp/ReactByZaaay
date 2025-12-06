import { Route, Routes } from "react-router-dom"
import NavlinNavbar from "./NavlinNavbar"
import NavHome from "./NavHome"
import NavContact from "./NavContact"
import NavAbout from "./NavAbout"


function NavvLink() {
  return (
    <>
   <NavlinNavbar/>
   <Routes>
    <Route path="/" element={<NavHome/>}/>
    <Route path="/cnt" element={<NavContact/>}/>
    <Route path="/abt" element={<NavAbout/>}/>
   </Routes>
    
    </>
  )
}

export default NavvLink