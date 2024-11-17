import {motion} from "framer-motion"
import image from "../assets/android-chrome-192x192.png"
export default function Header(){
    return <header className=' flex justify-between items-center h-16 '>
    <img src={image} className=' w-11 rounded-full '/>
    <ul style={{"color":"white"}} className=' flex w-2/5 justify-between !text-white text-base font-medium'>
      <motion.li whileHover={{background:"#ffc96b"}} className=" w-4">Home</motion.li>
      <motion.li whileHover={{background:"#ffc96b"}}>Skills</motion.li>
      <motion.li whileHover={{background:"#ffc96b"}}>Projects</motion.li>
      <motion.li whileHover={{background:"#ffc96b"}}>Contact Me</motion.li>
    </ul>
  </header>
}