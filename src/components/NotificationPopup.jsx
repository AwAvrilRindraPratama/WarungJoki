import React, { useState, useEffect } from 'react' 
import { motion, AnimatePresence } from 'framer-motion'
import { Bell, X } from 'lucide-react'

const NotificationPopup = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  // Data testimoni 
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

  // Auto rotate testimoni
  useEffect(() => {
    if (!isMinimized) {
      const interval = setInterval(() => {
        setIsVisible(true)
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        )
        
        setTimeout(() => {
          setIsVisible(false)
        }, 4000)
      }, 6000)

      return () => clearInterval(interval)
    }
  }, [testimonials.length, isMinimized])

  // Show first notification
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      setTimeout(() => {
        setIsVisible(false)
      }, 4000)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Notification Bell - Always Visible */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsMinimized(!isMinimized)}
        className="w-12 h-12 bg-gradient-blue rounded-full flex items-center justify-center shadow-lg cursor-pointer relative mb-3"
      >
        <Bell className={`w-6 h-6 text-white ${isVisible ? 'animate-pulse' : ''}`} />
        
        {/* Notification Badge */}
        {isVisible && !isMinimized && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-dark-950"
          >
            <span className="text-white text-xs font-bold">!</span>
          </motion.div>
        )}
      </motion.div>

      {/* Notification Card */}
      <AnimatePresence>
        {isVisible && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="glass rounded-xl p-4 shadow-2xl max-w-sm w-80 relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 w-6 h-6 bg-dark-800/50 hover:bg-dark-700 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>

            {/* Content */}
            <div className="flex items-start space-x-3">
              {/* Avatar */}
              <motion.div
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
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
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
