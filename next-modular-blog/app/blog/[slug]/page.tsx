import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import dynamic from 'next/dynamic';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  // Read the MDX file as raw text
  const filePath = path.join(process.cwd(), 'content/posts', `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');

  // Extract frontmatter metadata
  const { data } = matter(source);

  // Dynamically import the MDX file as a React component
  const PostContent = dynamic(() => import(`../../../content/posts/${slug}.mdx`));

  return (
    <article className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{data.date}</p>
      <PostContent />
    </article>
  );
}
