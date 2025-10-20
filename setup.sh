#!/bin/bash

# Modern React Stack Setup Script
echo "🚀 Setting up Modern React Stack..."

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

# Setup Husky
echo "🐕 Setting up Husky..."
npx husky install
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg

# Run initial build
echo "🔨 Running initial build..."
npm run build

# Run tests
echo "🧪 Running tests..."
npm run test

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Run 'npm run dev' to start the development server"
echo "2. Open http://localhost:3000 in your browser"
echo "3. Start building your React application!"
echo ""
echo "Available commands:"
echo "  npm run dev          - Start development server"
echo "  npm run build        - Build for production"
echo "  npm run test         - Run tests"
echo "  npm run lint         - Run linter"
echo "  npm run format       - Format code"
echo "  npm run commit       - Interactive commit"
echo ""
echo "Happy coding! 🚀"
