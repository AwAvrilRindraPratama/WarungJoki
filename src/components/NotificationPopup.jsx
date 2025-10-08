import React, { useState, useEffect } from 'react' 
import { motion, AnimatePresence } from 'framer-motion'

const NotificationPopup = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Data testimoni baru dengan penambahan timestamp
  const testimonials = [
    {
      id: 1,
      name: 'Rina A.',
      message: 'Terima kasih banyak min! Tugas saya jadi cepat selesai, harganya juga murah banget. Sangat membantu!',
      avatar: 'RA',
      timestamp: 'Baru saja'
    },
    {
      id: 2,
      name: 'Budi S.',
      message: 'Prosesnya cepet banget, gak nyangka bisa secepat ini. Cocok buat yang butuh dadakan. Penyelamat!',
      avatar: 'BS',
      timestamp: '3 jam lalu'
    },
    {
      id: 3,
      name: 'Andi P.',
      message: 'Mantap! Website portofolionya berfungsi lancar dan tampilannya keren. Sesuai sama yang saya harapkan.',
      avatar: 'AP',
      timestamp: '8 jam lalu'
    },
    {
      id: 4,
      name: 'Sari K.',
      message: 'Laporannya rapi dan isinya lengkap. Langsung aman dan siap buat dikumpulkan. Terima kasih kak!',
      avatar: 'SK',
      timestamp: '1 hari lalu'
    },
    {
      id: 5,
      name: 'Dewi M.',
      message: 'Awalnya ragu, tapi hasilnya ternyata di luar ekspektasi. Kerjanya profesional banget, recommended!',
      avatar: 'DM',
      timestamp: '1 hari lalu'
    },
    {
      id: 6,
      name: 'Fajar R.',
      message: 'Komunikasinya lancar dan revisinya cepat. Hasil akhirnya sangat memuaskan. Pasti bakal order lagi di sini.',
      avatar: 'FR',
      timestamp: '2 hari lalu'
    },
    {
      id: 7,
      name: 'Putri L.',
      message: 'Kualitasnya oke punya dengan harga mahasiswa. Bener-bener solusi buat tugas yang numpuk. Makasih!',
      avatar: 'PL',
      timestamp: 'Baru saja'
    },
    {
      id: 8,
      name: 'Agus H.',
      message: 'Pengerjaannya detail, bahkan bagian-bagian kecil yang saya minta juga diperhatikan. Hasilnya jadi sempurna.',
      avatar: 'AH',
      timestamp: '5 jam lalu'
    },
    {
      id: 9,
      name: 'Citra W.',
      message: 'Penjelasannya mudah dimengerti, jadi saya gak cuma terima beres tapi juga jadi lebih paham. Keren!',
      avatar: 'CW',
      timestamp: '2 hari lalu'
    },
    {
      id: 10,
      name: 'Rian D.',
      message: 'Pekerjaan selesai lebih cepat dari perkiraan. Waktu saya jadi lebih hemat. Sangat bisa diandalkan!',
      avatar: 'RD',
      timestamp: '1 hari lalu'
    },
    {
      id: 11,
      name: 'Mega N.',
      message: 'Makalahnya dapat nilai bagus dari dosen. Referensi dan formatnya pas banget. Terima kasih bantuannya!',
      avatar: 'MN',
      timestamp: 'Baru saja'
    },
    {
      id: 12,
      name: 'Joko P.',
      message: 'Sistemnya berjalan tanpa error sama sekali. Codingannya rapi dan terstruktur. Profesional!',
      avatar: 'JP',
      timestamp: '3 hari lalu'
    }
  ]

  // Auto rotate testimoni setiap 5 detik (lebih lambat)
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(true)
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
      
      // Hide notification after 3 seconds (lebih lama untuk dibaca)
      setTimeout(() => {
        setIsVisible(false)
      }, 3000)
    }, 5000) // Diperlambat menjadi 5 detik

    return () => clearInterval(interval)
  }, [testimonials.length])

  // Show first notification after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      setTimeout(() => {
        setIsVisible(false)
      }, 3000) // Konsisten dengan timeout di atas
    }, 2000) // Delay awal sedikit lebih lama

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Notification Bell Icon (Always Visible) - Di pojok */}
      <motion.div
        animate={{ 
          scale: isVisible ? [1, 1.2, 1] : 1,
          rotate: isVisible ? [0, 10, -10, 0] : 0
        }}
        transition={{ duration: 0.5 }}
        className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer relative"
      >
        <span className="text-white text-sm">🔔</span>
        
        {/* Notification Badge */}
        <motion.div
          animate={{ scale: isVisible ? [1, 1.3, 1] : 1 }}
          className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center"
        >
          <span className="text-white text-xs font-bold">!</span>
        </motion.div>
      </motion.div>

      {/* Speech Bubble - Muncul di bawah lonceng */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: -20 }}
            transition={{ 
              type: "spring",
              stiffness: 400,
              damping: 25,
              duration: 0.4
            }}
            className="absolute top-12 right-0 max-w-sm w-80"
          >
            {/* Speech Bubble Container - Ukuran lebih panjang */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-2xl border border-white/20 relative">
              {/* Speech Bubble Tail - Mengarah ke atas (ke lonceng) */}
              <div className="absolute -top-2 right-3 w-3 h-3 bg-white/95 rotate-45 border-l border-t border-white/20"></div>
              
              {/* Content - Layout lebih luas */}
              <div className="flex items-start space-x-3">
                {/* Avatar - Sedikit lebih besar */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 400 }}
                  className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg flex-shrink-0"
                >
                  {testimonials[currentIndex].avatar}
                </motion.div>
                
                {/* Message Content - Lebih luas */}
                <div className="flex-1 min-w-0">
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2"
                  >
                    <h4 className="font-semibold text-slate-800 text-sm font-inter">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed font-poppins">
                      {testimonials[currentIndex].message}
                    </p>
                  </motion.div>
                  
                  {/* Timestamp */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-slate-400 text-xs mt-2 font-poppins"
                  >
                    {testimonials[currentIndex].timestamp}
                  </motion.p>
                </div>
              </div>
              
              {/* Success Indicator */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 600 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-xs">✓</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default NotificationPopup

