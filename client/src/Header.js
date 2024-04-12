import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css' 

const Header = () => {
  return (
      <div className='menu-container'>
          <div style={{width:"30%"}} className="navigation"><h2>LOGO</h2> </div>
          <div style={{width:"70%"}} className="navigation"> 
            <Link to="create-profile" style={{color:"white", textDecoration:"none", marginRight:"10px"}}> Create Profile</Link>
            <Link to="profile-list" style={{color:"white", textDecoration:"none", marginRight:"10px"}}> Profile List</Link>
         </div>
      </div>
  )
}


export default Header