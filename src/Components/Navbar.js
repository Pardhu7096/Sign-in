import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <ul>
       <Link to="/signIn"><li>Sign-In</li></Link>
       <Link to="/Home"><li>Home</li></Link>

        
    </ul>
    
    </div>
  )
}

export default Navbar