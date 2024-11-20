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
      "Welcome to my Full-Stack Ecommerce Website – the ultimate online shopping destination! With powerful admin tools to effortlessly manage products, categories, orders, and user accounts, this platform ensures smooth operations from the backend. For shoppers, enjoy a seamless and intuitive experience: browse an extensive product catalog, add items to your cart, read real-time reviews, and make secure purchases in just a few clicks. Personalize your shopping journey with easy profile management and track your orders with ease. Whether you're an admin or a customer, this platform offers an exceptional, hassle-free shopping experience designed for convenience and reliability!",
    Frontend: "React, Tailwind CSS, Redux, React Router, and other libraries.",
    Backend: "Node.js, Express.js.",
    Database: "MySQL.",
  },
  {
    title: "Chat Application",
    image: imageChat,
    Description:
      "A fully immersive chat application designed for effortless communication! With secure sign-ups, real-time messaging, and the ability to search for and connect with friends, it offers a dynamic and interactive experience. Share images, make video calls with complete control over the camera and microphone, and personalize your profile. Whether for casual chats or virtual face-to-face conversations, this app ensures a seamless and secure communication experience. Perfect for those seeking both functionality and a user-friendly interface!",
    Frontend:
      "React.js, Tailwind CSS, Redux ⚛️, ensuring a smooth, responsive user interface with a focus on performance and scalability.",
    Backend:
      "Node.js, Express.js 🛠️, providing a robust and flexible server-side infrastructure. Real-time Communication: Socket.IO, WebRTC ⚡, enabling instant messaging and video call functionality.",
    Database: "MongoDB 🗄️, a NoSQL database that allows for efficient and scalable data management.",
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
       style={{scale:scrollprojectTitle,color:colors.color}}
      >
        Featured Projects
      </motion.h1>
      {DummyProjects.map((item, index) => (
        <div
          key={index}
          className="flex flex-col  items-center gap-10 pb-28 mb-20  "
          style={{height:"fit-content",border:"1px solid",padding:"5px",borderRadius:"10px",color:colors.colorText}}
        >
             <motion.h1 
             style={{color:colors.color}}
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
           style={{ y: scrollProject }}
           transition={{type:"spring",duration:0.2}}
            className="flex flex-col w-full md:w-1/2 pl-5"
          >
            <p className="text-sm text-justify mb-4">{item.Description}</p>
            <motion.h1 className="text-xl  uppercase font-bold" style={{color:colors.color}}>Frontend:</motion.h1>
            <h2 className="mb-3">{item.Frontend}</h2>
            <motion.h1 className="text-xl  uppercase font-bold" style={{color:colors.color}}>Backend:</motion.h1>
            <h2 className="mb-3">{item.Backend}</h2>
            <motion.h1 className="text-xl  uppercase font-bold" style={{color:colors.color}}>Database:</motion.h1>
            <h2>{item.Database}</h2>
          </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
}
