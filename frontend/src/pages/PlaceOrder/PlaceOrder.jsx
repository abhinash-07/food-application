import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../StoreContex/Storecontex'

const PlaceOrder = () => {
   const{getTotalCartitems} = useContext(StoreContext)

  return (
    <form className='place-order'>
       <div className='place-order-left'>
           <p className='title'>Delivery Information</p>
             <div className="multifields">
                  <input type='text' placeholder='First Name'></input>
                  <input type='text' placeholder='Last Name'></input>
             </div>
             <input type='email' placeholder='Enter Your Email Address'></input>
             <input type='text' placeholder='Street'></input>
             <div className="multifields">
                  <input type='text' placeholder='City'></input>
                  <input type='text' placeholder='State'></input>
             </div>
             <div className="multifields">
                  <input type='text' placeholder='zipcode'></input>
                  <input type='text' placeholder='Country'></input>
             </div>
             <input type='text' placeholder='phone Number ' ></input>
       </div>
       <div className='place-order-right'>
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
          <button > Proceed To Payment </button>
        </div>
       </div>
    </form>
  )
}

export default PlaceOrder
MediaDeviceInfo