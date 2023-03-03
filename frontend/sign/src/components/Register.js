import React, { useState } from 'react'
import {toast, ToastContainer} from 'react-toastify'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [value,setValue]=useState({name:"",email:"",password:""})
    console.log(value);
    const navigate=useNavigate();
    //error bl toast
    const generateError=(error)=>{
        toast.error(error,{
            position:"top-right"
        })
    }
//handleSubmit
const handleSubmit= async(event)=>
{
    //preventDefault bch ma tab3athch direct ken wa9t t3m l clic tab3ath
    event.preventDefault();
    try
    {
        const {data}= await axios.post("http://localhost:5006/user/register",{...value},{withCredentials:true})
        .then((response=>
        {
            console.log(response)
        }))
        .catch((err)=>
        {    
            const errors = err.response.data.errors
            console.log(errors[0].msg);
            generateError(errors[0].msg)
        })
    }
    catch(err){
        console.log(err);
    }
}
return (
    <div>Register
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div>
                <label>user name</label>
                <input type="text"
                name="name"
                placeholder="type user name"
                onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})} />
            </div>
            <div>
                <label>email</label>
                <input type='email'
                name='email'
                placeholder='type a valid email'
                onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})} />
            </div>      
            <div>
                <label>password</label>
                <input type='password'
                name='password'
                placeholder='type a password'
                onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})} />
            </div>
            <button> Register</button>                     
        </form>
        <ToastContainer/>
    </div>
  )
}

export default Register