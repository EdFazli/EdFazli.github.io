'use client'

import { useEffect, useState } from 'react'
import { List } from 'lucide-react'

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Extract headings from HTML content
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = content
    
    const headingElements = tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6')
    const extractedHeadings: Heading[] = []
    
    headingElements.forEach((heading, index) => {
      const text = heading.textContent || ''
      const level = parseInt(heading.tagName.charAt(1))
      const id = `heading-${index}`
      
      // Add ID to the heading for linking
      heading.id = id
      
      extractedHeadings.push({ id, text, level })
    })
    
    setHeadings(extractedHeadings)
  }, [content])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0% -35% 0%' }
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <div className="card">
      <div className="flex items-center gap-2 mb-4">
        <List size={16} />
        <h3 className="font-semibold">Table of Contents</h3>
      </div>
      <nav>
        <ul className="space-y-2">
          {headings.map(({ id, text, level }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`block text-sm transition-colors duration-200 ${
                  activeId === id
                    ? 'text-primary-600 dark:text-primary-400 font-medium'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
                style={{ paddingLeft: `${(level - 1) * 12}px` }}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
