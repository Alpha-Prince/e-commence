import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import cart from '../../assets/cart-icon.png'
import downwards from '../../assets/downwards.png'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext.jsx'

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {getTotalCartItems} = useContext(ShopContext);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = (menuType) => {
    setMenu(menuType);
    setIsMobileMenu(false);
  };

  return (
    <div className='navbar'> 
      <div className="navbar-logo">
          <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <img src={downwards} alt="" className='downwards' onClick={toggleMobileMenu}/>
      <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <li onClick={()=>handleMenuClick("shop")}> 
          <Link to='/' style={{ textDecoration: 'none'}}>Shop</Link> 
          {menu==="shop" ? <hr/> : <></>}
        </li>
        <li onClick={()=>handleMenuClick("men")}> 
          <Link to='/mens' style={{ textDecoration: 'none'}}>Men</Link> 
          {menu==="men" ? <hr/> : <></>}
        </li>
        <li onClick={()=>handleMenuClick("women")}>
          <Link to='/womens' style={{ textDecoration: 'none'}}>Women</Link> 
          {menu==="women" ? <hr/> : <></>}
        </li>
        <li onClick={()=>handleMenuClick("kids")}> 
          <Link to='/kids' style={{ textDecoration: 'none'}}>Kids</Link> 
          {menu==="kids" ? <hr/> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart} alt="Cart-icon" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar