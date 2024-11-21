import { AiFillGithub, AiFillLinkedin, AiOutlineDownload } from "react-icons/ai"
import myImage from "../assets/photo_2024-11-15_10-09-10.jpg"
import React, { useContext } from "react";
import { ColorContext } from "../store/ColorContext";
import {motion} from "framer-motion"
const  Home:React.FC<{name:String,title:String,gitHup:String,linkdin:String}>=({name,title,gitHup,linkdin})=>{
    const {colors}=useContext(ColorContext);
    return <section style={{fontFamily: "ui-monospace"}} id="Home" className="max-sm:flex-col max-sm:justify-start flex justify-between items-center mb-28 mt-20 gap-5  ">
        <div className="w-2/5 h-full gap-4 flex-col font-bold content-center max-sm:w-full max-sm:h-2/5" style={{color:colors.colorText.toString()}}>
        <motion.h1 
        initial={{y:-100}}
        animate={{y:0}}
        transition={{type:"spring",stiffness:150,duration:0.3}}
        className=" text-5xl my-2 ">Hi 👋 My name is</motion.h1>
        <motion.h1 
        initial={{y:-100}}
        animate={{y:0}}
        transition={{type:"spring",stiffness:150,duration:0.3}}
        className=" text-6xl my-2" style={{color:colors.color.toString()}}>{name}</motion.h1>
        <motion.h2 
        initial={{y:200,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{type:"spring",stiffness:50,delay:0.8}}
        className=" text-4xl my-2 mb-5">{title}</motion.h2>
        <ul className="flex gap-5 max-sm:justify-between my-2 w-full">
        <a
  href="#"
  style={{
    borderColor: colors.color.toString(),
    fontSize: "12px",
    color: colors.color.toString(),
    width: "fit-content",
    borderRadius: "10px",
  }}
  className="flex items-center justify-between h-8 border py-2 px-2"
>
  <li className="text-base flex items-center justify-center  w-full items-center max-lg:text-xs">
    Download CV
    <AiOutlineDownload />
  </li>
        </a>
        <a
  href={gitHup.toString()}
  style={{
    borderColor: colors.color.toString(),
    fontSize: "12px",
    color: colors.color.toString(),
    width: "fit-content",
    borderRadius: "10px",
  }}
  className="flex items-center justify-between h-8 border  py-2 px-2"
>
  <li className="text-base flex items-center justify-center  w-full items-center text-max-sm max-lg:text-xs">
    GitHup
    <AiFillGithub />
  </li>
        </a>
        <a
  href={linkdin.toString()}
  style={{
    borderColor: colors.color.toString(),
    fontSize: "12px",
    color: colors.color.toString(),
    width: "fit-content",
    borderRadius: "10px",
  }}
  className="flex items-center justify-between h-8 border py-2 px-2"
>
  <li className="text-base flex items-center justify-center w-full items-center text-max-sm max-lg:text-xs">
    Linkedin
    <AiFillLinkedin />
  </li>
        </a>
        </ul>
        </div>
        <div
         className=" flex justify-center w-1/2 max-sm:w-full">
            <motion.img  
            initial={{scale:0}}
            animate={{scale:1}}
            transition={{type:"spring",delay:0.3,stiffness:150}}
            src={myImage} className=" w-64  h-64 outline outline-offset-8  outline-accent  rounded-full max-sm:w-48 max-sm:h-48"
            style={{outlineColor:colors.color.toString()}}/>
        </div>
    </section>
}



export default Home;