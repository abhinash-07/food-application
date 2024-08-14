import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{

    const[cartItems , setCartitems] = useState({});
    
    const addToCart = (itemId)=>{
        if(!cartItems[itemId]){
            setCartitems((prev)=>({...prev,[itemId]:1}))
        }else{
            setCartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart = (itemId)=>{
                setCartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
            }
        
          const getTotalCartitems=()=> {


            let totalamount =0 ;


            for (const item in cartItems){
                if(cartItems[item]>0){
                let Item_info = food_list.find((product)=>product._id == item)
                totalamount+=(Item_info.price * cartItems[item]);
                }
            }
            return totalamount;
          } 


    const contextValue =  {
      food_list,
      cartItems,
      setCartitems,
      addToCart,
      removeFromCart,
      getTotalCartitems
    }
     

    return (
     <StoreContext.Provider value={contextValue}>
        {props.children}
     </StoreContext.Provider>
    )

}

export default StoreContextProvider
