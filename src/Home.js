import React from 'react'
import "./Home.css"
import Product from './Product'
import FlipMove from 'react-flip-move';
import Rainbowman from "./images/Rainbowman.png"


function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src="https://wallpaperaccess.com/full/7087237.jpg" alt=""/>
        
        <div className='home__row'>
        
        <Product 
        id="929292"
        title="Papa Buddy 3d printed Home character"
        price={99.99}
        image="https://i.ibb.co/rcWPkHN/Rainbowman.png"
        rating={1}
        />
        
        <Product
         id="929293"
         title="Heisenberg 3d printed Home character"
        price={149.99}
        image="https://i.ibb.co/rcWPkHN/Rainbowman.png"
        rating={2}
        />

  	    <Product
         id="929294"
         title="Party Buddie 3d printed Home character"
        price={199.99}
        image="https://i.ibb.co/rcWPkHN/Rainbowman.png"
        rating={4}
        />

        <Product
         id="929295"
         title="Party Buddie 3d printed Home character"
        price={12.99}
        image="https://i.ibb.co/rcWPkHN/Rainbowman.png"
        rating={4}
        />
        
        </div>
        <div className='home__row'>
       
        
        </div>
        <div className='home__row'>
       
        </div>
        </div>
    </div>
  )
}

export default Home