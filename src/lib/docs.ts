import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const docsDirectory = path.join(process.cwd(), 'content/docs')

export interface Doc {
  slug: string
  title: string
  excerpt: string
  category: string
  order: number
  content: string
  lastUpdated: string
}

export function getAllDocs(): Doc[] {
  // Check if directory exists
  if (!fs.existsSync(docsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(docsDirectory)
  const allDocs = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(docsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        category: data.category,
        order: data.order || 999,
        lastUpdated: data.lastUpdated,
        content,
      }
    })

  // Sort by order
  return allDocs.sort((a, b) => a.order - b.order)
}

export function getDocBySlug(slug: string): Doc | null {
  try {
    const fullPath = path.join(docsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      category: data.category,
      order: data.order || 999,
      lastUpdated: data.lastUpdated,
      content,
    }
  } catch {
    return null
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(docsDirectory)) {
    return []
  }
  
  const fileNames = fs.readdirSync(docsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''))
}

export function getDocsByCategory(category: string): Doc[] {
  const allDocs = getAllDocs()
  return allDocs.filter(doc => doc.category === category)
}
