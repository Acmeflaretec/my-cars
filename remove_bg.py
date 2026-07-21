import os
import sys
from rembg import remove
from PIL import Image

def remove_background(input_path, output_path):
    try:
        print(f"Processing: {input_path}...")
        input_image = Image.open(input_path)
        
        # Remove background
        output_image = remove(input_image)
        
        # Save output
        output_image.save(output_path)
        print(f"Success! Saved background-removed image to: {output_path}")
        
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python remove_bg.py <input_image_path> <output_image_path>")
        print("Example: python remove_bg.py image.jpg image_nobg.png")
        sys.exit(1)
        
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    
    if not os.path.exists(input_file):
        print(f"Error: Input file '{input_file}' not found.")
        sys.exit(1)
        
    if not output_file.lower().endswith('.png'):
        print("Note: Output file should preferably be a .png file to support a transparent background.")
        
    remove_background(input_file, output_file)
