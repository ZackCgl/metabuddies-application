import React from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom';
import {useState} from 'react'
import {auth} from './firebase'

function Login() {

    const navigate = useNavigate ();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) =>{
        e.preventDefault()

        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            if(auth){
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
    }

    const register = (e) =>{
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) =>{
            if(auth){
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
    }
  return (
    <div className="login">
    <Link to="/"><img className='login__logo' src='http://meta-buddies.io/assets/images/logo.png' alt='' /></Link>
    <div className="login__container">
        <h1>Sign-in</h1>
        <form>
            <h5>Email</h5>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <h5>Password</h5>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" onClick={signIn} className="login__signinbutton">Sign in</button>
        </form>
        <p>By signing in you agree to Meta-buddies terms and conditions. 
        </p>
        <button className="login__signinbutton" onClick={register}>Create Meta-Buddies</button>
    </div>
    </div>
  )
}

export default Login