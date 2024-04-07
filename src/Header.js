// import {Nav, Navbar,NavDropdown} from 'react-bootstrap'; 
import React from 'react' 
import { NavLink} from 'react-router-dom'
function Header(){
    return (  
      <div>
        
                    <NavLink to="/add" className="list-part">Add Product</NavLink>
                    <NavLink to="/update"className="list-part">Update</NavLink>
                    <NavLink to="/list"className="list-part">Product List</NavLink>
                    <NavLink to="/login"className="list-part">Login</NavLink>
                    <NavLink to="/register"className="list-part">Register</NavLink>
                
      </div>
      )
}
export default Header;