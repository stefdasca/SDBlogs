import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

const postsDir = path.join(process.cwd(), 'content/blog');

export default function BlogPage() {
  const files = fs.readdirSync(postsDir);
  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, '');
    const content = fs.readFileSync(path.join(postsDir, file), 'utf-8');
    const { data } = matter(content);
    return { slug, title: data.title, date: data.date };
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      <ul className="space-y-2">
        {posts.map(({ slug, title, date }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`} className="text-brand-black">
              {title} ({date})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}