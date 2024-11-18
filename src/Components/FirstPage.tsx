import { useContext } from "react";
import ContextProvider, { ColorContext } from "../store/ColorContext";
import Contact from "./Contact";
import Header from "./Header";
import Home from "./Home";
import Project from "./Projects";
import Skills from "./Skills";

export default function FirstPage(){
    return <div className=' relative w-full h-full bg-customGray px-4 flex flex-col  '>
       
    <Header/>
    <Home name="Djair Mouad" title="Full-Stack Developer" 
    gitHup="https://github.com/djairmouad"
    linkdin="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
    />
    <Skills/>
    <Project/>
    <Contact/>
</div>

}