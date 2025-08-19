# Ed Fazli's Professional Blog

A modern, high-performance blogging platform built with Next.js and deployed on GitHub Pages.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14, React 18, and TypeScript
- **Responsive Design**: Mobile-first design with dark/light theme support
- **SEO Optimized**: Built-in SEO, sitemap generation, and structured data
- **Fast Performance**: Static site generation with optimal loading speeds
- **Rich Content**: Markdown support with syntax highlighting and table of contents
- **Interactive Components**: Search, filtering, and social sharing
- **GitHub Pages Ready**: Automated deployment with GitHub Actions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown with gray-matter
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with GitHub Actions
- **Fonts**: Inter & JetBrains Mono (Google Fonts)

## 📁 Project Structure

```
├── app/                     # Next.js App Router
│   ├── blog/               # Blog pages
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/             # Reusable components
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── PostCard.tsx        # Blog post card
│   ├── SearchBar.tsx       # Search functionality
│   └── ThemeProvider.tsx   # Theme context
├── content/                # Blog content
│   └── posts/              # Markdown blog posts
├── lib/                    # Utility functions
│   ├── posts.ts            # Post management
│   └── utils.ts            # Helper functions
├── public/                 # Static assets
├── .github/workflows/      # GitHub Actions
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind configuration
└── package.json            # Dependencies
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git
- GitHub account

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/EdFazli/EdFazli.github.io.git
   cd EdFazli.github.io
   ```

2. **Install dependencies and setup**

   ```bash
   ./setup.sh
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Visit [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm run export
```

## 📝 Writing Posts

Create new blog posts in the `content/posts/` directory using this format:

```markdown
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "Brief description of your post"
author: "Ed Fazli"
categories: ["Development", "React"]
tags: ["nextjs", "react", "tutorial"]
toc: true
comments: true
share: true
---

# Your Post Title

Your content here...
```

### Post Features

- **Markdown Support**: Full markdown syntax with code highlighting
- **Table of Contents**: Automatic TOC generation
- **Reading Time**: Calculated automatically
- **Social Sharing**: Built-in share buttons
- **Categories & Tags**: Organize and filter content
- **SEO Optimization**: Automatic meta tags and structured data

## 🎨 Customization

### Site Configuration

Update site information in `app/layout.tsx`:

```typescript
export const metadata = {
  title: {
    default: 'Your Name - Blog Title',
    template: '%s | Your Name'
  },
  description: 'Your blog description',
  // ... other metadata
}
```

### Theme Colors

Customize colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color palette
      }
    }
  }
}
```

### Content Management

- **Posts**: Add markdown files to `content/posts/`
- **Images**: Place in `public/images/`
- **Static Pages**: Modify files in `app/`

## 🌐 Deployment

### Automatic Deployment (Recommended)

The site automatically deploys to GitHub Pages when you push to the main branch:

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "GitHub Actions" as source

2. **Push your changes**:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

3. **Access your site**:
   Your site will be available at `https://yourusername.github.io`

### Manual Deployment

```bash
npm run export
# Upload the 'out' directory to your hosting provider
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Analytics

Add Google Analytics in `app/layout.tsx`:

```typescript
// Add your Google Analytics tracking code
```

### Contact Form

The contact form is ready for integration with services like:
- Formspree
- Netlify Forms
- EmailJS

## ⚡ Performance

- **Lighthouse Score**: 95+ on all metrics
- **Static Generation**: Pre-rendered at build time
- **Image Optimization**: Next.js automatic optimization
- **Code Splitting**: Automatic bundle optimization
- **Font Optimization**: Google Fonts with display swap

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta tags for all pages
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for better search results
- **Sitemap**: Automatically generated
- **RSS Feed**: Built-in RSS feed support

## 📱 Responsive Design

Fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes
4. Test locally: `npm run dev`
5. Commit changes: `git commit -m "Add new feature"`
6. Push to branch: `git push origin feature/new-feature`
7. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter issues:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [GitHub Pages documentation](https://docs.github.com/en/pages)
3. Open an issue in this repository
4. Contact via the contact form

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Lucide React](https://lucide.dev/) - Beautiful icons
- [GitHub Pages](https://pages.github.com/) - Free hosting
- [Vercel](https://vercel.com/) - Next.js creators

---

**Built with ❤️ using Next.js and deployed on GitHub Pages**
