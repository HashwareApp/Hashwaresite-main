from PIL import Image, ImageDraw, ImageFont

# Create OG image (1200x630px)
width = 1200
height = 630

# Create a dark background
img = Image.new('RGB', (width, height), color='#000000')
draw = ImageDraw.Draw(img)

# Load and resize logo
logo = Image.open('client/public/favicon.png').convert('RGBA')

# Resize logo while maintaining aspect ratio
max_logo_height = 250
aspect_ratio = logo.width / logo.height
new_height = max_logo_height
new_width = int(new_height * aspect_ratio)

logo = logo.resize((new_width, new_height), Image.Resampling.LANCZOS)

# Center logo
logo_x = (width - new_width) // 2
logo_y = 120

# Paste logo
img.paste(logo, (logo_x, logo_y), logo)

# Add text
try:
    font_large = ImageFont.truetype('arial.ttf', 60)
    font_small = ImageFont.truetype('arial.ttf', 32)
except:
    font_large = ImageFont.load_default()
    font_small = ImageFont.load_default()

text1 = 'Hashware'
text2 = 'Unlocking Smart Software'

bbox1 = draw.textbbox((0, 0), text1, font=font_large)
bbox2 = draw.textbbox((0, 0), text2, font=font_small)

text1_width = bbox1[2] - bbox1[0]
text2_width = bbox2[2] - bbox2[0]

text1_x = (width - text1_width) // 2
text1_y = 420
text2_x = (width - text2_width) // 2
text2_y = 500

draw.text((text1_x, text1_y), text1, fill='#FFFFFF', font=font_large)
draw.text((text2_x, text2_y), text2, fill='#A0A0A0', font=font_small)

# Save
img.save('client/public/og-image.png')
print(f' OG image gemaakt met logo {new_width}x{new_height} (aspect ratio behouden)')
