import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Star, Zap, Shield, Clock, MessageCircle, CheckCircle } from 'lucide-react'
import SimpleTestimoniCard from './components/SimpleTestimoniCard'
import NotificationPopup from './components/NotificationPopup'

// Array of 5 WhatsApp numbers for round-robin distribution
const WA_NUMBERS = [
  '+6282256940109',  // Nomor 1
  '+6282256940109',  // Nomor 2
  '+6282256940109',  // Nomor 3
  '+6282256940109',  // Nomor 4
  '+6282256940109'   // Nomor 5
]

export default function App() {
  const waTemplate = encodeURIComponent('Halo! Saya tertarik dengan layanan Warung Joki. Bisa dijelaskan lebih lanjut?')

  // Function to get next WhatsApp number in round-robin fashion
  const getNextWhatsAppNumber = () => {
    // Get current counter from localStorage (default to 0)
    const currentCounter = parseInt(localStorage.getItem('waCounter') || '0', 10)
    
    // Get the number at current index
    const selectedNumber = WA_NUMBERS[currentCounter]
    
    // Calculate next counter (loop back to 0 after reaching 4)
    const nextCounter = (currentCounter + 1) % WA_NUMBERS.length
    
    // Save next counter to localStorage for next click
    localStorage.setItem('waCounter', nextCounter.toString())
    
    console.log(`🔄 Round-Robin WA: Using number ${currentCounter + 1} of ${WA_NUMBERS.length}`)
    console.log(`📱 Selected: ${selectedNumber}`)
    console.log(`➡️ Next will be: ${nextCounter + 1}`)
    
    return selectedNumber
  }

  // Function to handle WhatsApp button click
  const handleWhatsAppClick = () => {
    const selectedNumber = getNextWhatsAppNumber()
    const url = `https://wa.me/${selectedNumber}?text=${waTemplate}`
    window.open(url, '_blank')
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-dark text-white scrollbar-thin">
      <NotificationPopup />
      
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-primary-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-blue rounded-lg flex items-center justify-center">
                <span className="text-lg sm:text-xl font-bold">W</span>
              </div>
              <span className="text-lg sm:text-xl font-display font-bold">Warung<span className="text-primary-400">Joki</span></span>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-primary-500/50 text-sm sm:text-base flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Hubungi Kami</span>
              <span className="sm:hidden">Chat</span>
            </motion.button>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary-600/10 border border-primary-500/30 rounded-full px-4 py-2 mb-6 sm:mb-8"
            >
              <Zap className="w-4 h-4 text-primary-400" />
              <span className="text-xs sm:text-sm text-primary-300 font-medium">Trusted by 500+ Students</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4 sm:mb-6 leading-tight"
            >
              Selesaikan Tugas Anda Kontol<br />
              <span className="bg-gradient-to-r from-primary-400 to-blue-500 bg-clip-text text-transparent">
                Dengan Mudah & Cepat
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 px-4"
            >
              Layanan joki profesional untuk website, tugas kuliah, dan project coding.{' '}
              <span className="text-primary-400 font-semibold">Kualitas terjamin</span>, hasil memuaskan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
            >
              <button
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto btn-primary flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Mulai Konsultasi</span>
              </button>
              
              <button
                onClick={() => scrollToSection('testimoni')}
                className="w-full sm:w-auto btn-secondary flex items-center justify-center space-x-2"
              >
                <Star className="w-5 h-5" />
                <span>Lihat Testimoni</span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 max-w-2xl mx-auto px-4"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-400">500+</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">Project Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-400">24h</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-400">100%</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={() => scrollToSection('layanan')}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex flex-col items-center space-y-2 text-primary-400"
            >
              <span className="text-xs sm:text-sm">Scroll untuk explore</span>
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="layanan" className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Kenapa Pilih <span className="text-primary-400">Kami?</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Kami memberikan solusi terbaik dengan layanan profesional yang terpercaya
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              icon: Zap,
              title: 'Proses Cepat',
              desc: 'Pengerjaan 24-48 jam sesuai kompleksitas project',
              color: 'text-yellow-400'
            },
            {
              icon: Shield,
              title: 'Garansi Revisi',
              desc: 'Revisi unlimited sampai Anda puas dengan hasilnya',
              color: 'text-green-400'
            },
            {
              icon: Star,
              title: 'Kualitas Premium',
              desc: 'Dikerjakan oleh profesional berpengalaman',
              color: 'text-blue-400'
            },
            {
              icon: Clock,
              title: 'Respons 24/7',
              desc: 'Customer service siap membantu kapan saja',
              color: 'text-purple-400'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="card text-center group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-primary-600/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${feature.color}`} />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-container bg-dark-800/50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Layanan <span className="text-primary-400">Kami</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Berbagai macam layanan yang bisa kami kerjakan untuk Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            'Website Portfolio',
            'Landing Page',
            'E-Commerce Website',
            'Company Profile',
            'Tugas Kuliah (Makalah, Laporan)',
            'Tugas Coding (Python, Java, C++, JavaScript)',
            'Aplikasi Web (CRUD, Dashboard)',
            'Database Design',
            'UI/UX Design'
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="glass-hover rounded-lg p-4 sm:p-5 flex items-start space-x-3 group cursor-pointer"
            >
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base font-medium">{service}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="testimoni" className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Apa Kata <span className="text-primary-400">Klien Kami?</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Testimoni nyata dari klien yang puas dengan layanan kami
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <SimpleTestimoniCard />
        </div>
      </section>

      <section className="section-container bg-gradient-to-br from-primary-600 to-blue-600">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6">
            Siap Mulai Project Anda?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto px-4 text-blue-50">
            Konsultasikan kebutuhan Anda sekarang dan dapatkan solusi terbaik dari tim profesional kami
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-primary-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-xl hover:scale-105 flex items-center justify-center space-x-2 text-base sm:text-lg"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Chat WhatsApp</span>
            </button>
            
            <button
              onClick={() => window.open('https://whatsapp.com/channel/0029Vb6OngjEAKW6TXjFE71h', '_blank')}
              className="w-full sm:w-auto bg-primary-900/50 hover:bg-primary-900/70 border-2 border-white text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-xl hover:scale-105 flex items-center justify-center space-x-2 text-base sm:text-lg"
            >
              <Star className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Join Channel</span>
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-3xl mx-auto px-4"
          >
            {[
              { icon: '', text: 'Fast Response' },
              { icon: '', text: 'Guaranteed Quality' },
              { icon: '', text: 'Best Price' },
              { icon: '', text: 'On Time Delivery' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl mb-2">{item.icon}</div>
                <div className="text-xs sm:text-sm font-medium text-blue-50">{item.text}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <footer className="bg-dark-950 border-t border-primary-500/10 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-blue rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold">W</span>
              </div>
              <span className="text-xl font-display font-bold">Warung<span className="text-primary-400">Joki</span></span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-4">
              Solusi terpercaya untuk semua kebutuhan project Anda
            </p>
            <div className="text-xs sm:text-sm text-gray-500">
               2025 WarungJoki. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
