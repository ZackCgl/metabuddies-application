import React from 'react'
import "./Home.css"
import Product from './Product'
import FlipMove from 'react-flip-move';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt=""/>
        
        <div className='home__row'>
        
        <Product 
        id="929292"
        title="The lean startup"
        price={19.99}
        image="https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
        rating={5}
        />
        
        <Product
         id="929293"
         title="An ugly truth"
        price={18.99}
        image="https://images-na.ssl-images-amazon.com/images/I/51DmvLC4oxL._SY344_BO1,204,203,200_QL70_ML2_.jpg"
        rating={3}
        />
        
        </div>
        <div className='home__row'>
        <Product 
         id="929292"
        title="The lean startup"
        price={19.99}
        image="https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
        rating={5}
        />
        <Product 
         id="929292"
        title="The lean startup"
        price={19.99}
        image="https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
        rating={5}
        />
        <Product 
         id="929292"
        title="The lean startup"
        price={19.99}
        image="https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
        rating={5}
        />
        
        </div>
        <div className='home__row'>
        <Product 
         id="929292"
        title="The lean startup"
        price={19.99}
        image="https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
        rating={5}
        />
        </div>
        </div>
    </div>
  )
}

export default Home