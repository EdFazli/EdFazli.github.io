import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import TableOfContents from '@/components/TableOfContents'
import ShareButtons from '@/components/ShareButtons'
import RelatedPosts from '@/components/RelatedPosts'
import { Calendar, Clock, Tag, User } from 'lucide-react'

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }

  const allPosts = getAllPosts()
  const relatedPosts = allPosts
    .filter(p => p.slug !== post.slug && p.categories.some(cat => post.categories.includes(cat)))
    .slice(0, 3)

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category) => (
              <span
                key={category}
                className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
              >
                {category}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </div>
        
        <ShareButtons title={post.title} url={`/blog/${post.slug}`} />
      </header>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Table of Contents */}
        <aside className="lg:col-span-1">
          <div className="sticky top-8">
            <TableOfContents content={post.content} />
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div 
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <Tag size={16} />
                <span className="font-medium">Tags</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Share Buttons */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold mb-4">Share this post</h3>
            <ShareButtons title={post.title} url={`/blog/${post.slug}`} />
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <RelatedPosts posts={relatedPosts} />
        </div>
      )}
    </article>
  )
}
