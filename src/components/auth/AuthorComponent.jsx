import './Auth.css'
import { useState } from "react"
import { Button, FormControl, Form } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FaUserCircle} from 'react-icons/fa'

export default function AuthorComponent() {
 const [auth, setAuth] =
 useState({
    login:'', 
    password:''
    })
    const onAuthchange = (e) => {
    
        setAuth({
            ...auth, [e.target.name]:
            e.target.value
        })
    }
    console.log(onAuthchange);
    const onBtnClick = () => {
        if (auth.login === "" && auth.password === "") {
            alert('Заполните поля!')
        } else {
        localStorage.setItem('auth', JSON.stringify(auth))
        window.location.reload(true)
        }
    }
   
    return(
        <div className="loginPage ">
            <div className='form-list'>
           <FaUserCircle className='auth-logo'/>
             <h1 className='mb-4'>Welcome to Alifshop</h1>
        <Form className=''>
        <FormControl
        className="input my-3" 
        type="text" 
        name='login'
        onChange={ e => onAuthchange(e)}
        placeholder="login"
        required
        />
        <FormControl
        className="input my-3" 
        type="password"
        name='password'
        onChange={e => onAuthchange(e)}
        placeholder="password"
        required
         />
         <Button onClick={onBtnClick} className='button w-100'>
            Log In
         </Button>
         </Form>
         </div>
         </div>
 
    ) 
}