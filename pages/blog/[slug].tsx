// pages/blog/[slug].tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'

interface Post {
  frontMatter: {
    title: string
    date: string
    [key: string]: any
  }
  content: string
}

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), 'content', 'blog')
  const files = fs.readdirSync(postsDir).filter(f => /\.mdx?$/.test(f))

  const paths = files.map(file => ({
    params: { slug: file.replace(/\.mdx?$/, '') }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const postsDir = path.join(process.cwd(), 'content', 'blog')
  const fullPath = path.join(postsDir, `${params.slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data: frontMatter, content: markdown } = matter(fileContents)
  const content = marked(markdown)

  return {
    props: {
      frontMatter,
      content
    }
  }
}

export default function PostPage({ frontMatter, content }: Post) {
  return (
    <article className="prose mx-auto py-12">
      <h1>{frontMatter.title}</h1>
      <p className="text-sm text-gray-600 mb-8">
        {new Date(frontMatter.date).toLocaleDateString('en-GB')}
      </p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <p className="mt-12">
        <Link href="/blog" className="text-brand underline">
          ← Back to all posts
        </Link>
      </p>
    </article>
  )
}
