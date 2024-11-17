import imageProject from "../projectImage/1722129107172.jpg"
import imageChat from "../projectImage/1727541112628.jpg"
const DummyProjects=[
    {title:"Ecommerce Web Site",
    image:imageProject,
     Description:"Welcome to my Full-Stack Ecommerce Website – the ultimate online shopping destination! With powerful admin tools to effortlessly manage products, categories, orders, and user accounts, this platform ensures smooth operations from the backend. For shoppers, enjoy a seamless and intuitive experience: browse an extensive product catalog, add items to your cart, read real-time reviews, and make secure purchases in just a few clicks. Personalize your shopping journey with easy profile management and track your orders with ease. Whether you're an admin or a customer, this platform offers an exceptional, hassle-free shopping experience designed for convenience and reliability!",
     Frontend: "React, Tailwind CSS, Redux, React Router, and other libraries.",
     Backend: "Node.js, Express.js.",
     Database: "MySQL."
    },
    {
        title:"chat application",
        image:imageChat,
         Description:"A fully immersive chat application designed for effortless communication! With secure sign-ups, real-time messaging, and the ability to search for and connect with friends, it offers a dynamic and interactive experience. Share images, make video calls with complete control over the camera and microphone, and personalize your profile. Whether for casual chats or virtual face-to-face conversations, this app ensures a seamless and secure communication experience. Perfect for those seeking both functionality and a user-friendly interface!",
         Frontend: "React.js, Tailwind CSS, Redux ⚛️, ensuring a smooth, responsive user interface with a focus on performance and scalability.",
         Backend: "Node.js, Express.js 🛠️, providing a robust and flexible server-side infrastructure,Real-time Communication: Socket.IO, WebRTC ⚡, enabling instant messaging and video call functionality.",
         Database: "MongoDB 🗄️, a NoSQL database that allows for efficient and scalable data management."
        },  
    
]
export default function Project(){
    return <section style={{color:"white"}}>
       <h1 className=" text-5xl font-bold uppercase text-center mb-5">Featured Projects</h1>
       {
        DummyProjects.map((item)=>{
            return <div className="flex pb-28 items-center">
                   <img src={item.image} className="w-2/4 h-60 rounded-2xl"/>
                   <div className="flex flex-col w-1/2 pl-5">
                    <h1 className=" text-2xl text-color_1 uppercase font-normal">{item.title}</h1>
                    <p className=" text-sm text-justify">{item.Description}</p>
                    <h1 className=" text-2xl text-color_1 uppercase font-normal">FrontEnd:</h1>
                    <h2>{item.Frontend}</h2>
                    <h1 className=" text-2xl text-color_1 uppercase font-normal">Backend</h1>
                    <h2>{item.Backend}</h2>
                    <h1 className=" text-2xl text-color_1 uppercase font-normal">DataBase:</h1>
                    <h2>{item.Database}</h2>
                   </div>   
            </div>
        })
       }
       
    </section>
}