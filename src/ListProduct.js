import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import {Nav,NavDropdown} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
function ListProduct(){
    //  useEffect(()=>{
    //       get()
    // },[])

    // async function get(){
    //     let result =  await fetch("http://localhost:8000/api/read",{
    //     method:"GET"
    //   })
    // }
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user-info'));
    function logout(){
        localStorage.clear();
        navigate('/login')
    }
    return(
        <div>
            <Nav>
             {
      localStorage.getItem('user-info')?
                    <>
                    <NavLink to="/add" className="list-part">Add Product</NavLink>
                    <NavLink to="/update"className="list-part">Update</NavLink>
                    <NavLink to="/list"className="list-part">Product List</NavLink>
                    </>:
                    <>
                    <NavLink to="/login"className="list-part">Login</NavLink>
                    <NavLink to="/register"className="list-part">Register</NavLink>
                    </>
      }
      </Nav>
      {
      localStorage.getItem('user-info')?
      <Nav>
        <NavDropdown title={user.user.name}>
         <NavDropdown.Item>Profile</NavDropdown.Item>
         <NavDropdown.Item>Personal Details</NavDropdown.Item>
         <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>:null
      }
      <h1>Product List Will ne soon Uploaded!</h1>
        </div>
    )
}
export default ListProduct;