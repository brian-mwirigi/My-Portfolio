import { notFound } from 'next/navigation'
import { getDocBySlug, getAllSlugs } from '@/lib/docs'
import DocContent from './DocContent'

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default function DocPage({ params }: { params: { slug: string } }) {
  const doc = getDocBySlug(params.slug)

  if (!doc) {
    notFound()
  }

  return <DocContent doc={doc} />
}
