import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image with grain overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <img 
          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1920&q=80" 
          alt="Yoga studio interior" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-fraunces text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Movement That Nurtures
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
          A boutique yoga and pilates studio where every breath is intentional
        </p>
        <Link
          to="/book"
          className="inline-block bg-accent-amber hover:bg-accent-amber/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors"
        >
          Begin Your Journey
        </Link>
      </div>
      
      {/* Organic blob divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 120C0 120 240 80 480 60C720 40 960 80 1200 70C1320 65 1440 120 1440 120V120H0Z" 
            fill="#F3EEE3"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
