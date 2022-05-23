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
                alert(`Welcome ${email}`)
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
    <Link to="/"><img className='login__logo' src='https://i.pinimg.com/originals/af/5b/7f/af5b7fa2209bcc7a292823cb213f5e9d.png' alt='' /></Link>
    <div className="login__container">
        <h1>Sign-in</h1>
        <form>
            <h5>Email</h5>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <h5>Password</h5>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" onClick={signIn} className="login__signinbutton">Sign in</button>
        </form>
        <p>By signing in you agrre to amazon's terms and conditions.etc etc etc lorum impson thats halleo 
        world man can yoiu makew it more retarded for us people :D</p>
        <button className="login__signinbutton" onClick={register}>Create Amazon Account</button>
    </div>
    </div>
  )
}

export default Login