import './App.css'
import Background from './components/Background'
import Navbar from './components/Navbar'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import SocialSidebar from './components/SocialSidebar'

export default function App() {
  return (
    <div className="app">
      <Background />

      <div className="content">
        <Navbar />

        <main>
          <About />
          <TechStack />
          <Projects />
          <Contact />
        </main>

        <SocialSidebar />
      </div>
    </div>
  )
}
