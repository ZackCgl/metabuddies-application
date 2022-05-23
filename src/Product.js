import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';
import { motion } from "framer-motion"

function Product({id, title, price, image, rating}) {
//dispatch is a gun. shoot into the data layer
const [{ basket }, dispatch] = useStateValue()

  const addToBasket = () =>{
    
    // dispatch an action/item into the data layer
  dispatch({
    type: "ADD_TO_BASKET",
    item: {
      id: id,
      title: title,
      image: image,
      price: price,
      rating: rating,
    },
  });
  };

  return (
    
    <motion.div whileHover={{scale:1.04}} className='product'>
    
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
            {Array(rating).fill().map((_, i) => (
              <p>O</p>
            ))}
            
            
            </div>
        </div>
        
        <img src={image} alt="" />
        <button onClick={addToBasket}>Click me</button>
    </motion.div>
  )
}

export default Product