import './App.css'
import About from './Components/About'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Popular from './Components/Popular'
import Services from './Components/Services'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services/>
      <About/>
      <Popular/>
    </>
  )
}

export default App
