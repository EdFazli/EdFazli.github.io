import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import SearchBar from '@/components/SearchBar'
import CategoryFilter from '@/components/CategoryFilter'
import { BookOpen } from 'lucide-react'

export const metadata = {
  title: 'Blog',
  description: 'Technical articles about software development, cloud computing, and technology insights.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = Array.from(new Set(posts.flatMap(post => post.categories)))

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Technical insights, tutorials, and thoughts on software development and technology.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <SearchBar />
        </div>
        <div className="md:w-64">
          <CategoryFilter categories={categories} />
        </div>
      </div>

      {/* Posts Grid */}
      {posts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="card text-center py-12">
          <BookOpen size={48} className="mx-auto mb-4 text-gray-400" />
          <h3 className="text-xl font-semibold mb-2">No posts found</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}

      {/* Stats */}
      <div className="card">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              {posts.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Total Posts</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              {categories.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Categories</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              {Math.round(posts.reduce((acc, post) => acc + post.readingTime, 0) / posts.length) || 0}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Avg. Read Time</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              {new Date().getFullYear() - 2023}+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Years Writing</div>
          </div>
        </div>
      </div>
    </div>
  )
}
