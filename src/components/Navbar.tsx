import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-fraunces text-2xl font-semibold text-brand-green">
            Fernwell
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#classes" className="text-text-primary hover:text-brand-green transition-colors">
              Classes
            </Link>
            <Link to="/#schedule" className="text-text-primary hover:text-brand-green transition-colors">
              Schedule
            </Link>
            <Link to="/#instructors" className="text-text-primary hover:text-brand-green transition-colors">
              Instructors
            </Link>
            <Link to="/#pricing" className="text-text-primary hover:text-brand-green transition-colors">
              Pricing
            </Link>
          </div>
          
          <Link
            to="/book"
            className="bg-accent-amber hover:bg-accent-amber/90 text-white px-6 py-2 rounded-full font-medium transition-colors"
          >
            Book a class
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
