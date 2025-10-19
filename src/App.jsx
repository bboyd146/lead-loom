import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import DemoVideo from './components/DemoVideo'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import AboutPage from './pages/About'

function App() {

  return (
    <div className="bg-white text-gray-900">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <DemoVideo />
              <Pricing />
              <Testimonials />
              <CTA />
              <Footer />
            </>
          } />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App