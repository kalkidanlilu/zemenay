import { getAllPosts } from '@/lib/getAllPosts';
import { BlogList } from '@/components/BlogList';

export default function TagPage({ params }: { params: { tag: string } }) {
  const posts = getAllPosts().filter((post) =>
    post.tags.includes(params.tag)
  );

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Posts tagged with "{params.tag}"</h1>
      <BlogList posts={posts} />
    </main>
  );
}
