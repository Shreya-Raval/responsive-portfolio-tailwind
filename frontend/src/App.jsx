import AboutMe from "./components/AboutMe"
import Client from "./components/Client"
import Contact from "./components/Contact"
import Features from "./components/Features"
import Feedback from "./components/Feedback"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Feed from "./components/JoinFeed"
import MainSection from "./components/MainSection"
import Pricing from "./components/Pricing"
import Skills from "./components/Skills"

function App() {
  
  return (
    <>
      <Header />
      <MainSection />
      <AboutMe/>
      <Features/>
      <Skills />
      <Pricing />
      <Client />
      <Feedback />
      <Contact />
      <Feed />
      <Footer/> 
 
    </>
  )
}

export default App
