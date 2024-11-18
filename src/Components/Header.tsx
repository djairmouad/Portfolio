import {motion} from "framer-motion"
import image from "../assets/android-chrome-192x192.png"
import imageChangeColor from "../assets/brush.png";
import { useContext } from "react";
import { ColorContext } from "../store/ColorContext";


const DummyArray=[
  {title:"Light",
    background1:"rgb(243 240 202)",
    background:"#f3f0ca",
    color:"#00524c"},
    {title:"Dark",
      background1:"rgb(53 54 59)",
      background:"rgb(53 54 59 )",
     color:"#ffc96b"}
]
export default function Header(){
  const {popop}=useContext(ColorContext);
  console.log(popop)
    const {openPopop}=useContext(ColorContext)
    return <header className=' flex justify-between items-center h-16 relative '>
       {popop?(<ul className="absolute top-full right-0  h-fit p-3 rounded-lg font-bold" style={{width:"250px",background:"#35363b",boxShadow:"0px 1px 4px"}}>
               {DummyArray.map(item=>{
                  return (
                    <li
                      className="flex h-12 items-center justify-between px-1 rounded-lg border mb-3"
                      style={{ backgroundColor: item.background1,boxShadow:"1px 1px 2px 0px",cursor:"pointer" }}
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
                      </div>
                    </li>
                  );
                  
               })}
             </ul>):null}
    <img src={image} className=' w-11 rounded-full '/>
    <ul style={{"color":"white"}} className=' flex w-2/5 justify-between !text-white text-base font-medium'>
    <motion.li
    style={{padding:"0 10px"}}
    whileHover={{ scale:1.2, backgroundColor:"rgb(255, 201, 107)",borderRadius:"10px",y:5}}
    transition={{ duration:2, type:"spring",stiffness:250 }}
    >
    <a href="#Home">Home</a>
   </motion.li>
   <motion.li
    style={{padding:"0 10px"}}
    whileHover={{ scale:1.2, backgroundColor:"rgb(255, 201, 107)",borderRadius:"10px",y:5}}
    transition={{ duration:2, type:"spring",stiffness:250 }}
    >
    <a href="#Skills">Skills</a>
    </motion.li>
    <motion.li
    style={{padding:"0 10px"}}
    whileHover={{ scale:1.2, backgroundColor:"rgb(255, 201, 107)",borderRadius:"10px",y:5}}
    transition={{ duration:2, type:"spring",stiffness:250 }}
    >
    <a href="#Projects">Projects</a>
    </motion.li>
    <motion.li
    style={{padding:"0 10px"}}
    whileHover={{ scale:1.2, backgroundColor:"rgb(255, 201, 107)",borderRadius:"10px",y:5}}
    transition={{ duration:2, type:"spring",stiffness:250 }}
    ><a href="#Contact">Contact Me</a></motion.li>
    <motion.li
    onClick={openPopop}
    style={{padding:"0 10px"}}
    whileHover={{ scale:1.2, backgroundColor:"rgb(255, 201, 107)",borderRadius:"10px",y:5}}
    transition={{ duration:2, type:"spring",stiffness:250 }}
    ><img src={imageChangeColor} className=" h-7"/></motion.li>
    </ul>
  </header>
}