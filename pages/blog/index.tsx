// pages/blog/index.tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), 'content', 'blog')
  const files = fs.readdirSync(postsDir).filter(f => /\.mdx?$/.test(f))
  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx?$/, '')
    const raw = fs.readFileSync(path.join(postsDir, file), 'utf8')
    const { data } = matter(raw)
    return { slug, title: data.title, date: data.date }
  })

  return { props: { posts } }
}

export default function BlogPage({ posts }) {
  return (
    <div className="space-y-6 text-black">
      <h1 className="text-3xl font-bold">Blog</h1>
      <ul className="space-y-2">
        {posts.map(({ slug, title, date }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`} className="text-black no-underline">
              {title} ({date})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
