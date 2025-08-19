import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  author: string
  categories: string[]
  tags: string[]
  readingTime: number
  toc?: boolean
  comments?: boolean
  share?: boolean
}

export function getAllPosts(): Post[] {
  // Create posts directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      return getPostBySlug(slug)
    })
    .filter((post): post is Post => post !== null)

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Process markdown content
    const processedContent = remark().use(html).processSync(content)
    const contentHtml = processedContent.toString()

    // Calculate reading time
    const stats = readingTime(content)

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      content: contentHtml,
      author: data.author || 'Ed Fazli',
      categories: data.categories || [],
      tags: data.tags || [],
      readingTime: Math.ceil(stats.minutes),
      toc: data.toc || false,
      comments: data.comments || false,
      share: data.share || true,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getPostsByCategory(category: string): Post[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) =>
    post.categories.some((cat) => cat.toLowerCase() === category.toLowerCase())
  )
}

export function getPostsByTag(tag: string): Post[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) =>
    post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  )
}

export function searchPosts(query: string): Post[] {
  const allPosts = getAllPosts()
  const lowercaseQuery = query.toLowerCase()
  
  return allPosts.filter((post) =>
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.categories.some((cat) => cat.toLowerCase().includes(lowercaseQuery)) ||
    post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  )
}
