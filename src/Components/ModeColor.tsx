import {motion} from "framer-motion"
import { ColorContext } from "../store/ColorContext";
import { useContext } from "react";

export default function ModelColor({item}){
  const {changeColor}=useContext(ColorContext);
    return  (
         <motion.li
         onClick={()=>changeColor(item)}
         variants={{
            hidden: { opacity: 0, y: 20,type:"spring" },
            visible: { opacity: 1, y: 0,type:"spring" },
          }}
           className="flex h-12 items-center justify-between px-1 rounded-lg border mb-3"
           style={{ backgroundColor: item.background,boxShadow:"1px 1px 2px 0px",cursor:"pointer" }}
         >
           <h1 style={{color:"#c7c7c7",fontSize:"18px"}}>{item.title}</h1>
           <div className="w-2/5 h-full flex items-center justify-around ">
             <div
               className="h-5 w-5 rounded-full"
               style={{ backgroundColor: item.background,boxShadow:"1px 1px 4px 0px" }}
             ></div>
             <div
               className="h-5 w-5 rounded-full"
               style={{ backgroundColor: item.color,boxShadow:"1px 1px 4px 0px" }}
             ></div>
             <div
               className="h-5 w-5 rounded-full"
               style={{ backgroundColor: item.colorText,boxShadow:"1px 1px 4px 0px" }}
             ></div>
           </div>
         </motion.li>
       );
       
}