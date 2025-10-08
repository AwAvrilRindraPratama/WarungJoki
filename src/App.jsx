import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SimpleTestimoniCard from './components/SimpleTestimoniCard'
import NotificationPopup from './components/NotificationPopup'

const WA_NUMBER = '+6282256940109' // 

export default function App() {
  const waTemplate = encodeURIComponent('Permisi kak, saya mau order Jokinya.')
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Function untuk smooth scroll ke section testimoni
  const scrollToTestimoni = () => {
    const testimoniSection = document.getElementById('testimoni-section')
    if (testimoniSection) {
      testimoniSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className="text-white relative overflow-hidden">
      {/* Notification Popup */}
      <NotificationPopup />
      
      {/* Background Nebula Gradient - Fixed for all sections */}
      <div className="fixed inset-0 z-0">
        <div
          className="w-full h-full animate-pulse"
          style={{
            background:
              'linear-gradient(135deg, #ff0000, #ff7eb3, #fff176, #ff9800, #9c27b0, #2196f3)',
            backgroundSize: '400% 400%',
            animation: 'gradientShift 20s ease infinite',
          }}
        ></div>

        {/* Animated stars layer */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => {
            const size = Math.random() * 2 + 1
            const top = Math.random() * 100
            const left = Math.random() * 100
            const dur = Math.random() * 5 + 3
            const x = Math.random() * 20 - 10
            const y = Math.random() * 20 - 10
            return (
              <motion.span
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${top}%`,
                  left: `${left}%`,
                  opacity: Math.random() * 0.8 + 0.2,
                }}
                animate={{
                  x: [x, -x, x],
                  y: [y, -y, y],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: dur,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )
          })}
        </div>

        {/* Interactive Cursor Aura Effect */}
        <motion.div
          className="fixed w-96 h-96 rounded-full pointer-events-none z-10 mix-blend-screen"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.3) 30%, rgba(236, 72, 153, 0.2) 60%, transparent 100%)',
            left: cursorPos.x - 192,
            top: cursorPos.y - 192,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Secondary smaller aura */}
        <motion.div
          className="fixed w-48 h-48 rounded-full pointer-events-none z-10 mix-blend-screen"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.5) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 100%)',
            left: cursorPos.x - 96,
            top: cursorPos.y - 96,
          }}
          animate={{
            scale: [1.2, 0.8, 1.2],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative z-10 px-6">
        {/* Main Title Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.23, 1, 0.32, 1],
            delay: 0.2
          }}
          className="relative"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-lg relative z-10 font-orbitron text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="inline-block"
            >
              Selamat
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="inline-block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
            >
              Datang
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="inline-block bg-gradient-to-r from-blue-400 via-green-500 to-teal-400 bg-clip-text text-transparent"
            >
              Di Warung Joki!
            </motion.span>
          </motion.h1>
          
          {/* Glowing effect behind title */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 2, delay: 1.8 }}
            className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 blur-3xl -z-10"
          />
        </motion.div>

        {/* Animated Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-6 relative"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-4xl mx-auto font-medium leading-relaxed font-exo text-center px-4 text-shadow-light"
          >
            Saatnya tampil beda dengan website profesional yang{" "}
            <span className="text-yellow-300 font-bold text-shadow-light">mempesona</span>.
            Buat bisnis, Tugas atau personal brand kamu semakin{" "}
            <span className="text-pink-400 font-bold text-shadow-light">berkelas</span> dan{" "}
            <span className="text-green-400 font-bold text-shadow-light">lebih baik</span>.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={scrollToTestimoni}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 5 }}
            className="text-xs sm:text-sm mb-4 opacity-70 text-center font-space text-shadow-light"
          >
            Scroll untuk melihat testimoni Klien
          </motion.p>
          
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-yellow-300 transition-colors duration-300 text-shadow-light"
          >
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-shadow-light" />
          </motion.div>
          
          {/* Additional Arrow for emphasis */}
          <motion.div
            animate={{ 
              y: [0, 8, 0],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
            className="text-white -mt-2 hover:text-yellow-300 transition-colors duration-300 text-shadow-light"
          >
            <ChevronDown className="w-4 h-4 sm:w-6 sm:h-6 text-shadow-light" />
          </motion.div>
        </motion.div>
      </section>

      {/* Testimoni Channel Section */}
      <section id="testimoni-section" className="relative z-10 py-12 sm:py-16 md:py-20 mt-8 sm:mt-12 md:mt-16 px-4 sm:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 font-inter text-white text-shadow-subtle">Testimoni Klien Kami</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-100 max-w-xl mx-auto px-4 sm:px-6 font-poppins leading-relaxed text-shadow-light">
            Lihat langsung testimoni dan feedback dari klien yang telah bekerja sama dengan kami
          </p>
        </motion.div>

        {/* Content Layout - Card & Narasi */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Testimoni Card - Posisi Kiri */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <SimpleTestimoniCard />
          </motion.div>

          {/* Narasi Jangkauan - Posisi Kanan */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 font-inter bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Pelayanan Terpercaya di Samarinda
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 font-poppins leading-relaxed text-shadow-light">
                Kami telah <span className="text-yellow-300 font-semibold text-shadow-light">membantu mahasiswa dan profesional</span> di Kota Samarinda menyelesaikan berbagai project dengan kualitas terbaik.
              </p>
            </div>

            {/* Statistik Grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4"
              >
                <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1 font-inter text-shadow-md">100%</div>
                <p className="text-xs sm:text-sm text-gray-200 font-poppins text-shadow-light">Dikerjakan Oleh Profesional</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4"
              >
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 font-inter text-shadow-md">100%</div>
                <p className="text-xs sm:text-sm text-gray-200 font-poppins text-shadow-light">Terjamin Kepuasan</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4"
              >
                <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1 font-inter text-shadow-md">24h</div>
                <p className="text-xs sm:text-sm text-gray-200 font-poppins text-shadow-light">Respon Cepat</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4"
              >
                <div className="text-2xl sm:text-3xl font-bold text-pink-400 mb-1 font-inter text-shadow-md">100%</div>
                <p className="text-xs sm:text-sm text-gray-200 font-poppins text-shadow-light">Garansi Revisi</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Section baru untuk tombol */}
      <section id="cta-section" className="flex flex-col items-center justify-center relative z-10 py-16 sm:py-20 md:py-24 px-4 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-inter bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Cape, Sibuk? Kami siap mengerjakan tugas anda!
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-2xl mx-auto px-4 sm:px-6 font-poppins leading-relaxed text-shadow-light">
            Bergabunglah dengan ratusan klien yang telah mempercayai layanan kami untuk menyelesaikan tugas mereka
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-lg px-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(34, 197, 94, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://whatsapp.com/channel/0029Vb6OngjEAKW6TXjFE71h', '_blank')}
            className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 sm:py-5 px-6 sm:px-8 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl font-inter text-base sm:text-lg"
          >
            <span className="text-xl text-shadow-light">💬</span>
            <span className="text-shadow-light">Bergabung Channel</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(168, 85, 247, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(`https://wa.me/${WA_NUMBER}?text=${waTemplate}`, '_blank')}
            className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 sm:py-5 px-6 sm:px-8 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl font-inter text-base sm:text-lg"
          >
            <span className="text-xl text-shadow-light">🚀</span>
            <span className="text-shadow-light">Pesan Sekarang!</span>
          </motion.button>
        </motion.div>

        {/* Additional Features Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl px-4"
        >
          <div className="text-center p-6">
            <div className="text-3xl mb-3 text-shadow-light">⚡</div>
            <h3 className="font-semibold mb-2 font-inter text-white text-shadow-subtle">Proses Cepat</h3>
            <p className="text-sm text-gray-200 font-poppins text-shadow-light">Pengerjaan dalam 24-48 jam (tergantung kompleksitas proyek)</p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl mb-3 text-shadow-light">💎</div>
            <h3 className="font-semibold mb-2 font-inter text-white text-shadow-subtle">Kualitas Premium</h3>
            <p className="text-sm text-gray-200 font-poppins text-shadow-light">Hasil berkualitas tinggi</p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl mb-3 text-shadow-light">🛡️</div>
            <h3 className="font-semibold mb-2 font-inter text-white text-shadow-subtle">Garansi Revisi</h3>
            <p className="text-sm text-gray-200 font-poppins text-shadow-light">Revisi sampai puas!</p>
          </div>
        </motion.div>
      </section>

      <style>{`
        @keyframes gradientShift { 
          0% { background-position: 0% 50%; } 
          50% { background-position: 100% 50%; } 
          100% { background-position: 0% 50%; } 
        }
        
        /* Normal scroll behavior */
        html {
          scroll-behavior: auto;
          overflow-x: hidden;
          overflow-y: auto;
        }
        
        body {
          overflow-x: hidden;
          overflow-y: auto;
        }
        
        /* Custom scrollbar styling */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #ff7eb3, #ff9800);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #ff9800, #9c27b0);
        }
      `}</style>
    </div>
  )
}