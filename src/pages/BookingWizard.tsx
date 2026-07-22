import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { classTypes } from '../mock-data/classes'
import { pricingTiers } from '../mock-data/pricing'
import ScheduleGrid from '../components/ScheduleGrid'
import Navbar from '../components/Navbar'

type BookingState = {
  step: number
  classId?: string
  day?: string
  time?: string
  name?: string
  email?: string
  phone?: string
  priceId?: string
}

const BookingWizard = () => {
  const location = useLocation()
  const [booking, setBooking] = useState<BookingState>({ step: 1 })
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (location.state) {
      setBooking(prev => ({
        ...prev,
        classId: location.state.classId,
        day: location.state.day,
        time: location.state.time,
        priceId: location.state.priceId,
        step: location.state.priceId ? 4 : (location.state.classId ? 2 : 1)
      }))
    }
  }, [location.state])

  const selectedClass = classTypes.find(c => c.id === booking.classId)

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {}
    
    if (!booking.name?.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!booking.email?.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(booking.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!booking.phone?.trim()) {
      newErrors.phone = 'Phone is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (booking.step === 3 && !validateStep3()) {
      return
    }
    setBooking(prev => ({ ...prev, step: prev.step + 1 }))
  }

  const handleBack = () => {
    setBooking(prev => ({ ...prev, step: prev.step - 1 }))
  }

  const handlePayment = async () => {
    if (!booking.priceId) {
      alert('Please select a pricing plan')
      return
    }

    try {
      const response = await fetch('/.netlify/functions/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId: booking.priceId }),
      })

      const { url } = await response.json()
      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Payment error:', error)
      alert('Payment failed. Please try again.')
    }
  }

  const steps = [
    { number: 1, title: 'Choose Class' },
    { number: 2, title: 'Select Time' },
    { number: 3, title: 'Contact Info' },
    { number: 4, title: 'Payment' },
  ]

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step) => (
              <div key={step.number} className="flex items-center">
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center font-medium
                    ${booking.step >= step.number
                      ? 'bg-brand-green text-white'
                      : 'bg-surface-warm text-text-muted'
                    }
                  `}
                >
                  {step.number}
                </div>
                <span className="ml-2 text-sm font-medium hidden sm:block">{step.title}</span>
                {step.number < 4 && (
                  <div className="w-12 h-0.5 bg-border mx-4 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Choose Class */}
        {booking.step === 1 && (
          <div>
            <h2 className="font-fraunces text-3xl font-bold text-brand-green mb-6">
              Choose Your Class
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {classTypes.map((classType) => (
                <button
                  key={classType.id}
                  onClick={() => setBooking(prev => ({ ...prev, classId: classType.id }))}
                  className={`
                    p-6 rounded-2xl border-2 text-left transition-all
                    ${booking.classId === classType.id
                      ? 'border-brand-green bg-brand-green/5'
                      : 'border-border hover:border-brand-green/50 bg-surface'
                    }
                  `}
                >
                  <h3 className="font-fraunces text-xl font-semibold text-brand-green mb-2">
                    {classType.name}
                  </h3>
                  <span className="inline-block bg-accent-clay/10 text-accent-clay px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {classType.difficulty}
                  </span>
                  <p className="text-text-muted text-sm">{classType.description}</p>
                </button>
              ))}
            </div>
            <div className="flex justify-end mt-8">
              <button
                onClick={handleNext}
                disabled={!booking.classId}
                className="bg-brand-green hover:bg-brand-green-dark disabled:bg-border disabled:text-text-muted text-white px-8 py-3 rounded-full font-medium transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Select Time */}
        {booking.step === 2 && (
          <div>
            <h2 className="font-fraunces text-3xl font-bold text-brand-green mb-6">
              Select Your Time
            </h2>
            {selectedClass && (
              <p className="text-text-muted mb-6">
                Booking: <span className="font-medium text-brand-green">{selectedClass.name}</span>
              </p>
            )}
            <ScheduleGrid filterClassId={booking.classId} />
            <div className="flex justify-between mt-8">
              <button
                onClick={handleBack}
                className="border border-border text-text-primary hover:bg-surface-warm px-8 py-3 rounded-full font-medium transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!booking.day || !booking.time}
                className="bg-brand-green hover:bg-brand-green-dark disabled:bg-border disabled:text-text-muted text-white px-8 py-3 rounded-full font-medium transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Contact Info */}
        {booking.step === 3 && (
          <div>
            <h2 className="font-fraunces text-3xl font-bold text-brand-green mb-6">
              Your Information
            </h2>
            
            <div className="bg-surface p-6 rounded-2xl mb-6">
              <p className="text-text-muted text-sm mb-4">
                <span className="font-medium text-brand-green">Class:</span> {selectedClass?.name}
              </p>
              <p className="text-text-muted text-sm">
                <span className="font-medium text-brand-green">Time:</span> {booking.day} at {booking.time}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={booking.name || ''}
                  onChange={(e) => setBooking(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-brand-green"
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-accent-clay text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={booking.email || ''}
                  onChange={(e) => setBooking(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-brand-green"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-accent-clay text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={booking.phone || ''}
                  onChange={(e) => setBooking(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-brand-green"
                  placeholder="(555) 123-4567"
                />
                {errors.phone && <p className="text-accent-clay text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={handleBack}
                className="border border-border text-text-primary hover:bg-surface-warm px-8 py-3 rounded-full font-medium transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="bg-brand-green hover:bg-brand-green-dark text-white px-8 py-3 rounded-full font-medium transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Payment */}
        {booking.step === 4 && (
          <div>
            <h2 className="font-fraunces text-3xl font-bold text-brand-green mb-6">
              Choose Your Plan
            </h2>
            
            <div className="bg-surface p-6 rounded-2xl mb-6">
              <p className="text-text-muted text-sm mb-2">
                <span className="font-medium text-brand-green">Class:</span> {selectedClass?.name}
              </p>
              <p className="text-text-muted text-sm mb-2">
                <span className="font-medium text-brand-green">Time:</span> {booking.day} at {booking.time}
              </p>
              <p className="text-text-muted text-sm">
                <span className="font-medium text-brand-green">Name:</span> {booking.name}
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {pricingTiers.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setBooking(prev => ({ ...prev, priceId: tier.priceId }))}
                  className={`
                    w-full p-6 rounded-2xl border-2 text-left transition-all
                    ${booking.priceId === tier.priceId
                      ? 'border-brand-green bg-brand-green/5'
                      : 'border-border hover:border-brand-green/50 bg-surface'
                    }
                  `}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-fraunces text-xl font-semibold text-brand-green mb-1">
                        {tier.name}
                      </h3>
                      <p className="text-text-muted text-sm">{tier.description}</p>
                    </div>
                    <div className="text-2xl font-bold text-brand-green">
                      ${tier.price}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-between">
              <button
                onClick={handleBack}
                className="border border-border text-text-primary hover:bg-surface-warm px-8 py-3 rounded-full font-medium transition-colors"
              >
                Back
              </button>
              <button
                onClick={handlePayment}
                disabled={!booking.priceId}
                className="bg-accent-amber hover:bg-accent-amber/90 disabled:bg-border disabled:text-text-muted text-white px-8 py-3 rounded-full font-medium transition-colors"
              >
                Pay with Stripe
              </button>
            </div>
            
            <p className="text-center text-text-muted text-sm mt-4">
              Test mode only — no real charges will be made
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookingWizard
