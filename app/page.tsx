import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import { ArrowRight, BookOpen, Code, Zap } from 'lucide-react'

export default function Home() {
  const posts = getAllPosts().slice(0, 6) // Get latest 6 posts

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="gradient-text">Ed Fazli</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Software engineer passionate about building scalable solutions, 
          cloud architecture, and sharing knowledge through technical writing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/blog" className="btn-primary inline-flex items-center gap-2">
            <BookOpen size={20} />
            Read My Blog
            <ArrowRight size={16} />
          </Link>
          <Link href="/about" className="btn-secondary inline-flex items-center gap-2">
            Learn More About Me
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="card text-center">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Code className="text-primary-600 dark:text-primary-400" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Technical Insights</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Deep dives into software development, architecture patterns, and best practices.
          </p>
        </div>
        
        <div className="card text-center">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Zap className="text-primary-600 dark:text-primary-400" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Performance Focus</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Optimization techniques, performance monitoring, and scalability strategies.
          </p>
        </div>
        
        <div className="card text-center">
          <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-4">
            <BookOpen className="text-primary-600 dark:text-primary-400" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Practical Tutorials</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Step-by-step guides and real-world examples you can implement today.
          </p>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Latest Posts</h2>
          <Link 
            href="/blog" 
            className="text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center gap-1"
          >
            View all posts
            <ArrowRight size={16} />
          </Link>
        </div>
        
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="card text-center py-12">
            <BookOpen size={48} className="mx-auto mb-4 text-gray-400" />
            <h3 className="text-xl font-semibold mb-2">No posts yet</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Check back soon for new content!
            </p>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="card text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Get notified when I publish new articles about software development, 
          cloud computing, and technology insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button className="btn-primary">Subscribe</button>
        </div>
      </section>
    </div>
  )
}
