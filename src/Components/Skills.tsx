import { useScroll, useTransform,motion } from "framer-motion";
import { AiFillGithub, AiOutlineHtml5, AiOutlineJava } from "react-icons/ai";
import {  FaCss3, FaNodeJs, FaPhp, FaReact } from "react-icons/fa";
import {
  SiC,
  SiExpress,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNginx,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { ColorContext } from "../store/ColorContext";
import { useContext } from "react";
const DUMMYSKILLS = [{
    skill: "Html",
    icon: < AiOutlineHtml5 />
  },
  {
    skill: "Css",
    icon: < FaCss3 />,
  },
  {
    skill: "JavaScript",
    icon: < SiJavascript />,
  },
  {
    skill: "tailwindCss",
    icon: < SiTailwindcss />,
  },

  {
    skill: "React",
    icon: < FaReact />,
  },
  {
    skill: "NodeJs",
    icon: < FaNodeJs />,
  },
  {
    skill: "Redux",
    icon: < SiRedux />,
  },
  {
    skill: "Php",
    icon: < FaPhp />,
  },
  {
    skill: "Typescript",
    icon: < SiTypescript />,
  },
  {
    skill: "Github",
    icon: < AiFillGithub />,
  },
  {
    skill: "git",
    icon: < SiGit />,
    external: false,
  },
  {
    skill: "Nginx",
    icon: < SiNginx />,
    external: true,
  },
  {
    skill: "Mongodb",
    icon: < SiMongodb />,
    external: true,
  },
  {
    skill: "MySql",
    icon: < SiMysql />,
    external: true,
  },
  {
    skill: "Express js",
    icon: < SiExpress />,
    external: true,
  },
  {
    skill: "C",
    icon: < SiC />,
    external: true,
  },
  {
    skill: "Java",
    icon: < AiOutlineJava />,
    external: true,
  },
];


  
export default function Skills(){
  const {colors}=useContext(ColorContext);
  const {scrollY}=useScroll();
  const scrollSkills=useTransform(scrollY,[0,300,400],[0.4,1,1.5])
return <section id="Skills" className="flex flex-col  items-center justify-center" style={{color:colors.colorText.toString()}}>
    <motion.h1 
    style={{scale:scrollSkills ,color:colors.color.toString()}}
    className=" text-3xl font-bold uppercase text-center mb-5 w-fit" >Skills</motion.h1>
    <div className=" flex flex-wrap justify-center">
    {DUMMYSKILLS.map((skill,index)=>{
        return <motion.div 
        key={index}
        whileHover={{backgroundColor:colors.color.toString(),color:colors.background.toString()}}
        className=" flex flex-col w-52  rounded   justify-center items-center mb-2 m-2 pt-2 shadow-sm shadow-black  " >
           <div className=" text-3xl ">
           {skill.icon}
            </div>
            <span className=" text-lg">{skill.skill}</span>
        </motion.div>
    })}
    </div>
   
</section>
}