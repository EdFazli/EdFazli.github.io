#!/bin/bash

echo "🚀 Deploying Next.js blog to GitHub Pages..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Not a git repository. Please run 'git init' first."
    exit 1
fi

# Test build locally first
echo "🔨 Testing build process..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors before deploying."
    exit 1
fi

echo "✅ Build successful!"

# Check if there are any changes to commit
if [ -z "$(git status --porcelain)" ]; then
    echo "✅ No changes to commit. Repository is clean."
else
    echo "📝 Adding and committing changes..."
    git add .
    
    # Get commit message from user or use default
    if [ -z "$1" ]; then
        COMMIT_MSG="Update blog content - $(date '+%Y-%m-%d %H:%M')"
    else
        COMMIT_MSG="$1"
    fi
    
    git commit -m "$COMMIT_MSG"
fi

# Push to main branch
echo "📤 Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to GitHub!"
    echo "🌐 Your site will be available at: https://edfazli.github.io"
    echo "⏱️  Deployment usually takes 2-3 minutes."
    echo "📊 Check deployment status at: https://github.com/EdFazli/EdFazli.github.io/actions"
else
    echo "❌ Failed to push to GitHub. Please check your git configuration."
    exit 1
fi
