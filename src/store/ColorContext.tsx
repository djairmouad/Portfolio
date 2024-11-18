import React, { createContext, useState } from "react";

interface typeColor{
    background:String,
    color:String
}
export const ColorContext=createContext({
    changeColor:({}:typeColor)=>{}
})


 const ContextProvider:React.FC=(props)=>{

const [colors,setColors]=useState<typeColor>();
const [state,setState]=useState(false);
function changeColor(obj:typeColor):void{
setColors((prv)=>{
    return {...prv,background:obj.background,color:obj.color}
})
}
function openPopop(){
    setState(prev=>!prev)
}

function cloasPopop(){
    setState(prev=>!prev)
}
const contextValue:{
    changeColor:()=>void,
    openPopop:()=>void,
     cloasPopop:()=>void,
     popop:Boolean
}={
changeColor:changeColor,
openPopop:openPopop,
cloasPopop:cloasPopop,
popop:state
}
return <ColorContext.Provider value={contextValue}>
     {props.children}
</ColorContext.Provider>
}

export default ContextProvider