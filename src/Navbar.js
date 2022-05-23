import React, {useEffect} from 'react'
import App from "./App"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CheckoutApp from './CheckoutApp';
import Header from './Header';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Navbar() {

  const [{}, dispatch] = useStateValue();
  useEffect(() =>{
    //will only render once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('USER IS', authUser);
      if(authUser){
        //user isnlogged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null
      })
      }
    })
  }, [])

  return (
    
    
    <div>

    <Router>
        <Routes>
          <Route path="/" element={[<Header />,<App />]}></Route>
          <Route path="/checkout" element={[<Header />,<CheckoutApp />]}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
     </Router>
    </div>
    
  )
}

export default Navbar