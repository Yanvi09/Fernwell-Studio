import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ClassTypes from '../components/ClassTypes'
import ScheduleGrid from '../components/ScheduleGrid'
import InstructorBios from '../components/InstructorBios'
import PricingTiers from '../components/PricingTiers'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ClassTypes />
      <ScheduleGrid />
      <InstructorBios />
      <PricingTiers />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default LandingPage
