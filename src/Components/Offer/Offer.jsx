import React from 'react'
import './Offer.css'
import exclusive_img from '../../assets/exclusive.png'
const Offer = () => {
  return (
    <div className='offers'>
    <div className='offers-left'>
    <h1>Exclusive</h1>
    <h1>Offers for you</h1>
    <p>ONLY ON BEST SELLERS PRODUCTS</p>
    <button>Check Now</button>
    </div>
    <div className='offers-right'>
<img src={exclusive_img} alt="" />
    </div>
    </div>
  )
}

export default Offer
