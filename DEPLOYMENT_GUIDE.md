# 🚀 GitHub Pages Deployment Guide

## ✅ Problem Fixed

The original error was caused by missing `package-lock.json` file. This has been resolved by:

1. ✅ Generated `package-lock.json` with `npm install`
2. ✅ Updated GitHub Actions workflow to use `npm ci`
3. ✅ Fixed TypeScript errors in components
4. ✅ Updated scripts to use modern Next.js export method

## 📋 Step-by-Step Deployment

### 1. Enable GitHub Pages (One-time setup)

1. **Go to your repository**: `https://github.com/EdFazli/EdFazli.github.io`
2. **Click "Settings"** tab
3. **Navigate to "Pages"** in the left sidebar
4. **Under "Source"**, select **"GitHub Actions"**
5. **Save** the settings

### 2. Deploy Your Site

**Option A: Using the deployment script (Recommended)**
```bash
./deploy.sh "Your commit message"
```

**Option B: Manual deployment**
```bash
# Test build locally first
npm run build

# Add and commit changes
git add .
git commit -m "Deploy Next.js blog to GitHub Pages"

# Push to trigger deployment
git push origin main
```

### 3. Monitor Deployment

1. **Check GitHub Actions**: Visit `https://github.com/EdFazli/EdFazli.github.io/actions`
2. **Wait for completion**: Usually takes 2-3 minutes
3. **Access your site**: `https://edfazli.github.io`

## 🔧 Configuration Details

### GitHub Actions Workflow
The workflow (`.github/workflows/deploy.yml`) automatically:
- ✅ Installs Node.js 18
- ✅ Installs dependencies with `npm ci`
- ✅ Builds the Next.js app
- ✅ Creates static export in `out/` directory
- ✅ Adds `.nojekyll` file for GitHub Pages
- ✅ Deploys to `gh-pages` branch

### Next.js Configuration
The `next.config.js` is configured for:
- ✅ Static export (`output: 'export'`)
- ✅ Trailing slashes for GitHub Pages
- ✅ Unoptimized images (required for static export)
- ✅ No basePath (for root domain deployment)

## 🛠️ Troubleshooting

### Common Issues and Solutions

**1. Build Fails with TypeScript Errors**
```bash
# Run locally to see errors
npm run build

# Fix TypeScript errors in your code
# Then commit and push again
```

**2. 404 Errors on Deployed Site**
- Check that GitHub Pages is enabled
- Verify the source is set to "GitHub Actions"
- Wait a few minutes for DNS propagation

**3. CSS/JS Not Loading**
- Ensure `next.config.js` has correct configuration
- Check browser console for 404 errors
- Verify the `out/` directory contains all assets

**4. Deployment Workflow Fails**
- Check the Actions tab for error details
- Ensure `package-lock.json` is committed
- Verify Node.js version compatibility

### Debug Commands

```bash
# Test build locally
npm run build

# Check if out directory is created
ls -la out/

# Verify package-lock.json exists
ls -la package-lock.json

# Check git status
git status
```

## 📊 Deployment Status

After pushing to main branch:

1. **GitHub Actions starts** (usually within 30 seconds)
2. **Build process** (1-2 minutes)
3. **Deployment** (30 seconds)
4. **Site available** at `https://edfazli.github.io`

## 🎯 Quick Reference

### Essential Commands
```bash
# Local development
npm run dev

# Test build
npm run build

# Deploy
./deploy.sh "Your message"

# Or manual deploy
git add . && git commit -m "Update" && git push origin main
```

### Important Files
- `package-lock.json` - Dependency lock file (must be committed)
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `next.config.js` - Next.js configuration for static export
- `out/` - Generated static files (auto-created, don't commit)

## ✅ Verification Checklist

Before deploying, ensure:
- [ ] `npm run build` works locally
- [ ] `package-lock.json` exists and is committed
- [ ] GitHub Pages is enabled with "GitHub Actions" source
- [ ] No TypeScript errors in the code
- [ ] All changes are committed to git

Your Next.js blog is now ready for automatic deployment to GitHub Pages! 🎉
