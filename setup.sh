#!/bin/bash

echo "🚀 Setting up Ed Fazli's Next.js Blog Platform..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Create necessary directories
echo "📁 Creating directory structure..."
mkdir -p public/images
mkdir -p content/posts

# Create a sample .env.local file
if [ ! -f .env.local ]; then
    echo "⚙️ Creating environment configuration..."
    cat > .env.local << EOL
# Local development environment variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Ed Fazli's Blog"
EOL
    echo "✅ Created .env.local file"
fi

# Create .gitignore if it doesn't exist
if [ ! -f .gitignore ]; then
    echo "📝 Creating .gitignore..."
    cat > .gitignore << EOL
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Next.js
.next/
out/
build/

# Production
dist/

# Environment variables
.env*.local

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Temporary
*.tmp
*.temp
EOL
    echo "✅ Created .gitignore file"
fi

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "Next steps:"
echo "1. Replace public/images/profile.jpg with your actual profile image"
echo "2. Update your information in app/layout.tsx and app/about/page.tsx"
echo "3. Add your blog posts to content/posts/"
echo "4. Start the development server: npm run dev"
echo "5. Open http://localhost:3000 in your browser"
echo ""
echo "For deployment to GitHub Pages:"
echo "1. Push your code to GitHub"
echo "2. Enable GitHub Pages in repository settings"
echo "3. Select 'GitHub Actions' as the source"
echo ""
echo "Happy blogging! 🚀"
