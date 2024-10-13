import { useState } from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import TechSkills from './Components/TechSkills'
import ProjectsSection from './Components/ProjectsSection'
import ExperienceSection from './Components/ExperienceSection'
import ContactFooter from './Components/ContactFooter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-w-screen max-w-full min-h-screen bg-cover bg-center overflow-hidden' style={{ backgroundImage: `url('/assets/ProjectsBG.jpg')` }}>
      <Navbar />
      <Hero />
      <TechSkills />
      <ProjectsSection />
      <ExperienceSection />
      <ContactFooter />
    </div>


  )
}

export default App
