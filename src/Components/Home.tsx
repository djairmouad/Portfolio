import { AiFillGithub, AiFillLinkedin, AiOutlineDownload } from "react-icons/ai"
import myImage from "../assets/photo_2024-11-15_10-09-10.jpg"
import { useContext } from "react";
import { ColorContext } from "../store/ColorContext";

export default function Home({name,title,gitHup,linkdin}){
    const {colors}=useContext(ColorContext);
    return <section id="Home" className="flex justify-between items-center" style={{height:"100vh"}}>
        <div className="w-2/5 h-full gap-4 flex-col font-bold content-center" style={{"color":colors.colorText}}>
        <h1 className=" text-5xl my-2 ">Hi 👋 My name is</h1>
        <h1 className=" text-6xl my-2" style={{"color":colors.color}}>{name}</h1>
        <h2 className=" text-4xl my-2 mb-5">{title}</h2>
        <ul className="flex justify-between my-2 w-full">
        <a
  href="#"
  style={{
    borderColor: colors.color,
    fontSize: "12px",
    color: colors.color,
    width: "fit-content",
    borderRadius: "10px",
  }}
  className="flex items-center justify-between h-8 border py-2 px-2"
>
  <li className="flex items-center justify-center  w-full items-center ">
    Download CV
    <AiOutlineDownload />
  </li>
        </a>
        <a
  href={gitHup}
  style={{
    borderColor: colors.color,
    fontSize: "12px",
    color: colors.color,
    width: "fit-content",
    borderRadius: "10px",
  }}
  className="flex items-center justify-between h-8 border  py-2 px-2"
>
  <li className="flex items-center justify-center  w-full items-center text-sm">
    GitHup
    <AiFillGithub />
  </li>
        </a>
        <a
  href={linkdin}
  style={{
    borderColor: colors.color,
    fontSize: "12px",
    color: colors.color,
    width: "fit-content",
    borderRadius: "10px",
  }}
  className="flex items-center justify-between h-8 border py-2 px-2"
>
  <li className="flex items-center justify-center w-full items-center text-sm">
    Linkedin
    <AiFillLinkedin />
  </li>
        </a>
        </ul>
        </div>
        <image className=" w-2/5">
            <img  src={myImage} className=" w-80  h-80 outline outline-offset-8  outline-accent  rounded-full"
            style={{"outlineColor":colors.color}}/>
        </image>
    </section>
}