import React, { useContext } from 'react';
import { useReducer } from 'react';


export const Action={
    AddCart:"AddCart",
    RemoveCart:"RemoveCart",
    Chckout:"Checkout"
}

const instialState=[]

 const reducer=(state,action)=>{
   switch(action.type){
    case Action.AddCart:{
        return[
            ...state,
            action.payload]
        }
        
    case Action.RemoveCart:{
       const Newcart= state.filter((item)=>item.id!==action.payload)
        return Newcart}
    case Action.Chckout:{
        return []    
}

      default :{
      return state}     
   }
}




export const CartContex = React.createContext()


function CartContexProvider({children}) {

     const [state,dispatcher]=useReducer(reducer,instialState)
     const value={state,dispatcher}
    return (
        <CartContex.Provider value={value}>{children}
            
        </CartContex.Provider>
    );
}

export default CartContexProvider;