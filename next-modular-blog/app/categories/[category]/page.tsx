import { getAllPosts } from '@/lib/getAllPosts';
import { BlogList } from '@/components/BlogList';

export default function CategoryPage({ params }: { params: { category: string } }) {
  const posts = getAllPosts().filter(
    (post) => post.category.toLowerCase() === params.category.toLowerCase()
  );

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Category: {params.category}</h1>
      <BlogList posts={posts} />
    </main>
  );
}
