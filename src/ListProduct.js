import { NavLink } from "react-router-dom";
import { useEffect,useState } from "react";
import {Nav,NavDropdown,Table} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

import './Navbar.css'
function ListProduct(){
    const [data,setData] = useState([])
     useEffect(()=>{
          get()
    },[])

     function get(){
    fetch("http://localhost:8000/api/read").then((result)=>{
        result.json().then((resp)=>{
            console.log("result",resp);
        })
    })
    
    }
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user-info'));
    function logout(){
        localStorage.clear();
        navigate('/login')
    }
    return(
        <div>
            <Nav className='header'>
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
     {/* <Table>
     <thead>
     <tr>
        <th>#</th> 
        <th>Name</th> 
        <th>Image</th> 
        <th>Description</th> 
        <th>Price</th> 
     </tr>
     </thead>
     <tbody>
     {
     data.map((item)=>
     <tr>
     <td>{item.id}</td>
     <td>{item.name}</td>
     <td>{item.file}</td>
     <td>{item.description}</td>
     <td>{item.price}</td>
     </tr>)
     }
     
     </tbody>
     </Table> */}
        </div>
    )
}
export default ListProduct;