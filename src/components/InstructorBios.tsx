import { useState } from 'react'

const instructors = [
  {
    id: 1,
    name: "Sarah Chen",
    specialty: "Vinyasa & Flow",
    bio: "Former dancer with 15 years of teaching experience. Sarah believes in the transformative power of mindful movement.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80"
  },
  {
    id: 2,
    name: "Marcus Williams",
    specialty: "Pilates & Strength",
    bio: "Certified Pilates instructor focused on functional movement and building sustainable strength for everyday life.",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&q=80"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    specialty: "Restorative & Yin",
    bio: "Specializes in nervous system regulation and restorative practices. Emma creates safe, nurturing spaces for deep relaxation.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"
  }
]

const InstructorBios = () => {
  const [openInstructor, setOpenInstructor] = useState<typeof instructors[0] | null>(null)
  const [messageSent, setMessageSent] = useState(false)

  return (
    <section id="instructors" className="py-20 bg-surface-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-fraunces text-4xl md:text-5xl font-bold text-brand-green text-center mb-4">
          Meet Our Instructors
        </h2>
        <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
          Experienced teachers dedicated to your growth and wellbeing
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div 
              key={instructor.id} 
              onClick={() => { setOpenInstructor(instructor); setMessageSent(false); }}
              className="bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="aspect-square bg-gray-200">
                <img 
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-fraunces text-2xl font-semibold text-brand-green mb-1">
                  {instructor.name}
                </h3>
                <p className="text-accent-amber font-medium mb-3">{instructor.specialty}</p>
                <p className="text-text-muted text-sm line-clamp-2">
                  {instructor.bio}
                </p>
                <p className="text-brand-green text-sm mt-2 font-medium">
                  Click to contact
                </p>
              </div>
            </div>
          ))}
        </div>

        {openInstructor && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setOpenInstructor(null)}>
            <div className="bg-surface rounded-xl p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
              <h3 className="font-fraunces text-xl text-brand-green mb-2">{openInstructor.name}</h3>
              <p className="text-sm text-accent-amber mb-3">{openInstructor.specialty}</p>
              <p className="text-sm text-text-muted mb-4">{openInstructor.bio}</p>

              {!messageSent ? (
                <>
                  <textarea
                    placeholder={`Ask ${openInstructor.name} a question...`}
                    className="w-full p-3 border border-border rounded-lg text-sm mb-3 focus:outline-none focus:border-brand-green"
                    rows={3}
                  />
                  <button
                    onClick={() => setMessageSent(true)}
                    className="px-4 py-2 bg-accent-amber text-white rounded-lg text-sm hover:bg-accent-amber/90 transition-colors"
                  >
                    Send message
                  </button>
                </>
              ) : (
                <p className="text-sm text-brand-green">
                  Message sent! {openInstructor.name.split(' ')[0]} typically replies within 24 hours.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default InstructorBios
