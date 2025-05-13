// app/page.tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { FaInstagram, FaFacebook, FaGlobe } from 'react-icons/fa'

interface Post {
  slug: string
  title: string
  date: string
  description?: string
}

async function getPosts(): Promise<Post[]> {
  const postsDir = path.join(process.cwd(), 'content', 'blog')
  let files: string[] = []
  try {
    files = fs.readdirSync(postsDir)
  } catch {
    console.warn(`No posts found in ${postsDir}`)
    return []
  }

  const posts = files
    .filter((f) => /\.mdx?$/.test(f))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, '')
      const raw = fs.readFileSync(path.join(postsDir, file), 'utf8')
      const { data } = matter(raw)
      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
      }
    })

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export default async function Home() {
  const posts = await getPosts()
  const recent = posts.slice(0, 3)

  return (
    <section className="w-full text-center space-y-12 pt-20">
      {/* Hero */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Welcome to SDBlogs</h1>
        <p className="text-lg">
            A blog where I will write about almost anything, but mostly about sports, tech,
            travel, and life. Curated and written by{' '}
            <a
              href="https://stefdasca.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand underline"
            >
              Stefan
            </a>.
        </p>
        <Link href="/blog" className="text-brand-black-600 underline">
          Go to Blog →
        </Link>
      </div>

      {/* Latest 3 Posts */}
      <div>
        <h2 className="text-2xl font-semibold">Latest Posts</h2>
        {recent.length === 0 ? (
          <p className="mt-4 text-gray-600">No posts yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {recent.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-4 border rounded hover:shadow"
              >
                <h3 className="text-xl font-medium">{post.title}</h3>
                <p className="text-sm text-gray-600">
                  {new Date(post.date).toLocaleDateString()}
                </p>
                {post.description && (
                  <p className="mt-2 text-gray-800">{post.description}</p>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>

      

      {/* Social Links */}
      <div>
        <h2 className="text-2xl font-semibold pt-40">Find me on</h2>
        <div className="flex justify-center items-center space-x-6 mt-2 text-2xl">
          <a
            href="https://www.instagram.com/stefdasca/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/stefan.dascalescu.2013/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://stefdasca.ro/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Website"
          >
            <FaGlobe />
          </a>
        </div>
      </div>
    </section>
  )
}
