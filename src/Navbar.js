import React, {useEffect} from 'react'
import App from "./App"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CheckoutApp from './CheckoutApp';
import Header from './Header';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Payment from './Payment';
import Platform from "./Platform"
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';



function Navbar() {

  const promise = loadStripe('pk_test_51L34nrJ0Tu9paWkWZKatZuci1OZz9VeqIh4uCnavYGPZFkJkvBfHtp8UrgmRZBcGz5z5Xb3GS2dxM5VtJtGU3RFx00MUrjoIq9');

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
          <Route path='/orders' element={[<Header />,<Orders />]}></Route>
          <Route path="/payment" 
          element={[<Header />,
          <Elements stripe={promise}>
          <Payment />
          </Elements>]}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/platform" element={ [<Header />,<Platform />]}></Route>
        </Routes>
     </Router>
    </div>
    
  )
}

export default Navbar