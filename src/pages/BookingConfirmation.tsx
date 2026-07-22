import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BookingConfirmation = () => {
  const location = useLocation()
  const bookingDetails = location.state || {}

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="bg-surface rounded-2xl p-8 md:p-12 text-center shadow-sm">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="font-fraunces text-4xl font-bold text-brand-green mb-4">
            Booking Confirmed!
          </h1>
          <p className="text-text-muted mb-8">
            Thank you for booking with Fernwell Studio. We can't wait to see you in class.
          </p>
          
          {/* Booking Summary */}
          <div className="bg-surface-warm rounded-xl p-6 text-left mb-8">
            <h2 className="font-fraunces text-xl font-semibold text-brand-green mb-4">
              Booking Summary
            </h2>
            <div className="space-y-2 text-text-muted">
              <p><span className="font-medium text-brand-green">Class:</span> {bookingDetails.className || 'Yoga Class'}</p>
              <p><span className="font-medium text-brand-green">Date:</span> {bookingDetails.day || 'Upcoming'}</p>
              <p><span className="font-medium text-brand-green">Time:</span> {bookingDetails.time || 'TBD'}</p>
              <p><span className="font-medium text-brand-green">Plan:</span> {bookingDetails.planName || 'Drop-in'}</p>
            </div>
          </div>
          
          {/* Add to Calendar Visual */}
          <button className="inline-flex items-center gap-2 bg-surface border border-border hover:bg-surface-warm px-6 py-3 rounded-full font-medium transition-colors text-brand-green">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Add to Calendar
          </button>
          
          <div className="mt-8 pt-8 border-t border-border">
            <a 
              href="/"
              className="text-brand-green hover:text-brand-green-dark font-medium"
            >
              ← Return to Home
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default BookingConfirmation
