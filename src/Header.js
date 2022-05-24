import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase"


function Header() {

  const [{ basket, user }, dispatch] = useStateValue();

  const handleSignIn = () =>{
    if(user){
      auth.signOut();
    }
  }

  return (
    <div className='header'>
        <Link to="/"><img className='header__logo' src='http://meta-buddies.io/assets/images/logo.png' alt='' /></Link>
            <div className='header__search'>
                <input className='header__searchInput' type="text">
               
                </input>
                <SearchIcon className='header__searchIcon'/>
            </div>
                <div className='header__nav'>
                <Link to={!user && "/login"}>
                  <div onClick={handleSignIn} className='header__option'>
                    <span className='header__optionLineOne'>{user ? 'Hi ' + `${user?.email},` : 'Hello Guest'}
                    </span>
                    <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign in'}
                      
                    </span>
                  </div>
                  </Link>
                  <div className='header__option'>
                  <span className='header__optionLineOne'>
                      Returns
                    </span>
                    <span className='header__optionLineTwo'>
                     & Orders
                    </span>
                  </div>
                  <Link to="/platform">
                  <div className='header__option'>
                  <span className='header__optionLineOne'>
                      NFT
                    </span>
                    <span className='header__optionLineTwo'>
                      Platform
                    </span>
                  </div>
                  </Link>
                  <div className='header__optionBasket'>
                    <Link to="/checkout"><ShoppingBasket /></Link>
                    <span className='header__optionLineTwo header__basketCount'>
                    {basket?.length}</span>
                  </div>
                </div>
            
    </div>
  )
}

export default Header