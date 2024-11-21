import imageProject from "../projectImage/1722129120921.jpg";
import imageChat from "../projectImage/1727541112628.jpg";
import imageCMMS from "../projectImage/1721222337818.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { ColorContext } from "../store/ColorContext";
import { useContext } from "react";

const DummyProjects = [
  {
    title: "Ecommerce Web Site",
    image: imageProject,
    Description:
      "Welcome to my Full-Stack Ecommerce Website! Admins can efficiently manage products, categories, orders, and user accounts. Shoppers can browse products, add items to their cart, read reviews, and make secure purchases. With easy profile management and order tracking, the platform ensures a smooth and convenient experience for all.",
    Frontend: "React, Tailwind CSS, Redux, React Router, and other libraries.",
    Backend: "Node.js, Express.js.",
    Database: "MySQL.",
    url:"https://github.com/djairmouad/Ecommerce-web-Site-"
  },
  {
    title: "Chat Application",
    image: imageChat,
    Description:
      "Discover a chat app designed for easy communication! Send real-time messages, share images, make video calls with camera and mic controls, and connect with friends quickly. Customize your profile and enjoy a secure, user-friendly experience.",
    Frontend:
      "React.js, Tailwind CSS, Redux ⚛️, ensuring a smooth, responsive user interface with a focus on performance and scalability.",
    Backend:
      "Node.js, Express.js 🛠️, providing a robust and flexible server-side infrastructure. Real-time Communication: Socket.IO, WebRTC ⚡, enabling instant messaging and video call functionality.",
    Database: "MongoDB 🗄️, a NoSQL database that allows for efficient and scalable data management.",
    url:"https://github.com/djairmouad/AppChat"
  },
  {
    title: "Computerized Maintenance Management System",
    image: imageCMMS,
    Description:
      "Developed a Computerized Maintenance Management System (CMMS) to streamline equipment and asset management, reducing downtime and boosting productivity. Inspired by our internship at Groupe CHIALI, this platform facilitates seamless collaboration across roles—directors, agents, and teams—ensuring efficient maintenance operations through structured workflows and reporting.",
    Frontend:
      "HTML, CSS, JS",
    Backend:
      "PHP (phpMailer/tcpdf library).",
    Database: "MySQL.",
    url:"https://github.com/djairmouad/gestion-de-maintenance-assist-e-par-ordinateur"
  },
];

export default function Project() {
  const {colors}=useContext(ColorContext)
  const { scrollY } = useScroll();
  const scrollProject = useTransform(scrollY, [600,800, 1600,1800,2000,2200], [0,-45, 0,-45,0,-45]);
  const scrollprojectTitle=useTransform(scrollY,[0,800,1200],[0.4,1,1.5])
  return (
    <section id="Projects" className="mt-28 flex flex-col items-center">
      <motion.h1 className="text-2xl font-bold uppercase text-center mb-10 w-fit"
       style={{scale:scrollprojectTitle,color:colors.color.toString() , fontFamily:"monospace"}}
      >
        Featured Projects
      </motion.h1>
      {DummyProjects.map((item, index) => (
        <div
          key={index}
          className="flex flex-col  items-center gap-10 pb-28 mb-20  "
          style={{height:"fit-content",border:"1px solid",padding:"5px",borderRadius:"10px",color:colors.colorText.toString()}}
        >
             <motion.h1 
             style={{color:colors.color.toString(),fontFamily:"monospace"}}
             className="text-2xl mb-2 uppercase font-bold">
              
              {item.title}
            </motion.h1>

            {}
            <div
             key={index}
             className="flex flex-col md:flex-row items-center gap-10"
            >
          <motion.img
           style={{ y: scrollProject }}
           transition={{type:"spring",duration:0.2}}
            src={item.image}
            className="w-full md:w-2/4 h-60 rounded-2xl shadow-lg"
          />
          <motion.div
           style={{ y: scrollProject,fontFamily:"math" }}
           transition={{type:"spring",duration:0.2}}
            className="flex flex-col w-full md:w-1/2 pl-5"
          >
            <p className="text-sm text-justify mb-4">{item.Description}</p>
            <motion.h1 className="text-xl  uppercase font-bold" style={{color:colors.color.toString()}}>Frontend:</motion.h1>
            <h2 className="mb-3">{item.Frontend}</h2>
            <motion.h1 className="text-xl  uppercase font-bold" style={{color:colors.color.toString()}}>Backend:</motion.h1>
            <h2 className="mb-3">{item.Backend}</h2>
            <motion.h1 className="text-xl  uppercase font-bold" style={{color:colors.color.toString()}}>Database:</motion.h1>
            <h2>{item.Database}</h2>
            <motion.a target="_blank"
            href={item.url}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 250 }}
            style={{cursor:"pointer",margin:"auto",width:"fit-content",color: colors.background.toString(), backgroundColor: colors.color.toString(),padding:"1px 10px",borderRadius:"5px",fontFamily:"system-ui",fontSize:"18px"}}>
              DEMO</motion.a>
          </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
}
