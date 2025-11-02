"""
Script SIMPLE untuk split chibi images tanpa remove background
Hanya butuh Pillow (PIL)
Requirements: pip install pillow
"""

from PIL import Image
import os

def split_image_grid(image_path, rows=2, cols=3, output_dir='output', char_name='chibi'):
    """Split image menjadi grid (2 rows x 3 cols = 6 poses)"""
    print(f"\n📸 Processing: {char_name}")
    
    img = Image.open(image_path)
    width, height = img.size
    
    # Hitung ukuran setiap cell
    cell_width = width // cols
    cell_height = height // rows
    
    os.makedirs(output_dir, exist_ok=True)
    
    pose_num = 1
    for row in range(rows):
        for col in range(cols):
            # Crop coordinates
            left = col * cell_width
            top = row * cell_height
            right = left + cell_width
            bottom = top + cell_height
            
            # Crop dan save
            cell = img.crop((left, top, right, bottom))
            filename = f"pose-{pose_num}.png"
            filepath = os.path.join(output_dir, filename)
            cell.save(filepath, 'PNG')
            print(f"  ✂️  Saved: {filename} ({cell.width}x{cell.height}px)")
            pose_num += 1
    
    print(f"  ✅ Completed: {char_name} (6 poses)")

def process_all_chibis_simple():
    """Process semua chibi images - SPLIT ONLY (no background removal)"""
    
    # Path setup
    input_folder = "../public/images/chibi/raw"
    output_folder = "../public/images/chibi/processed"
    
    # Character names (sesuaikan dengan urutan foto)
    characters = [
        "hijab-girl",      # Foto 1: Chibi hijab berwarna hitam
        "smooth-boy",      # Foto 2: Chibi cowok rambut smooth
        "curly-boy-1",     # Foto 3: Chibi cowok rambut keriting (biru tua)
        "curly-boy-2",     # Foto 4: Chibi cowok rambut keriting (biru terang)
        "cap-boy"          # Foto 5: Chibi cowok pakai topi
    ]
    
    print("🚀 Starting chibi processing (SPLIT ONLY - No BG Removal)")
    print("=" * 60)
    print("💡 Background TIDAK dihapus - hanya split grid 3x2")
    print("=" * 60)
    
    # Process each character
    total_processed = 0
    for idx, char_name in enumerate(characters, 1):
        # Coba cari file dengan berbagai extension
        input_file = None
        for ext in ['.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG']:
            test_path = os.path.join(input_folder, f"{idx}{ext}")
            if os.path.exists(test_path):
                input_file = test_path
                break
        
        if not input_file:
            print(f"\n⚠️  File not found: {idx}.[png|jpg]")
            print(f"   Please add image to: {os.path.abspath(input_folder)}")
            continue
        
        # Split into 6 poses
        char_output_dir = os.path.join(output_folder, char_name)
        split_image_grid(input_file, rows=2, cols=3, output_dir=char_output_dir, char_name=char_name)
        total_processed += 1
    
    print("\n" + "=" * 60)
    if total_processed > 0:
        print(f"🎉 SUCCESS! Processed {total_processed} characters")
        print(f"📁 Total poses generated: {total_processed * 6}")
        print(f"📂 Output folder: {os.path.abspath(output_folder)}")
        print("\n💡 Next steps:")
        print("   1. Remove background manual dari setiap pose (opsional)")
        print("   2. Atau gunakan online tool: https://remove.bg")
    else:
        print("❌ No files processed!")
        print(f"\n📝 Instructions:")
        print(f"   1. Save 5 chibi images to: {os.path.abspath(input_folder)}")
        print(f"   2. Name them: 1.png, 2.png, 3.png, 4.png, 5.png")
        print(f"   3. Run this script again")
    print("=" * 60)

if __name__ == "__main__":
    try:
        # Create input folder if not exists
        input_folder = "../public/images/chibi/raw"
        os.makedirs(input_folder, exist_ok=True)
        
        process_all_chibis_simple()
    except Exception as e:
        print(f"\n❌ Error: {e}")
        import traceback
        traceback.print_exc()
        print("\n💡 Make sure Pillow is installed:")
        print("   pip install pillow")
