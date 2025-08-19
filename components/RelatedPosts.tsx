import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { Calendar, ArrowRight } from 'lucide-react'

interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
  categories: string[]
  readingTime: number
}

interface RelatedPostsProps {
  posts: Post[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="card group hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-wrap gap-2 mb-3">
              {post.categories.slice(0, 2).map((category) => (
                <span
                  key={category}
                  className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded text-xs font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
            
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
              <div className="flex items-center gap-1">
                <Calendar size={12} />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <span>{post.readingTime} min read</span>
            </div>
            
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium group-hover:gap-2 transition-all duration-200"
            >
              Read more
              <ArrowRight size={14} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
