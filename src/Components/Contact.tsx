import {motion} from "framer-motion"
import image from "../mailImage/mail-box (1).png"
import { ColorContext } from "../store/ColorContext"
import { useContext } from "react"
export default function Contact(){
  const {colors}=useContext(ColorContext)
    return <section id="Contact" style={{height:"100vh"}}>
        <h1 className=" text-3xl font-bold mb-3" style={{color:colors.colorText}}>Contact Me📬</h1>
        <div className="flex h-4/5 w-full justify-between items-center">
          <form className=" bg-white h-full w-1/2 rounded-lg flex flex-col p-3 font-medium justify-between">
            <label htmlFor="mail" className=" mb-4">Your Mail📧:</label>
            <input id="mail" type="email" className="outline-none mb-8 pl-2 py-1 font-normal rounded-md" style={{backgroundColor:"#f9fafb",borderColor:"#d1d5db",boxShadow:"0px 0px 0px 1px",border:"2px"}}/>
            <label htmlFor="message" className=" mb-4">Your Message 💌:</label>
            <textarea id="message" className=" h-3/4 outline-none pl-2 py-1 font-normal rounded-md"  style={{backgroundColor:"#f9fafb",borderColor:"#d1d5db",boxShadow:"0px 0px 0px 1px",border:"2px"}}/>
            <div className=" mt-4">
                <motion.button className=" outline-none bg-color_1 px-4 py-2 rounded-md font-normal"
                style={{color:colors.background,backgroundColor:colors.color}}
                whileHover={{scale:1.1}}
                transition={{ duration:2, type:"spring",stiffness:250 }}
                >SEND</motion.button>
            </div>
          </form>
          <motion.img 
          initial={{
            opacity: 0,
            scale: 0.5,
            y: "30%",
            rotate: 50,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: 0,
            transition: {
              type: "spring",
    
              duration: 0.3,
              stiffness: 80,
            },
          }}
          src={image} className=" w-2/6  mr-5"/>
        </div>
    </section>
}