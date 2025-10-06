import React from 'react'
import './Hero.css'
import hero_img from '../../assets/hero_img.png'
import hand from '../../assets/hand.png'
const Hero = () => {
  return (
    <div className="hero">
    <div className="hero-left">
       <h2>NEW ARRIVALS ONLY</h2>
       <div>
        <div className="hand-hand-icon">
          <p>new</p><img src={hand} alt="" />
        </div>
        <p>collection <br />
        for everyone</p>
       </div>
         <div className="hero-latest-btn">
      <h3>Latest collection</h3>
     </div>
    </div>
    <div className="hero-right">
        <img src={hero_img} alt="" />
    </div>
    </div>
  )
}

export default Hero
