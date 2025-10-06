import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews {122}</div>
      </div>
      <div className="desccriptionbox-description">
        An e-commence website is an online platform thst facilitates
        buying and selling of products or services over the internet 
        it serves as a virtual marketplace where businesses and individuals
        showcase their products, interact with customers, and conduct transactions
        without the need of physical presence,E-commence websites have gained 
        immence popularity due to their convineice, accessibility and the
        global reach they offer.
      </div>
    </div>
  )
}

export default DescriptionBox
