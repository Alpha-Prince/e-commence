import React, {useContext} from 'react'
import'./CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Items/Items.jsx'

const ShopCategory = (props) => {
   
const {all_product} = useContext(ShopContext);

  return (
    <div>
    <div className="shop-category">
          <div className='banner'> 
             <div className="banner-left">
                 <h1>FLAT 50% OFF</h1>
                 <p><span>12</span> Hours <span>20</span> Min</p>
                 <button>Explore now</button>
             </div>
             <div className="banner-right">
                 <img src={props.image} />
             </div>
         </div>
         <div className="shopcategory-indexSort">
          <p> 
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort">
            Sort by <img src="null" alt="dropdown"/>
          </div>
         </div> 
         <div className="shopcategory-product">
        {all_product.map((item,i)=>{
            if(props.category===item.category){
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else {
              return null;
            }
          })}
         </div> 
    </div>
    <div className="shopcategory-loadmore">
      <p>Explore More</p>
    </div>
         </div>
  )
}

export default ShopCategory
