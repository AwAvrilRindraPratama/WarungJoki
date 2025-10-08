import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SimpleTestimoniCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Data testimoni sederhana
  const testimonials = [
    {
      id: 1,
      image: '/images/Portofolio.png',
      name: 'Ahmad Rizki',
      project: 'Website Portofolio',
      message: 'Pelayanan mantapp! portofolio saya jadi lebih profesional',
      rating: 5
    },
    {
      id: 2,
      image: '/images/IPYNB.png', 
      name: 'Sari Indah',
      project: 'Tugas Laporan',
      message: 'Hasil tugas laporan sangat memuaskan Terima kasihh',
      rating: 5
    },
    {
      id: 3,
      image: '/images/KaryaTulis.png',
      name: 'Budi Santoso',
      project: 'KTI',
      message: 'Makalahnya Debest, strukturnya jelas, sangat membantu saya',
      rating: 5
    },
    {
      id: 4,
      image: '/images/PiramidaPenduduk.png',
      name: 'Maya Sari',
      project: 'Tugas Tulis',
      message: 'Tulisannya rapi dan informatif keren banget bisa bantu aku memahami topik',
      rating: 5
    },
    
  ]

  // Auto slide setiap 3 detik (lebih cepat)
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        )
      }, 5000) // Dipercepat menjadi 3 detik

      return () => clearInterval(interval)
    }
  }, [testimonials.length, isPaused])

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Container Card - Portrait Format */}
      <div 
        className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Header */}
        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold text-white font-inter mb-2 text-shadow-subtle">Testimoni Klien</h3>
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${isPaused ? 'bg-yellow-400' : 'bg-green-400 animate-pulse'}`}></div>
              <span className={`text-xs font-poppins text-shadow-sm ${isPaused ? 'text-yellow-400' : 'text-green-400'}`}>
                {isPaused ? 'Pause' : 'Auto Play'}
              </span>
            </div>
          </div>
        </div>

        {/* Testimoni Cards dengan Animasi - Portrait Layout */}
        <div className="relative h-[500px] overflow-hidden rounded-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: 400, opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: -400, opacity: 0, scale: 0.9 }}
              transition={{ 
                duration: 0.7, 
                ease: [0.23, 1, 0.32, 1],
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="absolute inset-0 bg-gradient-to-br from-slate-800/70 to-slate-900/80 rounded-xl p-6 flex flex-col backdrop-blur-sm border border-white/10"
            >
              {/* Gambar Testimoni - Portrait Style */}
              <div className="mb-6">
                <div className="w-full h-64 bg-slate-700 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={`Testimoni ${testimonials[currentIndex].name}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x400/1e3a8a/ffffff?text=Testimoni+${testimonials[currentIndex].name}`
                    }}
                  />
                </div>
              </div>

              {/* Info Testimoni */}
              <div className="text-center space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  {/* Rating Stars */}
                  <div className="flex justify-center space-x-1 mb-3">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">⭐</span>
                    ))}
                  </div>

                  {/* Message */}
                  <p className="text-white font-poppins text-sm leading-relaxed italic mb-4 text-shadow-subtle">
                    "{testimonials[currentIndex].message}"
                  </p>
                </div>

                {/* Client Info */}
                <div className="border-t border-white/20 pt-4">
                  <p className="text-blue-200 text-sm font-inter text-center font-medium text-shadow-sm">
                    {testimonials[currentIndex].project}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicators tanpa Progress Bar dan Dots */}
        <div className="mt-4">
          {/* Dots section removed */}
        </div>

        {/* Navigation Arrows - Repositioned for Portrait */}
        <div className="absolute top-1/2 -translate-y-1/2 left-3 right-3 flex justify-between pointer-events-none">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}
            className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white backdrop-blur-sm pointer-events-auto transition-colors text-sm"
          >
            ←
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}
            className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white backdrop-blur-sm pointer-events-auto transition-colors text-sm"
          >
            →
          </motion.button>
        </div>
      </div>

      {/* Keterangan */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-gray-300 text-xs text-center mt-4 font-poppins text-shadow-light"
      >
        Testimoni dari klien yang telah menggunakan jasa kami
      </motion.p>
    </div>
  )
}

export default SimpleTestimoniCard