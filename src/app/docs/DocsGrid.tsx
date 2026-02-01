'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import type { Doc } from '@/lib/docs'
import { FileText, BookOpen, Wrench, Zap } from 'lucide-react'

const categories = ['ALL', 'GETTING STARTED', 'API', 'GUIDES', 'TOOLS']

const categoryIcons: Record<string, any> = {
  'GETTING STARTED': BookOpen,
  'API': FileText,
  'GUIDES': Zap,
  'TOOLS': Wrench,
}

export default function DocsGrid({ docs }: { docs: Doc[] }) {
  const [activeCategory, setActiveCategory] = useState('ALL')

  const filteredDocs = activeCategory === 'ALL' 
    ? docs 
    : docs.filter(doc => doc.category === activeCategory)

  return (
    <>
      {/* Category filters */}
      <section className="px-8 md:px-16 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs tracking-widest border rounded-full transition ${
                  activeCategory === cat
                    ? 'bg-white text-black border-white'
                    : 'border-neutral-800 hover:bg-white hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Docs Grid */}
      <section className="px-8 md:px-16 pb-32">
        <div className="max-w-6xl mx-auto">
          {filteredDocs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-neutral-500">No documentation in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocs.map((doc, i) => {
                const Icon = categoryIcons[doc.category] || FileText
                
                return (
                  <motion.article
                    key={doc.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link href={`/docs/${doc.slug}`} className="group block">
                      <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 h-full hover:border-neutral-700 transition-all duration-300">
                        <div className="mb-4">
                          <div className="inline-flex p-3 bg-neutral-800 rounded-xl mb-4 group-hover:bg-neutral-700 transition">
                            <Icon className="w-6 h-6 text-neutral-400 group-hover:text-white transition" />
                          </div>
                          <span className="block px-3 py-1 bg-neutral-800 rounded-full text-xs tracking-widest w-fit mb-4">
                            {doc.category}
                          </span>
                        </div>
                        
                        <h2 className="text-xl font-bold mb-3 group-hover:text-neutral-300 transition">
                          {doc.title}
                        </h2>
                        
                        <p className="text-neutral-400 text-sm mb-4 line-clamp-2">
                          {doc.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-neutral-600 mt-auto">
                          <span>Last updated</span>
                          <span>{new Date(doc.lastUpdated).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
