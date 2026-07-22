import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: "Jennifer M.",
    text: "Fernwell has completely transformed my relationship with movement. The instructors are incredibly knowledgeable and the community is so welcoming.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
  },
  {
    id: 2,
    name: "David K.",
    text: "I was skeptical about pilates at first, but Marcus's classes have helped me build strength I never knew I had. My back pain has virtually disappeared.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
  },
  {
    id: 3,
    name: "Lisa T.",
    text: "The restorative classes are exactly what I needed after my work day. Emma creates such a peaceful environment - I leave feeling completely reset.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
  },
  {
    id: 4,
    name: "Michael R.",
    text: "Best yoga studio I've been to in the city. The attention to detail in the space and the quality of instruction is unmatched.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
  },
  {
    id: 5,
    name: "Amanda S.",
    text: "I love the variety of classes and the flexible scheduling. The 5-class pack is perfect for my busy schedule.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80"
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-surface-warm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-fraunces text-4xl md:text-5xl font-bold text-brand-green text-center mb-12">
          What Our Students Say
        </h2>
        
        <div className="relative">
          <div className="bg-surface rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img 
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <p className="text-lg text-text-primary mb-4 italic">
                  "{testimonials[currentIndex].text}"
                </p>
                <p className="font-medium text-brand-green">
                  {testimonials[currentIndex].name}
                </p>
              </div>
            </div>
          </div>
          
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-surface border border-border rounded-full p-3 hover:bg-brand-green hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-surface border border-border rounded-full p-3 hover:bg-brand-green hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-brand-green' : 'bg-border'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
