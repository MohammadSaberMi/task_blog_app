import Link from 'next/link';
import { Post as PostType } from '@/lib/posts';

interface PostProps {
  post: PostType;
  isListing?: boolean;
}

export default function Post({ post, isListing = true }: PostProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('fa-IR', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit'
  });

  return (
    <article
      className={`p-6 border rounded-lg shadow-md ${
        !isListing ? 'max-w-3xl mx-auto' : ''
      }`}
    >
      <header className="mb-4">
        <h2
          className={`text-2xl font-semibold ${
            isListing ? 'hover:text-blue-600' : ''
          }`}
        >
          {isListing ? (
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          ) : (
            post.title
          )}
        </h2>
        <p className="text-sm text-gray-500">{formattedDate}</p>
        {post.tags && post.tags.length > 0 && (
          <div className="mt-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      {isListing ? (
        <p>{post.excerpt}</p>
      ) : (
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="prose dark:prose-invert max-w-none"
        />
      )}
      {isListing && (
        <Link
          href={`/posts/${post.slug}`}
          className="text-blue-500 hover:underline mt-4 inline-block"
        >
          ادامه مطلب
        </Link>
      )}
    </article>
  );
}
