import React, { useContext } from 'react'
import './Food_display.css'
import { StoreContext } from '../../StoreContex/Storecontex'
import Fooditem from '../Fooditem/Fooditem'

const Food_display = ({category}) => {
  
    const { food_list }  = useContext(StoreContext);
  
    return (
    <div className='food-display' id='food-display'>
       <h2>Top Dishes near you</h2>
       <div className="food-display-list">
        {food_list.map((item ,index)=>{
            {console.log(category, item.category)}
                 if(category==="All" || category===item.category){
            return <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                 }
          })} 
       </div>
    </div>
  );
    }

export default Food_display
