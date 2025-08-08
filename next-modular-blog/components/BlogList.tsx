import Link from 'next/link';

export function BlogList({ posts }: { posts: any[] }) {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <div key={post.slug} className="border p-4 rounded">
          <Link href={`/blog/${post.slug}`}>
            <h2 className="text-xl font-bold">{post.title}</h2>
          </Link>
          <p className="text-sm text-gray-500">{post.date}</p>

          <div className="mt-2 flex flex-wrap gap-2">
            <Link
              href={`/categories/${post.category}`}
              className="text-blue-600 text-sm underline"
            >
              {post.category}
            </Link>

            {post.tags.map((tag: string) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="text-sm bg-gray-200 px-2 py-1 rounded"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
