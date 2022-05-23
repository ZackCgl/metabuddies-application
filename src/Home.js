import React from 'react'
import "./Home.css"
import Product from './Product'
import FlipMove from 'react-flip-move';
import Rainbowman from "./images/Rainbowman.png"
import btcboy2 from "./images/btcboy2.png"
import btcboy3 from "./images/btcboy3.png"
import btcboy5 from "./images/btcboy5.png"
import bannerhome from './images/bannerhome.png'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src={bannerhome} alt=""/>
        
        <div className='home__row'>
        
        <Product 
        id="929292"
        title="Papa Buddy 3d printed Home character"
        price={299.99}
        image={Rainbowman}
        rating={3}
        />
        
        <Product
         id="929293"
         title="Heisenberg 3d printed Home character"
        price={299.99}
        image={btcboy3}
        rating={4}
        />

  	    <Product
         id="929293"
         title="Party Buddie 3d printed Home character"
        price={299.99}
        image={btcboy5}
        rating={3}
        />

        <Product
         id="929293"
         title="Bitcoin Buddie 3d printed Home character"
        price={299.99}
        image={btcboy2}
        rating={5}
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