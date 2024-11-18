import { AiFillGithub, AiFillLinkedin, AiOutlineDownload } from "react-icons/ai"
import myImage from "../assets/photo_2024-11-15_10-09-10.jpg"

export default function Home({name,title,gitHup,linkdin}){
    return <section id="Home" className="flex justify-between items-center" style={{height:"100vh"}}>
        <div className="w-2/5 h-full gap-4 flex-col font-bold content-center" style={{"color":"white"}}>
        <h1 className=" text-5xl my-2 ">Hi 👋 My name is</h1>
        <h1 className=" text-6xl my-2" style={{"color":"#ffc96b"}}>{name}</h1>
        <h2 className=" text-4xl my-2 mb-5">{title}</h2>
        <ul className="flex justify-between my-2 w-full">
        <li style={{borderColor:"#ffc96b",color:"#ffc96b",fontSize:"12px",width:"30%",borderRadius:"10px" }} className=" flex items-center justify-between  h-8 border px-2 py-2">
            Download Cv
            <AiOutlineDownload/>
        </li>
        <li style={{borderColor:"#ffc96b",color:"#ffc96b",fontSize:"12px",width:"30%",borderRadius:"10px" }} className=" flex items-center justify-between  h-8 border px-2 py-2 ">
            <a href={gitHup}>GitHup</a>
            <AiFillGithub/>
        </li>
        <li style={{borderColor:"#ffc96b",color:"#ffc96b",fontSize:"12px",width:"30%",borderRadius:"10px" }} className=" flex items-center justify-between  h-8 border px-2 py-2">
            <a href={linkdin}>Linkedin</a>
            <AiFillLinkedin/>
         </li>
        </ul>
        </div>
        <image className=" w-2/5">
            <img  src={myImage} className=" w-80  h-80 outline outline-offset-8  outline-accent  rounded-full"
            style={{"outlineColor":"#ffc96b"}}/>
        </image>
    </section>
}