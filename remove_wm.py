import sys

def remove_watermark():
    try:
        from PIL import Image
    except ImportError:
        import subprocess
        subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
        from PIL import Image

    image_path = r"C:\Users\Victor\.gemini\antigravity\brain\8e6a8d87-c9d7-4359-8112-04be379056b2\hero_bg_highq_1773879935450.png"
    output_path = r"c:\Users\Victor\iBunn\website-v2\assets\hero-bg-v2.png"

    img = Image.open(image_path)
    width, height = img.size

    # The watermark is in the absolute bottom right. 
    # We crop 80 pixels from the right and bottom, then resize back to original resolution.
    # This completely removes the watermark while keeping the exact same Image Size, Colors, and Layout.
    crop_amount = 80
    cropped = img.crop((0, 0, width - crop_amount, height - crop_amount))
    
    # Resize up using high-quality Lanczos filter
    final = cropped.resize((width, height), Image.Resampling.LANCZOS)
    
    final.save(output_path)
    print(f"Successfully processed image. Original size: {width}x{height}, New size: {final.size}")

if __name__ == "__main__":
    remove_watermark()
