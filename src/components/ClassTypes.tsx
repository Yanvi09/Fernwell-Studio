import { classTypes } from '../mock-data/classes'

const ClassTypes = () => {
  return (
    <section id="classes" className="py-20 bg-surface-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-fraunces text-4xl md:text-5xl font-bold text-brand-green text-center mb-4">
          Our Classes
        </h2>
        <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
          Each class is thoughtfully designed to meet you where you are
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {classTypes.map((classType) => (
            <div key={classType.id} className="bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] bg-gray-200">
                <img 
                  src={`https://images.unsplash.com/photo-${classType.id === 'vinyasa' ? '1599447426368-99df35d13c9c' : classType.id === 'restorative' ? '1599901860904-5e913f927a8a' : '1600783607026-524886390d75'}?w=600&q=80`}
                  alt={classType.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-fraunces text-2xl font-semibold text-brand-green">
                    {classType.name}
                  </h3>
                  <span className="bg-accent-clay/10 text-accent-clay px-3 py-1 rounded-full text-sm font-medium">
                    {classType.difficulty}
                  </span>
                </div>
                <p className="text-text-muted">
                  {classType.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClassTypes
