import './App.css'
import About from './Components/About'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Popular from './Components/Popular'
import Review from './Components/Review'
import Services from './Components/Services'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services/>
      <About/>
      <Popular/>
      <Review/>
      <Footer/>
    </>
  )
}

export default App
