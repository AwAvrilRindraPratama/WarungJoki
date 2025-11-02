# Chibi Image Processing Guide

## 📋 Cara Pakai Script Python

### 1. Install Requirements
```bash
pip install pillow rembg
```

### 2. Setup Folder Structure
```
public/images/chibi/
├── raw/              # Taruh 5 foto original di sini
│   ├── 1.png        # Hijab girl
│   ├── 2.png        # Smooth hair boy
│   ├── 3.png        # Curly boy 1
│   ├── 4.png        # Curly boy 2
│   └── 5.png        # Cap boy
├── temp/            # (auto-generated) Temporary nobg files
└── processed/       # (auto-generated) Final 30 poses
    ├── hijab-girl/
    │   ├── pose-1.png
    │   ├── pose-2.png
    │   ├── pose-3.png
    │   ├── pose-4.png
    │   ├── pose-5.png
    │   └── pose-6.png
    ├── smooth-boy/
    ├── curly-boy-1/
    ├── curly-boy-2/
    └── cap-boy/
```

### 3. Run Script
```bash
cd scripts
python process-chibi.py
```

## 🎨 Manual Processing (No Python Required)

### Option A: Online Tools

**Step 1: Remove Background**
1. Go to https://remove.bg
2. Upload each chibi image (5 total)
3. Download PNG with transparent background

**Step 2: Split Grid**
1. Go to https://pinetools.com/split-image
2. Upload nobg image
3. Set: 3 columns × 2 rows
4. Download all 6 pieces
5. Repeat for all 5 images

### Option B: Photoshop/GIMP

**Remove Background:**
- Photoshop: Select > Color Range > White
- GIMP: Select > By Color > White
- Delete selected area

**Split Grid:**
- Use Slice Tool
- Create 3×2 grid
- Export all slices

## 📁 Final Output Structure

After processing, you should have:
```
processed/
├── hijab-girl/        (6 poses)
├── smooth-boy/        (6 poses)
├── curly-boy-1/       (6 poses)
├── curly-boy-2/       (6 poses)
└── cap-boy/           (6 poses)

Total: 30 individual chibi stickers! 🎉
```

## 💡 Tips

1. **Background Color**: Pastikan background putih solid untuk removal yang bagus
2. **Grid Alignment**: Cek apakah setiap pose sudah center sebelum split
3. **File Format**: Gunakan PNG untuk preserve transparency
4. **Resolution**: Keep original resolution untuk quality terbaik

## 🚀 Next Steps After Processing

1. Copy processed images ke `public/images/chibi/`
2. Update component untuk use chibi stickers
3. Bisa dipakai untuk:
   - Notification avatars
   - Loading animations
   - Testimonial cards
   - Fun UI elements
