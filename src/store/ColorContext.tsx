import React, { createContext, useState } from "react";

interface typeColor{
    background:String,
    color:String,
    colorText:String
}
export const ColorContext = createContext<{
    changeColor: (newColors: typeColor) => void;
    colors: typeColor;
    openPopop:()=>void;
    cloasPopop:()=>void;
    popop:Boolean
}>({
    changeColor: () => {}, // Default function implementation
    colors: { background: "", color: "", colorText: "" }, // Default colors
    openPopop:()=>{},
    cloasPopop:()=>{},
    popop:false
});


 const ContextProvider:React.FC<{children: React.ReactNode}>=(props)=>{

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
    setState(false)
}
const contextValue:{
    changeColor:(obj:typeColor)=>void,
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