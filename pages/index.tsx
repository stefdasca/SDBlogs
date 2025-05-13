// pages/index.tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { FaInstagram, FaFacebook, FaGlobe } from 'react-icons/fa'

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), 'content', 'blog')
  const files = fs.readdirSync(postsDir).filter(f => /\.mdx?$/.test(f))
  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx?$/, '')
    const raw = fs.readFileSync(path.join(postsDir, file), 'utf8')
    const { data } = matter(raw)
    return { slug, title: data.title, date: data.date, description: data.description ?? null }
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return { props: { recent: posts.slice(0, 3) } }
}

export default function Home({ recent }) {
  return (
    <section className="w-full text-center space-y-12 pt-16">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Welcome to SDBlogs</h1>
        <p className="text-lg">
          A blog where I’ll write about anything—mostly sports, tech, travel, and life. Curated by{' '}
          <a href="https://stefdasca.ro" target="_blank" rel="noopener noreferrer" className="text-brand underline">
            Stefan
          </a>.
        </p>
        <Link href="/blog" className="text-brand underline">Go to Blog →</Link>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold">Latest Posts</h2>
        {recent.length === 0 ? (
          <p className="mt-4 text-gray-600">No posts yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {recent.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block p-4 border border-brand rounded hover:shadow-lg hover:shadow-brand/20">
                <h3 className="text-xl font-medium">{post.title}</h3>
                <p className="text-sm text-gray-600">{new Date(post.date).toLocaleDateString('en-GB')}</p>
                {post.description && <p className="mt-2 text-gray-800">{post.description}</p>}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div>
        <h2 className="text-2xl font-semibold pt-36">Find me on</h2>
        <div className="flex justify-center space-x-6 mt-2 text-2xl">
          <a href="https://instagram.com/yourInstagramHandle" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://facebook.com/yourFacebookPage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" aria-label="Website">
            <FaGlobe />
          </a>
        </div>
      </div>
    </section>
  )
}
