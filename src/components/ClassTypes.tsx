import { useNavigate } from 'react-router-dom'
import { classTypes } from '../mock-data/classes'

const ClassTypes = () => {
  const navigate = useNavigate()

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
            <div
              key={classType.id}
              onClick={() => navigate('/book', { state: { classId: classType.id } })}
              className="cursor-pointer bg-surface rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/${classType.id === 'vinyasa' ? 'vinyasa' : classType.id === 'restorative' ? 'restorative' : 'pilates'}/800/600`}
                  alt={classType.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
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
