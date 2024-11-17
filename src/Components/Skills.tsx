import { AiFillGithub, AiOutlineHtml5, AiOutlineJava } from "react-icons/ai";
import {  FaCss3, FaNodeJs, FaPhp, FaReact } from "react-icons/fa";
import {
  SiAdobephotoshop,
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
import { TbBrandNextjs } from "react-icons/tb";
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
return <section style={{height:"100vh",color:"white"}}>
    <h1 className=" text-5xl font-bold uppercase text-center mb-5">Skills</h1>
    <div className=" flex flex-wrap justify-center">
    {DUMMYSKILLS.map((skill)=>{
        return <div className=" flex flex-col w-52  rounded   justify-center items-center mb-2 m-2 pt-2 shadow-sm shadow-black  " style={{color:"white"}}>
           <div className=" text-3xl ">
           {skill.icon}
            </div>
            <span className=" text-lg">{skill.skill}</span>
        </div>
    })}
    </div>
   
</section>
}