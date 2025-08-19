import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  categories: string[]
  tags: string[]
  readingTime: number
}

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="card group hover:shadow-lg transition-shadow duration-300">
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
      
      <h2 className="text-xl font-bold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        <Link href={`/blog/${post.slug}`} className="block">
          {post.title}
        </Link>
      </h2>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {post.excerpt}
      </p>
      
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </div>
      
      <Link
        href={`/blog/${post.slug}`}
        className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium group-hover:gap-3 transition-all duration-200"
      >
        Read more
        <ArrowRight size={16} />
      </Link>
    </article>
  )
}
