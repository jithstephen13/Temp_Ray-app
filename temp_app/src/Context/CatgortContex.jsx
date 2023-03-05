import React, { useContext } from 'react';
import { useReducer } from 'react';


export const Action={
    catagery:"catagery",
    subCatagery:"subCatagery",
    CompleteData:"CompleteData",
    SubData:"SubData",
    isLoding:"isLoding"
}

const instialState={
   catagery:"",
   subCatagery:"bedroom-furniture",
   CompleteData:[],
   SubData:[],
   isLoding:false,


}

 const reducer=(state,action)=>{
   switch(action.type){
    case "catagery":
        return{
            ...state,
            catagery:action.payload
        }
   
        case "CompleteData":
            return{
                ...state,
                catagery:state.catagery,
                subCatagery:state.subCatagery ,
                CompleteData:action.payload
            } 
              case "subCatagery":
        return{
            ...state,
            catagery:state.catagery,
            subCatagery: action.payload,
            CompleteData:state.CompleteData
        } 
            case "SubData":
                return{
                    ...state,
                    catagery:state.catagery,
                    subCatagery:state.subCatagery ,
                    CompleteData:state.CompleteData,
                    SubData:action.payload
                }       
      default :
      return state     
   }
}




export const CatgortContex = React.createContext()


function CatgortContexProvider({children}) {

     const [state,dispatcher]=useReducer(reducer,instialState)
     const value={state,dispatcher}
    return (
        <CatgortContex.Provider value={value}>{children}
            
        </CatgortContex.Provider>
    );
}
export default CatgortContexProvider;