from PIL import Image
import os

# Try multiple possible locations for the input image
possible_paths = [
    'lock_icon.png',
    'image.png',
    'favicon_source.png',
    'attached_assets/image.png'
]

input_path = None
for path in possible_paths:
    if os.path.exists(path):
        input_path = path
        break

if not input_path:
    print("Afbeelding niet gevonden. Sla de PNG op als 'lock_icon.png' in deze map.")
    exit(1)

# Open and convert to RGBA
img = Image.open(input_path).convert('RGBA')
pixels = img.load()
width, height = img.size

# Find the bounding box of non-transparent pixels
left = width
top = height  
right = 0
bottom = 0

for y in range(height):
    for x in range(width):
        if pixels[x, y][3] > 10:  # If alpha > 10 (not fully transparent)
            left = min(left, x)
            top = min(top, y)
            right = max(right, x)
            bottom = max(bottom, y)

# Crop to the bounding box
cropped = img.crop((left, top, right + 1, bottom + 1))

# Ensure output directory exists
os.makedirs('client/public', exist_ok=True)

# Save as favicon
cropped.save('client/public/favicon.png')
print(f'✓ Afbeelding gecropped van {width}x{height} naar {right-left+1}x{bottom-top+1}')
print(f'✓ Opgeslagen als client/public/favicon.png')
