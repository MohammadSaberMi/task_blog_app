'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { Post } from '@/types';

interface BlogSearchProps {
  posts: Post[];
}

export default function BlogSearch({ posts }: BlogSearchProps) {
  const [query, setQuery] = useState('');

  const filteredPosts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.content.toLowerCase().includes(q)
    );
  }, [query, posts]);

  return (
    <div>
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="جستجو در پست‌ها..."
          className="w-full max-w-md px-4 py-2 rounded-lg border border-slate-600 bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.length === 0 ? (
          <p className="col-span-full text-center text-slate-400">
            هیچ پستی پیدا نشد.
          </p>
        ) : (
          filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-sky-500/30 transition-shadow duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-3 text-sky-400">
                <Link href={`/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h3>
              <p className="text-slate-400 text-sm mb-2">
                {new Date(post.date).toLocaleDateString('fa-IR', {
                  year: '2-digit',
                  month: '2-digit',
                  day: '2-digit'
                })}
              </p>
              <p className="text-slate-300 mb-4 flex-grow">{post.excerpt}</p>
              <Link
                href={`/${post.slug}`}
                className="flex items-center gap-1 text-gray-200 font-normal hover:text-blue-500 transition-colors cursor-pointer"
              >
                مطالعه مقاله
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.62234 9.7822C3.12589 11.8987 3.12589 14.1013 3.62234 16.2178C4.33929 19.2742 6.72578 21.6607 9.78223 22.3776C11.8987 22.8741 14.1013 22.8741 16.2178 22.3776C19.2742 21.6607 21.6607 19.2742 22.3777 16.2177C22.8741 14.1013 22.8741 11.8987 22.3777 9.7822C21.6607 6.72575 19.2742 4.33925 16.2178 3.62231C14.1013 3.12586 11.8987 3.12586 9.78223 3.62231C6.72578 4.33925 4.33929 6.72575 3.62234 9.7822ZM12.3872 16.0169C12.1529 16.2512 11.773 16.2512 11.5387 16.0169L8.94603 13.4243C8.83351 13.3117 8.7703 13.1591 8.7703 13C8.7703 12.8409 8.83351 12.6883 8.94603 12.5757L11.5387 9.98309C11.773 9.74877 12.1529 9.74877 12.3872 9.98309C12.6215 10.2174 12.6215 10.5973 12.3872 10.8316L10.8188 12.4L16.6297 12.4C16.9611 12.4 17.2297 12.6686 17.2297 13C17.2297 13.3314 16.9611 13.6 16.6297 13.6L10.8188 13.6L12.3872 15.1684C12.6215 15.4027 12.6215 15.7826 12.3872 16.0169Z"
                    fill="#0c6cb6"
                  />
                </svg>
              </Link>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
