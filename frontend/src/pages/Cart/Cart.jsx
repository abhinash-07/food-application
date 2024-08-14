import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../StoreContex/Storecontex'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const{  cartItems,  food_list,  removeFromCart ,   getTotalCartitems} = useContext(StoreContext);
   
   const Navigate = useNavigate();

  return (
    <div>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br/>
          <hr/>
          {food_list.map((item,index)=>{
            if(cartItems[item._id]>0){
              return(
                <div>
                <div className="cart-items-title cart-items-item">
                   <img src={item.image} alt="" />
                   <p>{item.name}</p>
                   <p>${item.price}</p>
                   <p>{cartItems[item._id]}</p>
                   <p>{cartItems[item._id]*item.price}</p>
                   <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
                </div>
                <hr/>
                </div>
              )
            }
          })}

        </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>
            Cart Totals
          </h2>
          <div>
            <div className="cart-total-deatils">
              <p>Subtotal:</p>
              <p>${getTotalCartitems()}</p>
            </div>
            <hr/>
            <div className="cart-total-deatils">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr/>
            <div className="cart-total-deatils">
              <b>Total</b>
              <b> ${  getTotalCartitems()+2 }</b>
            </div>
          </div>
          <button onClick={()=>Navigate('/order')}> Proceed To Checkout </button>
        </div>
         <div className="cart-promocode">
           <div>
            <p>If You have a PROMOCODE Enter it here </p>
               <div className="cart-promocode-input">
                <input type="text"  placeholder='promocode'/>
                <button>Submit</button>
               </div>
           </div>
         </div>
      </div>
      </div>
    </div>
  )
}

export default Cart
