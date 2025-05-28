#!/bin/bash

# Create public directory if it doesn't exist
mkdir -p public

# Download project images
curl -o public/cryptalk.png "https://raw.githubusercontent.com/Codzure/Cryptalk/main/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png"
curl -o public/outrite.png "https://raw.githubusercontent.com/Codzure/Outrite/main/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png"
curl -o public/biasharaai.png "https://raw.githubusercontent.com/Codzure/BiasharaAI/main/public/logo.png"

# Copy existing BambaSwap image
cp bambaswap.jpeg public/

echo "Images downloaded and optimized successfully!" 