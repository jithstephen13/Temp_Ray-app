import React, { useContext } from 'react';
import { useReducer } from 'react';


export const Action={
   login:"login",
   lofout:"logout"
}

const instialState={
     isAouth:false,
     isName:'dfghj'
}

 const reducer=(state,action)=>{
   switch(action.type){
    case "login":{
        return{
           isAouth:true,
           isName:action.payload


        }}
    case "logout":{
        return{
            isAouth:false,
            isName:""
        } }
      default :
      return state     
   }
}




export const LogibContext = React.createContext()


function LogibContextProvider({children}) {

     const [state,dispatcher]=useReducer(reducer,instialState)
     const value={state,dispatcher}
    return (
        <LogibContext.Provider value={value}>{children}
            
        </LogibContext.Provider>
    );
}

export default  LogibContextProvider;