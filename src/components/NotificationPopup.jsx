import React, { useState } from 'react' 
import { motion, AnimatePresence } from 'framer-motion'
import { Bell, X, ChevronLeft, ChevronRight } from 'lucide-react'

const NotificationPopup = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  // Data testimoni dummy
  const testimonials = [
    {
      id: 1,
      name: 'Rina A.',
      message: 'Terima kasih! Tugas saya selesai tepat waktu.',
      avatar: 'RA',
      timestamp: 'Baru saja'
    },
    {
      id: 2,
      name: 'Budi S.',
      message: 'Prosesnya cepat banget, sangat membantu!',
      avatar: 'BS',
      timestamp: '3 jam lalu'
    },
    {
      id: 3,
      name: 'Andi P.',
      message: 'Website portofolionya keren, terima kasih!',
      avatar: 'AP',
      timestamp: '8 jam lalu'
    },
    {
      id: 4,
      name: 'Sari K.',
      message: 'Laporannya rapi dan lengkap. Recommended!',
      avatar: 'SK',
      timestamp: '1 hari lalu'
    },
    {
      id: 5,
      name: 'Dewi M.',
      message: 'Hasilnya melebihi ekspektasi, profesional!',
      avatar: 'DM',
      timestamp: '1 hari lalu'
    },
    {
      id: 6,
      name: 'Fajar R.',
      message: 'Komunikasi lancar, hasil memuaskan.',
      avatar: 'FR',
      timestamp: '2 hari lalu'
    }
  ]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const toggleNotification = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Notification Bell Button - Always Visible */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleNotification}
        className="w-12 h-12 bg-gradient-blue rounded-full flex items-center justify-center shadow-lg cursor-pointer relative"
        title="Lihat Testimoni"
      >
        <Bell className="w-6 h-6 text-white" />
        
        {/* Badge count */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-dark-950"
        >
          <span className="text-white text-xs font-bold">{testimonials.length}</span>
        </motion.div>
      </motion.button>

      {/* Notification Card - Manual Toggle */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="glass rounded-xl p-4 shadow-2xl max-w-sm w-80 relative mb-3"
          >
            {/* Close Button */}
            <button
              onClick={toggleNotification}
              className="absolute top-2 right-2 w-6 h-6 bg-dark-800/50 hover:bg-dark-700 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>

            {/* Content */}
            <div className="flex items-start space-x-3 mb-4">
              {/* Avatar */}
              <motion.div
                key={currentIndex}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
                className="w-10 h-10 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg"
              >
                {testimonials[currentIndex].avatar}
              </motion.div>
              
              {/* Message */}
              <div className="flex-1 min-w-0 pr-4">
                <motion.div
                  key={`content-${currentIndex}`}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="font-semibold text-white text-sm mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {testimonials[currentIndex].message}
                  </p>
                </motion.div>
                
                {/* Timestamp */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-500 text-xs mt-2"
                >
                  {testimonials[currentIndex].timestamp}
                </motion.p>
              </div>
            </div>

            {/* Navigation & Counter */}
            <div className="flex items-center justify-between border-t border-primary-500/20 pt-3">
              <button
                onClick={handlePrev}
                className="p-1.5 hover:bg-primary-600/20 rounded-lg transition-colors"
                title="Previous"
              >
                <ChevronLeft className="w-4 h-4 text-primary-400" />
              </button>

              <div className="text-xs text-gray-400">
                {currentIndex + 1} / {testimonials.length}
              </div>

              <button
                onClick={handleNext}
                className="p-1.5 hover:bg-primary-600/20 rounded-lg transition-colors"
                title="Next"
              >
                <ChevronRight className="w-4 h-4 text-primary-400" />
              </button>
            </div>

            {/* Success Checkmark */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-white text-xs">✓</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default NotificationPopup
