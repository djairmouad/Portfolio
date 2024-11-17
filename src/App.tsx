
import './index.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Project from './Components/Projects'
function App() {
  return (
  <div className=' relative w-full h-full bg-customGray px-4 flex flex-col gap-24'>
      <Header/>
      <Home name="Djair Mouad" title="Full-Stack Developer" 
      gitHup="https://github.com/djairmouad"
      linkdin="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
      />
      <Skills/>
      <Project/>
  </div>
  )
}

export default App
