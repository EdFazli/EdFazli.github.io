'use client'

import { Share2, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react'

interface ShareButtonsProps {
  title: string
  url: string
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const fullUrl = typeof window !== 'undefined' ? `${window.location.origin}${url}` : url
  
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl)
      // You could add a toast notification here
      console.log('URL copied to clipboard')
    } catch (err) {
      console.error('Failed to copy URL:', err)
    }
  }

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title,
          url: fullUrl,
        })
      } catch (err) {
        console.error('Error sharing:', err)
      }
    }
  }

  const hasNativeShare = typeof navigator !== 'undefined' && 'share' in navigator

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Share:</span>
      
      {hasNativeShare && (
        <button
          onClick={handleNativeShare}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Share"
        >
          <Share2 size={16} />
        </button>
      )}
      
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter size={16} />
      </a>
      
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={16} />
      </a>
      
      <button
        onClick={copyToClipboard}
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Copy link"
      >
        <LinkIcon size={16} />
      </button>
    </div>
  )
}
