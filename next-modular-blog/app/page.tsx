import { getAllPosts } from '@/lib/getAllPosts';
import { BlogList } from '@/components/BlogList';

export default function HomePage() {
  const posts = getAllPosts();
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <BlogList posts={posts} />
    </main>
  );
}
