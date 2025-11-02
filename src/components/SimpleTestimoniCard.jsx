import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'

const SimpleTestimoniCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Data testimoni
  const testimonials = [
    {
      id: 1,
      image: '/images/Portofolio.png',
      name: 'Ahmad Rizki',
      project: 'Website Portofolio',
      message: 'Pelayanan mantap! Portofolio saya jadi lebih profesional dan menarik.',
      rating: 5
    },
    {
      id: 2,
      image: '/images/IPYNB.png', 
      name: 'Sari Indah',
      project: 'Tugas Laporan',
      message: 'Hasil tugas laporan sangat memuaskan. Terima kasih banyak!',
      rating: 5
    },
    {
      id: 3,
      image: '/images/KaryaTulis.png',
      name: 'Budi Santoso',
      project: 'Karya Tulis Ilmiah',
      message: 'Makalahnya top! Strukturnya jelas dan mudah dipahami.',
      rating: 5
    },
    {
      id: 4,
      image: '/images/PiramidaPenduduk.png',
      name: 'Maya Sari',
      project: 'Data Visualization',
      message: 'Visualisasi datanya keren dan informatif. Sangat membantu!',
      rating: 5
    },
  ]

  // Auto slide
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        )
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [testimonials.length, isPaused])

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Main Card */}
        <div className="glass rounded-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid md:grid-cols-2 gap-6 p-6 sm:p-8"
            >
              {/* Image */}
              <div className="rounded-xl overflow-hidden bg-dark-700 h-64 md:h-auto">
                <img
                  src={testimonials[currentIndex].image}
                  alt={`Testimoni ${testimonials[currentIndex].name}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x300/1e3a8a/ffffff?text=${testimonials[currentIndex].project}`
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center space-y-4">
                {/* Rating Stars */}
                <div className="flex space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Message */}
                <p className="text-gray-300 text-base sm:text-lg italic leading-relaxed">
                  "{testimonials[currentIndex].message}"
                </p>

                {/* Client Info */}
                <div className="border-t border-primary-500/20 pt-4">
                  <p className="font-display font-semibold text-lg text-white">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-primary-400 text-sm">
                    {testimonials[currentIndex].project}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-primary-500' 
                  : 'w-2 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Play/Pause Indicator */}
        <div className="flex justify-center mt-4">
          <div className={`flex items-center space-x-2 text-xs ${isPaused ? 'text-yellow-400' : 'text-green-400'}`}>
            <div className={`w-2 h-2 rounded-full ${isPaused ? 'bg-yellow-400' : 'bg-green-400 animate-pulse'}`}></div>
            <span>{isPaused ? 'Paused' : 'Auto Play'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimpleTestimoniCard
