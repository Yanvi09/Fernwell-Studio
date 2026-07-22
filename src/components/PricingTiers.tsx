import { pricingTiers } from '../mock-data/pricing'
import { useNavigate } from 'react-router-dom'

const PricingTiers = () => {
  const navigate = useNavigate()

  const handleChoosePlan = (priceId: string) => {
    navigate('/book', { state: { priceId } })
  }

  return (
    <section id="pricing" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-fraunces text-4xl md:text-5xl font-bold text-brand-green text-center mb-4">
          Pricing Options
        </h2>
        <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
          Flexible plans to support your practice
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div 
              key={tier.id} 
              className="bg-surface-warm rounded-2xl p-8 border border-border hover:border-brand-green/30 transition-colors"
            >
              <h3 className="font-fraunces text-2xl font-semibold text-brand-green mb-2">
                {tier.name}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-brand-green">${tier.price}</span>
              </div>
              <p className="text-text-muted mb-6">{tier.description}</p>
              <button
                onClick={() => handleChoosePlan(tier.priceId)}
                className="w-full bg-brand-green hover:bg-brand-green-dark text-white py-3 rounded-full font-medium transition-colors"
              >
                Choose plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingTiers
