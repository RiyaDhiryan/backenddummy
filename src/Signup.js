import React,{useState,useEffect} from 'react'
import {Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import {Nav} from 'react-bootstrap'
function SignUp(){
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate();
  useEffect(()=>{
    get()
  },[])
  function get(){
    if(localStorage.getItem('user-info')){
      navigate('/add')
    }
  }
async function signUp(){
  let item = {name,email,password}
  console.warn(item)
   let result=  await fetch("http://localhost:8000/api/signup",{
    method:'POST',
    headers:{
       "Content-Type":"application/json",
       "Accept":"application/json"
    },
  body:JSON.stringify(item)
  })
  result =await result.json();
  console.log("result",result)
  if(result.success == true){
    localStorage.setItem('user-info',JSON.stringify(result))
  alert('User SignUp Succesfully!')
  navigate("/add")
  }
  else{
    alert("Fill all the details")
  }
  
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
  <h1>Welcome!</h1>
  <input type='text'placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
  <input type='text'placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
  <input type='text'placeholder='Enter Your Password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
  <Button onClick={signUp}>Sign Up</Button>
    </div>
  )
}
export default SignUp;