import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import bannercheckout from './images/bannercheckout.png';




function Checkout() {

  const [{ basket, user }, dispatch] = useStateValue();



  return (
    <div className="checkout">
    
        <div className="checkout__left">
            <div className="checkout__ad">
                <img src={bannercheckout} alt="" />
            </div>
            <div className="checkout__title">
                <h2>{user ? `Hi ${user?.email}` : 'Hello Guest'}</h2>

                <h2>Your Shopping Basket:</h2>
                {basket.map( item =>(
                  <CheckoutProduct 
                 id={item.id}
                 title={item.title}
                 price={item.price}
                 image={item.image}
                 rating={item.rating}

                />
                ) )}
                
            </div>
        </div>
    
        <div className="checkout__right">
        <Subtotal />

        </div>
    </div>
  )
}

export default Checkout