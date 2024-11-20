import {motion, useScroll, useTransform} from "framer-motion"
import image from "../assets/android-chrome-192x192.png"
import imageChangeColor from "../assets/brush.png";
import { useCallback, useContext, useEffect, useState } from "react";
import { ColorContext } from "../store/ColorContext";
import ModelColor from "./ModeColor";


const DummyArray=[
  {title:"Light",
    background:"#f3f0ca",
    color:"#00524c",
    colorText:"hsl(202.5deg 30.3% 25.88%)"
   },
    {title:"Dark",
    background:"rgb(53 54 59 )",
     color:"#ffc96b",
     colorText:"White"},
     {title:"Natural",
      background:"rgb(60, 98, 85)",
       color:"rgb(243 219 98)",
       colorText:"White"},
     {title:"CoolTonesPalette",
      background:"rgb(241, 246, 249)",
       color:"rgb(57, 72, 103)",
       colorText:"rgb(33, 42, 62)"}
]
export default function Header(){
  const {popop,colors}=useContext(ColorContext);
  console.log(popop)
    const {openPopop,cloasPopop}=useContext(ColorContext)
    const { scrollY } = useScroll();
    const handelCloas = useCallback(() => {
      cloasPopop();
      setHasScrolled(false); // Reset the state to allow re-triggering
    }, [cloasPopop]);
  
    const [hasScrolled, setHasScrolled] = useState(false);
    // Re-execute openPopop after scrolling
    useEffect(() => {
      const unsubscribe = scrollY.onChange((currentScroll) => {
        if (currentScroll > 50 && !hasScrolled) {
          setHasScrolled(true);
          handelCloas();
        }
      });
  
      // Cleanup listener
      return () => unsubscribe();
    }, [scrollY, handelCloas, hasScrolled]);
    return <header className=' flex justify-between items-center h-16 relative max-sm:justify-start'>
       {popop?(<motion.ul 
              variants={{
                hidden: { transition: { staggerChildren: 0.1,type:"spring"} },
                visible: { transition: { staggerChildren: 0.1,type:"spring"} },
              }}
              initial="hidden"
              animate="visible"
              className="absolute top-full right-0  h-fit p-3 rounded-lg font-bold " style={{width:"250px",background:"#35363b",boxShadow:"0px 1px 4px"}}>
                 {DummyArray.map((item,index)=>{
                 return <ModelColor key={index} item={item}/> 
                 })}
             </motion.ul>):null}
    <img src={image} className=' w-11 rounded-full '/>
    <ul style={{"color":colors.colorText}} className=' flex w-2/5 justify-between text-base font-medium max-sm:w-full max-sm:flex-wrap max-sm:justify-center max-sm:text-sm max-sm:h-full max-sm:items-end max-md:w-3/5 max-lg:w-2/3'>
    <motion.li
    style={{padding:"0 10px",color:colors.colorText}}
    whileHover={{ scale:1.2, backgroundColor:colors.color,color:"white",borderRadius:"10px",y:5}}
    transition={{ duration:2, type:"spring",stiffness:250 }}
    >
    <a href="#Home">Home</a>
   </motion.li>
   <motion.li
    style={{padding:"0 10px",color:colors.colorText}}
    whileHover={{ scale:1.2, backgroundColor:colors.color,color:"white",borderRadius:"10px",y:5}}
    transition={{ duration:2, type:"spring",stiffness:250 }}
    >
    <a href="#Skills">Skills</a>
    </motion.li>
    <motion.li
    style={{padding:"0 10px",color:colors.colorText}}
    whileHover={{ scale:1.2, backgroundColor:colors.color,color:"white",borderRadius:"10px",y:5}}
    transition={{ duration:2, type:"spring",stiffness:250 }}
    >
    <a href="#Projects">Projects</a>
    </motion.li>
    <motion.li
    style={{padding:"0 10px",color:colors.colorText}}
    whileHover={{ scale:1.2, backgroundColor:colors.color,color:"white",borderRadius:"10px",y:5}}
    transition={{ duration:2, type:"spring",stiffness:250 }}
    ><a href="#Contact">Contact Me</a></motion.li>
    <motion.li
    onClick={openPopop}
    style={{padding:"0 10px",color:colors.colorText}}
    whileHover={{ scale:1.2, backgroundColor:colors.color,color:"white",borderRadius:"10px",y:5}}
    transition={{ duration:2, type:"spring",stiffness:250 }}
    ><img src={imageChangeColor} className=" h-7"/></motion.li>
    </ul>
  </header>
}