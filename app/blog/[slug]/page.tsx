import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/blog'));
  return files.map((file) => ({ slug: file.replace(/\.md$/, '') }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'content/blog', `${params.slug}.md`);
  const file = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(file);
  const html = marked(content);

  return (
    <article className="prose lg:prose-xl max-w-none">
      <h1>{data.title}</h1>
      <p className="text-sm text-brand-black-500">{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}