import myImage from "../assets/photo_2024-11-15_10-09-10.jpg"

export default function Home({name,title,gitHup,linkdin}){
    return <section className="flex justify-between items-center">
        <div className="w-2/5 h-full gap-4 flex-col font-bold content-center" style={{"color":"white"}}>
        <h1 className=" text-5xl my-2 ">Hi 👋 My name is</h1>
        <h1 className=" text-6xl my-2" style={{"color":"#ffc96b"}}>{name}</h1>
        <h2 className=" text-4xl my-2 mb-5">{title}</h2>
        <ul className="flex justify-between my-2 w-4/5">
        <li className=" border border-color_1 px-2 py-1">Download Cv</li>
        <li className=" border border-color_1 px-2 py-1 ">
            <a href={gitHup}>GitHup</a>
        </li>
        <li className=" border border-color_1 px-2 py-1">
            <a href={linkdin}>Linkedin</a>
         </li>
        </ul>
        </div>
        <image className=" w-2/5">
            <img  src={myImage} className=" w-80  h-80 outline outline-offset-8  outline-accent  rounded-full"
            style={{"outlineColor":"#ffc96b"}}/>
        </image>
    </section>
}