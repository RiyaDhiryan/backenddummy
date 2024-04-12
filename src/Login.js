import './Login.css'
// import './Navbar.css'
// import {Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import{useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react';
function Login(){
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const navigate = useNavigate();
    useEffect(()=>{
       get()
    },[])
    function get(){
         if(localStorage.getItem('user-info')){
          navigate('/add')
        }
    }
    async function login(){
        let item = {email,password}
        console.warn(item)
        let result = await fetch("http://localhost:8000/api/signin",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)

        })
        result = await result.json()
        if(result.success==true ){
            localStorage.setItem('user-info',JSON.stringify(result))
             alert('User Login Succesfully!')
        navigate('/add')
          }
          else{
            alert("Invalid Crendentials")
          }
       
    }
    return(
        <div className='signup'>
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
                <h1>Welcome Back!</h1>
                 <input type='text' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/><br/>
                 <input type='email' placeholder='Enter password' onChange={(e)=>setPassword (e.target.value)}/><br/> 
                 <button className='click' onClick={login}>Login</button>

        </div>
    )
}
export default Login;