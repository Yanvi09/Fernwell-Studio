import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()
  const [booking, setBooking] = useState<BookingState>({ step: 1 })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [paymentProcessing, setPaymentProcessing] = useState(false)
  const [paymentError, setPaymentError] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')

  useEffect(() => {
    if (location.state) {
      setBooking(prev => ({
        ...prev,
        classId: location.state.classId,
        day: location.state.day,
        time: location.state.time,
        priceId: location.state.priceId,
        step: location.state.priceId ? 4 : (location.state.classId && location.state.day && location.state.time ? 3 : (location.state.classId ? 2 : 1))
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

  const handlePayment = () => {
    if (!booking.priceId) {
      alert('Please select a pricing plan')
      return
    }

    if (!cardNumber || !expiry || !cvc) {
      setPaymentError('Please fill in all card details')
      return
    }

    setPaymentProcessing(true)
    setPaymentError('')

    setTimeout(() => {
      const cleanedCardNumber = cardNumber.replace(/\s/g, '')
      if (cleanedCardNumber === '4242424242424242') {
        // Success
        const selectedPlan = pricingTiers.find(p => p.priceId === booking.priceId)
        navigate('/book/confirmation', { 
          state: { 
            className: selectedClass?.name,
            day: booking.day,
            time: booking.time,
            planName: selectedPlan?.name
          } 
        })
      } else {
        // Failure
        setPaymentProcessing(false)
        setPaymentError('Your card was declined. Try the test card: 4242 4242 4242 4242')
      }
    }, 1500)
  }

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '').replace(/\D/g, '')
    const formatted = cleaned.replace(/(\d{4})(?=\d)/g, '$1 ')
    return formatted.substring(0, 19)
  }

  const formatExpiry = (value: string) => {
    const cleaned = value.replace(/\D/g, '')
    if (cleaned.length >= 2) {
      return cleaned.substring(0, 2) + '/' + cleaned.substring(2, 4)
    }
    return cleaned.substring(0, 2)
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

            {booking.priceId && (
              <div className="bg-surface p-6 rounded-2xl mb-6">
                <h3 className="font-fraunces text-xl font-semibold text-brand-green mb-4">Payment Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-brand-green"
                      maxLength={19}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Expiry (MM/YY)
                      </label>
                      <input
                        type="text"
                        value={expiry}
                        onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-brand-green"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        CVC
                      </label>
                      <input
                        type="text"
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').substring(0, 3))}
                        placeholder="123"
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-brand-green"
                        maxLength={3}
                      />
                    </div>
                  </div>
                </div>

                {paymentError && (
                  <div className="mt-4 p-3 bg-accent-clay/10 border border-accent-clay/30 rounded-lg">
                    <p className="text-sm text-accent-clay">{paymentError}</p>
                  </div>
                )}

                <p className="text-center text-text-muted text-xs mt-4">
                  Test mode — use card 4242 4242 4242 4242
                </p>
              </div>
            )}

            <div className="flex justify-between">
              <button
                onClick={handleBack}
                className="border border-border text-text-primary hover:bg-surface-warm px-8 py-3 rounded-full font-medium transition-colors"
              >
                Back
              </button>
              <button
                onClick={handlePayment}
                disabled={!booking.priceId || paymentProcessing}
                className="bg-accent-amber hover:bg-accent-amber/90 disabled:bg-border disabled:text-text-muted text-white px-8 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
              >
                {paymentProcessing ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing payment...
                  </>
                ) : (
                  `Pay $${pricingTiers.find(p => p.priceId === booking.priceId)?.price || '0'}`
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookingWizard
