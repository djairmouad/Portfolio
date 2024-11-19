import React, { createContext, useState } from "react";

interface typeColor{
    background:String,
    color:String,
    colorText:String
}
export const ColorContext=createContext({
    changeColor:({}:typeColor)=>{}
})


 const ContextProvider:React.FC=(props)=>{

const [colors,setColors]=useState<typeColor>({background:"rgb(53 54 59)",color:"#ffc96b",colorText:"white"});
const [state,setState]=useState(false);
function changeColor(obj:typeColor):void{
setColors((prv)=>{
    return {...prv,background:obj.background,color:obj.color,colorText:obj.colorText}
})
}
function openPopop(){
    setState(prev=>!prev)
}

function cloasPopop(){
    setState(prev=>false)
}
const contextValue:{
    changeColor:()=>void,
    colors:typeColor,
    openPopop:()=>void,
     cloasPopop:()=>void,
     popop:Boolean
}={
changeColor:changeColor,
colors:colors,
openPopop:openPopop,
cloasPopop:cloasPopop,
popop:state
}
return <ColorContext.Provider value={contextValue}>
     {props.children}
</ColorContext.Provider>
}

export default ContextProvider