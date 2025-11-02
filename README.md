# Warung Joki - Modern Landing Page

Redesigned modern landing page dengan tema **Blue-Dark-White** yang clean dan profesional.

## ✨ Features

- 🎨 **Modern Design** - Clean, minimal dengan skema warna biru-hitam-putih
- 📱 **Fully Responsive** - Perfect di mobile, tablet, dan desktop
- ⚡ **Fast Performance** - Optimized dengan Vite build tool
- 🎭 **Smooth Animations** - Framer Motion untuk UX yang lebih baik
- 🔔 **Live Notifications** - Real-time testimoni popup
- 💬 **WhatsApp Integration** - Direct contact via WhatsApp

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#3b82f6` - Untuk accent dan CTA buttons
- **Dark Background**: `#020617` - Untuk background utama
- **White/Gray**: Untuk text dan cards

### Typography
- **Display Font**: Poppins - Untuk headings
- **Body Font**: Inter - Untuk paragraf dan UI text

## 🚀 Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run dev server**
   ```bash
   npm run dev
   ```
   Server akan jalan di `http://localhost:5173/`

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── App.jsx                          # Main application component
├── main.jsx                         # Entry point
├── components/
│   ├── SimpleTestimoniCard.jsx     # Testimonial carousel
│   └── NotificationPopup.jsx        # Live notification popup
└── styles/
    └── tailwind.css                 # Global styles & utilities
```

## 🔧 Configuration

### WhatsApp Number
Update nomor WhatsApp di `src/App.jsx`:
```javascript
const WA_NUMBER = '+6282256940109'
```

### Testimoni Images
Tambahkan gambar testimoni ke folder `public/images/`:
- Portofolio.png
- IPYNB.png
- KaryaTulis.png
- PiramidaPenduduk.png

## 📝 Sections

1. **Hero Section** - Title, CTA buttons, dan statistik
2. **Features** - 4 keunggulan utama layanan
3. **Services List** - Daftar layanan yang ditawarkan
4. **Testimonials** - Carousel testimoni klien
5. **CTA Section** - Final call-to-action
6. **Footer** - Informasi penutup

## 🛠️ Tech Stack

- **React 18.3.1** - UI Library
- **Vite 5.4.8** - Build tool
- **Tailwind CSS 3.4.13** - Styling
- **Framer Motion 10.16.4** - Animations
- **Lucide React 0.344.0** - Icons

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Next Steps

- [ ] Deploy ke Vercel/Netlify
- [ ] Tambahkan Google Analytics
- [ ] Implement loading states
- [ ] Add SEO meta tags
- [ ] Optimize images

## 📄 License

© 2025 WarungJoki. All rights reserved.

---

**Dibuat dengan ❤️ untuk membantu mahasiswa dan profesional menyelesaikan project mereka**
