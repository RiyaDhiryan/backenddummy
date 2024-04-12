import { NavLink } from "react-router-dom";
import {Nav,NavDropdown} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import { useState } from "react";
import axios from 'axios'
import './Navbar.css'
function AddProduct(){
  const[name,setName] = useState("")
  const[file,setFile] = useState()
  const[description,setDescription] = useState("")
  const[price,setPrice] = useState("")
const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user-info'));
    function logout(){
        localStorage.clear();
        navigate('/login')
    }
    async function add(e){
      e.preventDefault();
      const fromData = new FormData()
      fromData.append("name",name)
      fromData.append("file",file)
      fromData.append("description",description)
      fromData.append("price",price)
     axios.post('http://localhost:8000/addata',fromData,{
      headers:{"Content-Type":"multipart/form-data"}
     }).then((res)=>{
      console.log(res);
      alert("Add data Successfully!")
     }).catch((e)=>{
      console.log(e.message);
     })
     setName('')
     setPrice('')
     setDescription('')
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
      <div>
        <input type="text" className="form-control" placeholder="Name" onChange={(e)=>setName(e.target.value)}/><br/>
        <input type="file" className="form-control" onChange={(e)=>setFile(e.target.files[0])}/><br/>
        <input type="text" className="form-control"placeholder="Price" onChange={(e)=>setPrice(e.target.value)}/><br/>
        <input type="text" className="form-control"placeholder="description"onChange={(e)=>setDescription(e.target.value)}/><br/>
      </div>
      <Button onClick={add}>Add Product</Button>
        </div>
    )
}
export default AddProduct;