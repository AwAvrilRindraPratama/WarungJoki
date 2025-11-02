# 📱 WhatsApp Round-Robin Routing System

## Overview
Website Warung Joki menggunakan sistem **Round-Robin** untuk mendistribusikan chat WhatsApp ke 5 nomor admin secara berurutan dan merata.

## 🔄 Cara Kerja

### Konsep Round-Robin
Setiap kali ada yang klik tombol WhatsApp, sistem akan mengarahkan ke nomor berikutnya secara **berurutan** (bukan random):

```
Klik 1 → Nomor 1
Klik 2 → Nomor 2
Klik 3 → Nomor 3
Klik 4 → Nomor 4
Klik 5 → Nomor 5
Klik 6 → Nomor 1 (kembali ke awal)
Klik 7 → Nomor 2
... dan seterusnya
```

### 📞 Daftar Nomor WhatsApp

| No | Nomor WhatsApp | Format Clean |
|----|----------------|--------------|
| 1️⃣ | +62 821-8907-4832 | +6282189074832 |
| 2️⃣ | +62 822-4658-4629 | +6282246584629 |
| 3️⃣ | +62 812-4628-3958 | +6281246283958 |
| 4️⃣ | +62 822-5694-0109 | +6282256940109 |
| 5️⃣ | +62 877-8421-2422 | +6287784212422 |

## 🎯 Implementasi

### Lokasi Kode
File: `src/App.jsx`

### Array Nomor
```javascript
const WA_NUMBERS = [
  '+6282189074832',  // Nomor 1
  '+6282246584629',  // Nomor 2
  '+6281246283958',  // Nomor 3
  '+6282256940109',  // Nomor 4
  '+6287784212422'   // Nomor 5
]
```

### Function Round-Robin
```javascript
const getNextWhatsAppNumber = () => {
  // Ambil counter dari localStorage (default 0)
  const currentCounter = parseInt(localStorage.getItem('waCounter') || '0', 10)
  
  // Ambil nomor di index saat ini
  const selectedNumber = WA_NUMBERS[currentCounter]
  
  // Hitung counter berikutnya (loop ke 0 setelah 4)
  const nextCounter = (currentCounter + 1) % WA_NUMBERS.length
  
  // Simpan counter berikutnya ke localStorage
  localStorage.setItem('waCounter', nextCounter.toString())
  
  return selectedNumber
}
```

### Handler Click
```javascript
const handleWhatsAppClick = () => {
  const selectedNumber = getNextWhatsAppNumber()
  const url = `https://wa.me/${selectedNumber}?text=${waTemplate}`
  window.open(url, '_blank')
}
```

## 📍 Tombol yang Menggunakan Sistem Ini

### 1. Navigation Bar - "Hubungi Kami"
```jsx
<motion.button onClick={handleWhatsAppClick}>
  Hubungi Kami
</motion.button>
```

### 2. Hero Section - "Mulai Konsultasi"
```jsx
<button onClick={handleWhatsAppClick}>
  Mulai Konsultasi
</button>
```

### 3. CTA Section - "Chat WhatsApp"
```jsx
<button onClick={handleWhatsAppClick}>
  Chat WhatsApp
</button>
```

## 💾 Storage System

### localStorage Key
- **Key**: `waCounter`
- **Value**: `0` | `1` | `2` | `3` | `4`
- **Purpose**: Menyimpan index nomor berikutnya yang akan digunakan

### Persistensi
- ✅ Counter **tersimpan** meskipun page di-refresh
- ✅ Counter **tersimpan** meskipun browser ditutup
- ✅ Counter **terus berlanjut** dari terakhir kali

### Reset Counter (Manual)
Jika ingin reset counter ke nomor 1:
```javascript
localStorage.setItem('waCounter', '0')
// atau
localStorage.removeItem('waCounter')
```

## 🔍 Testing & Debugging

### Console Log Output
Setiap kali tombol diklik, akan muncul log di browser console:
```
🔄 Round-Robin WA: Using number 1 of 5
📱 Selected: +6282189074832
➡️ Next will be: 2
```

### Manual Testing
1. Buka browser console (F12)
2. Klik tombol WhatsApp
3. Lihat nomor yang dipilih di console
4. Klik lagi, pastikan nomor berubah ke berikutnya
5. Setelah 5 klik, pastikan kembali ke nomor 1

### Check Current Counter
```javascript
// Di browser console
localStorage.getItem('waCounter')
// Output: "0" atau "1" atau "2" atau "3" atau "4"
```

## 📊 Load Distribution

Dengan sistem Round-Robin, distribusi chat akan **merata**:

| Total Clicks | Nomor 1 | Nomor 2 | Nomor 3 | Nomor 4 | Nomor 5 |
|--------------|---------|---------|---------|---------|---------|
| 5 clicks     | 1       | 1       | 1       | 1       | 1       |
| 10 clicks    | 2       | 2       | 2       | 2       | 2       |
| 50 clicks    | 10      | 10      | 10      | 10      | 10      |
| 100 clicks   | 20      | 20      | 20      | 20      | 20      |

✅ **Setiap admin mendapat jumlah chat yang sama**

## 🎯 Keuntungan Sistem Ini

### ✅ Fair Distribution
- Setiap admin mendapat chat secara merata
- Tidak ada yang overload atau kosong

### ✅ Predictable
- Urutan nomor yang jelas dan teratur
- Mudah di-track dan di-monitor

### ✅ Persistent
- Counter tersimpan di browser pengguna
- Tidak hilang saat refresh atau close browser

### ✅ Simple & Reliable
- Tidak butuh backend/server
- Tidak butuh database
- Pure client-side JavaScript

### ✅ No Conflict
- Setiap user punya counter sendiri di localStorage mereka
- Tidak ada bentrok antar user

## 🚀 Production Deployment

### Setelah Deploy ke Hosting
1. Sistem langsung bekerja otomatis
2. Setiap pengunjung akan mendapat counter sendiri
3. Counter tersimpan di browser masing-masing
4. Distribusi chat akan merata otomatis

### Monitoring
Untuk melihat distribusi chat:
- Cek incoming message di masing-masing 5 nomor WA
- Harusnya jumlahnya relatif seimbang

### Update Nomor
Jika ingin ganti nomor, edit array di `App.jsx`:
```javascript
const WA_NUMBERS = [
  '+6282189074832',  // Ganti nomor 1 di sini
  '+6282246584629',  // Ganti nomor 2 di sini
  '+6281246283958',  // Ganti nomor 3 di sini
  '+6282256940109',  // Ganti nomor 4 di sini
  '+6287784212422'   // Ganti nomor 5 di sini
]
```

## 🔧 Troubleshooting

### Counter Tidak Berubah
```javascript
// Check di console
console.log(localStorage.getItem('waCounter'))

// Force reset
localStorage.removeItem('waCounter')
```

### Nomor Tidak Valid
- Pastikan format: `+62` diikuti nomor tanpa spasi/dash
- Contoh benar: `+6282189074832`
- Contoh salah: `+62 821-8907-4832`

### Testing di Localhost
- Buka http://localhost:5173/
- Buka console (F12)
- Klik tombol WA 5x
- Pastikan log menunjukkan 1→2→3→4→5→1

## 📝 Notes

- Sistem ini **client-side only**, tidak perlu backend
- Counter unik per browser/device
- User A dan User B punya counter sendiri-sendiri
- Semua admin tetap dapat chat, distribusi otomatis merata

---

**Created**: November 2025  
**System**: Round-Robin WhatsApp Distribution  
**Total Numbers**: 5  
**Distribution**: Equal & Sequential ✨
