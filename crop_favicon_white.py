from PIL import Image

# Open the image
img = Image.open('lock_icon.png').convert('RGB')
pixels = img.load()
width, height = img.size

# Find the bounding box of non-white pixels
left = width
top = height  
right = 0
bottom = 0

# Consider pixels as "content" if they're not close to white
threshold = 240  # RGB values below this are considered content

for y in range(height):
    for x in range(width):
        r, g, b = pixels[x, y]
        # If pixel is not white/light gray
        if r < threshold or g < threshold or b < threshold:
            left = min(left, x)
            top = min(top, y)
            right = max(right, x)
            bottom = max(bottom, y)

# Add some padding (10% of the content size)
padding = max(10, int((right - left) * 0.1))
left = max(0, left - padding)
top = max(0, top - padding)
right = min(width, right + padding)
bottom = min(height, bottom + padding)

# Crop to the bounding box
cropped = img.crop((left, top, right, bottom))

# Save as favicon
cropped.save('client/public/favicon.png')
print(f'✓ Afbeelding gecropped van {width}x{height} naar {right-left}x{bottom-top}')
print(f'✓ Witruimte verwijderd en opgeslagen als client/public/favicon.png')
