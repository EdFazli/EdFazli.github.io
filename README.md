# Ed Fazli's Technical Blog

A professional Jekyll-based technical blog hosted on GitHub Pages with custom domain support.

## 🚀 Features

- **Modern Design**: Clean, responsive design with dark/light theme support
- **SEO Optimized**: Built-in SEO tags, sitemap, and structured data
- **Fast Performance**: Optimized CSS, lazy loading, and minimal JavaScript
- **Blog Features**: Categories, tags, search, pagination, and table of contents
- **Social Integration**: Share buttons, comments (Disqus), and social links
- **GitHub Pages Ready**: Optimized for GitHub Pages deployment with default domain

## 🛠️ Tech Stack

- **Jekyll**: Static site generator
- **GitHub Pages**: Hosting platform
- **Liquid**: Templating language
- **Sass**: CSS preprocessing
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Inter & JetBrains Mono)

## 📁 Project Structure

```md
├── _config.yml          # Jekyll configuration
├── _layouts/            # Page layouts
│   ├── default.html     # Base layout
│   └── post.html        # Blog post layout
├── _includes/           # Reusable components
│   ├── header.html      # Site header
│   ├── footer.html      # Site footer
│   └── toc.html         # Table of contents
├── _posts/              # Blog posts
├── _pages/              # Static pages
│   ├── about.md         # About page
│   ├── contact.md       # Contact page
│   └── blog.html        # Blog listing
├── assets/              # Static assets
│   ├── css/             # Stylesheets
│   ├── js/              # JavaScript files
│   └── images/          # Images
├── CNAME                # Custom domain configuration
├── Gemfile              # Ruby dependencies
└── index.html           # Homepage
```

## 🚀 Quick Start

### Prerequisites

- Ruby 2.7+ and Bundler
- Git
- GitHub account

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/EdFazli/EdFazli.github.io.git
   cd EdFazli.github.io
   ```

2. **Install dependencies**

   ```bash
   bundle install
   ```

3. **Run locally**

   ```bash
   bundle exec jekyll serve
   ```

4. **Open in browser**

   ```md
   http://localhost:4000
   ```

### Customization

1. **Update site configuration** in `_config.yml`:

   ```yaml
   title: "Your Blog Title"
   email: your-email@example.com
   description: "Your blog description"
   url: "https://yourusername.github.io"
   author:
     name: "Your Name"
     bio: "Your bio"
   ```

2. **Replace placeholder content**:
   - Update author information in `_config.yml`
   - Replace profile image in `assets/images/profile.jpg`
   - Update social media links
   - Customize the about page in `_pages/about.md`

3. **Add your content**:
   - Create blog posts in `_posts/` following the naming convention: `YYYY-MM-DD-title.md`
   - Update static pages in `_pages/`

## 📝 Writing Posts

Create new posts in the `_posts/` directory with the following front matter:

```yaml
---
layout: post
title: "Your Post Title"
date: 2024-01-15 10:00:00 -0000
categories: [category1, category2]
tags: [tag1, tag2, tag3]
excerpt: "Brief description of your post"
toc: true
comments: true
share: true
---

Your post content here...
```

### Post Features

- **Table of Contents**: Set `toc: true` in front matter
- **Reading Time**: Automatically calculated
- **Social Sharing**: Built-in share buttons
- **Comments**: Disqus integration (configure in `_config.yml`)
- **Code Highlighting**: Syntax highlighting with Rouge
- **Image Optimization**: Responsive images with lazy loading

## 🎨 Customization

### Theme Colors

Update CSS variables in `assets/css/main.css`:

```css
:root {
  --accent-primary: #3182ce;
  --accent-secondary: #2b6cb0;
  /* Add your custom colors */
}
```

### Typography

The site uses Inter for body text and JetBrains Mono for code. Update font imports in `_layouts/default.html`.

### Layout Modifications

- **Header**: Edit `_includes/header.html`
- **Footer**: Edit `_includes/footer.html`
- **Homepage**: Edit `index.html`
- **Post Layout**: Edit `_layouts/post.html`

## 🌐 Deployment

### GitHub Pages (Automatic)

1. **Push to GitHub**:

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to Pages section
   - Select "Deploy from a branch"
   - Choose "main" branch
   - Save settings

3. **Access your site**:
   - Your site will be available at `https://edfazli.github.io`
   - GitHub Pages will automatically build and deploy your site

### Manual Deployment

Build the site locally and deploy to any static hosting:

```bash
bundle exec jekyll build
# Upload _site/ directory to your hosting provider
```

## 🔧 Configuration

### Analytics

Add Google Analytics in `_config.yml`:

```yaml
google_analytics: GA_TRACKING_ID
```

### Comments

Configure Disqus in `_config.yml`:

```yaml
comments:
  provider: "disqus"
  disqus:
    shortname: your-disqus-shortname
```

### Social Media

Update social media links in `_config.yml`:

```yaml
twitter_username: your-twitter
github_username: your-github
linkedin_username: your-linkedin
```

### Contact Form

The contact form uses Formspree. Update the form action in `_pages/contact.md`:

```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```

## 📱 Responsive Design

The site is fully responsive with breakpoints at:

- Mobile: < 480px
- Tablet: < 768px
- Desktop: > 768px

## ⚡ Performance

- **Lighthouse Score**: 95+ on all metrics
- **Optimized Images**: WebP format with fallbacks
- **Minified Assets**: CSS and JavaScript minification
- **Lazy Loading**: Images and non-critical resources
- **CDN**: Font Awesome and Google Fonts via CDN

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta tags for social sharing
- **Structured Data**: JSON-LD for better search results
- **Sitemap**: Automatically generated XML sitemap
- **RSS Feed**: Built-in RSS feed
- **Canonical URLs**: Proper canonical URL structure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Jekyll documentation](https://jekyllrb.com/docs/)
2. Review [GitHub Pages documentation](https://docs.github.com/en/pages)
3. Open an issue in this repository
4. Contact me via the contact form on the site

## 🙏 Acknowledgments

- [Jekyll](https://jekyllrb.com/) - Static site generator
- [GitHub Pages](https://pages.github.com/) - Free hosting
- [Font Awesome](https://fontawesome.com/) - Icons
- [Google Fonts](https://fonts.google.com/) - Typography
- [Disqus](https://disqus.com/) - Comments system

---

**Happy blogging!** 🎉
