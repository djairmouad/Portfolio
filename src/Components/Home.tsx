import { AiFillGithub, AiFillLinkedin, AiOutlineDownload } from "react-icons/ai"
import myImage from "../assets/photo_2024-11-15_10-09-10.jpg"
import { useContext } from "react";
import { ColorContext } from "../store/ColorContext";

export default function Home({name,title,gitHup,linkdin}){
    const {colors}=useContext(ColorContext);
    return <section id="Home" className="max-sm:flex-col max-sm:justify-start flex justify-between items-center mb-28 mt-20 gap-5  ">
        <div className="w-2/5 h-full gap-4 flex-col font-bold content-center max-sm:w-full max-sm:h-2/5" style={{"color":colors.colorText}}>
        <h1 className=" text-5xl my-2 ">Hi 👋 My name is</h1>
        <h1 className=" text-6xl my-2" style={{"color":colors.color}}>{name}</h1>
        <h2 className=" text-4xl my-2 mb-5">{title}</h2>
        <ul className="flex gap-5 max-sm:justify-between my-2 w-full">
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
  <li className="text-base flex items-center justify-center  w-full items-center max-lg:text-xs">
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
  <li className="text-base flex items-center justify-center  w-full items-center text-max-sm max-lg:text-xs">
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
  <li className="text-base flex items-center justify-center w-full items-center text-max-sm max-lg:text-xs">
    Linkedin
    <AiFillLinkedin />
  </li>
        </a>
        </ul>
        </div>
        <image className=" flex justify-center w-1/2 max-sm:w-full">
            <img  src={myImage} className=" w-80  h-80 outline outline-offset-8  outline-accent  rounded-full max-sm:w-48 max-sm:h-48"
            style={{"outlineColor":colors.color}}/>
        </image>
    </section>
}