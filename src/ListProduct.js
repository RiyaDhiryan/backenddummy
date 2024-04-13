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
                console.log("data",resp);
                setData(resp.user)
            })
        })
    }
    
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user-info'));
    function logout(){
        localStorage.clear();
        navigate('/login')
    }
    async function deleteOperation(id){
        fetch(`http://localhost:8000/api/delete/${id}`,{
            method:"DELETE"
        }).then((result)=>{
             result.json().then((resp)=>{
            console.log("DELETE",resp);
            get();
             })
             
        })
        
      
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
      <Table>
     <thead>
     <tr>
     <th>ID</th> 
        <th>Name</th> 
        <th>Image</th> 
        <th>Description</th> 
        <th>Price</th>
         <th>Update</th>  
        <th>Delete</th> 
       
     </tr>
     </thead>
     <tbody>
     {
     data.map((item,i)=>
     <tr key ={i}>
         <td>{i+1}</td> 
     <td>{item.name}</td>
     <td><img style={{width:70},{height:50}} src={"http://localhost:8000/api/getimage/"+item.file} alt="pic"/></td>
     <td>{item.description}</td>
     <td>{item.price}</td>
      <td><span>Update</span></td>
     <td><span onClick={deleteOperation(item._id)}>Delete</span></td>
    
     </tr>)
     }
     
     </tbody>
     </Table>
        </div>
    )
}

export default ListProduct;