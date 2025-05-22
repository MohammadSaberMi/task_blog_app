'use client';

import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'next/navigation';
import type { Post, Comment } from '@/types';
import CommentForm from './_components/commentform';
import Spinner from '@/components/Spinner';

const getPosts = async (): Promise<Post[]> => {
  return [
    {
      slug: 'first-post',
      title: 'شروعی بر وبلاگ‌نویسی با Next.js',
      date: '1402/10/25',
      excerpt:
        'در این پست، سفری جذاب به دنیای وبلاگ‌نویسی با فریم‌ورک قدرتمند Next.js را آغاز می‌کنیم.',
      content: `
        <p>در این مقاله به بررسی مقدماتی ساخت یک وبلاگ ساده با استفاده از Next.js می‌پردازیم. هدف ما این است که با مفاهیم پایه مثل مسیرها، رندر سمت سرور و استفاده از استایل‌دهی با Tailwind آشنا شویم.</p>
        <p>استفاده از این فریم‌ورک توسعه را سریع‌تر و تجربه کاربری را روان‌تر می‌کند.</p>
      `,
      comments: []
    },
    {
      slug: 'second-post',
      title: 'نگاهی دقیق به امکانات جدید Next.js 14',
      date: '1402/10/30',
      excerpt:
        'در این مقاله، ویژگی‌های تازه نسخه 14 Next.js مانند React Server Components و بهبود در زمان Build را بررسی می‌کنیم.',
      content: `
        <p>نسخه جدید Next.js امکاناتی مانند بهبود در عملکرد SSR، پشتیبانی بهتر از Edge Functions و ساده‌سازی مسیرهای API را ارائه داده است.</p>
        <p>این نسخه تجربه توسعه‌دهنده را به شکل چشم‌گیری بهبود بخشیده است.</p>
      `,
      comments: [
        {
          id: 'c3',
          author: 'چارلی',
          text: 'خیلی مفید بود، ممنونم!',
          date: '1402/11/1'
        }
      ]
    },
    {
      slug: 'tailwind-tricks',
      title: '۵ ترفند کاربردی در Tailwind CSS',
      date: '1402/11/5',
      excerpt:
        'در این مقاله، چند ترفند کمتر شناخته‌شده در Tailwind را معرفی می‌کنیم که سرعت توسعه رابط کاربری را بالا می‌برند.',
      content: `
        <p>Tailwind CSS ابزار قدرتمندی برای طراحی رابط کاربری مدرن است. در این پست، با کلاس‌های ترکیبی، استفاده از theme و راهکارهایی برای کامپوننت‌سازی بهتر آشنا می‌شویم.</p>
      `,
      comments: []
    },
    {
      slug: 'another-tailwind-post',
      title: 'ترفندهای پیشرفته‌تر در Tailwind CSS',
      date: '1402/11/8',
      excerpt:
        'ادامه‌ای بر ترفندهای Tailwind CSS با تمرکز بر ساخت کامپوننت‌های پاسخ‌گو و ماژولار.',
      content: `
        <p>در این پست، یاد می‌گیریم چگونه با استفاده از @apply، فایل‌های CSS را ماژولار کنیم و از کلاس‌های شرطی برای ساخت رابط‌های پیچیده‌تر بهره ببریم.</p>
      `,
      comments: [
        {
          id: 'c4',
          author: 'دیو',
          text: 'خیلی مفید بود، ممنون!',
          date: '1402/11/9'
        }
      ]
    },
    {
      slug: 'yet-another-tailwind-post',
      title: 'ورود به دنیای پیشرفته Tailwind CSS',
      date: '1402/11/12',
      excerpt:
        'با استفاده از قابلیت‌هایی مانند افزونه‌های سفارشی و بهینه‌سازی تولید، به سطح حرفه‌ای در Tailwind برسید.',
      content: `
        <p>در این مقاله، روش‌هایی برای سفارشی‌سازی تم‌ها، استفاده از pluginهای اختصاصی و بهینه‌سازی نهایی CSS برای عملکرد بهتر وب‌سایت را مرور می‌کنیم.</p>
      `,
      comments: []
    }
  ];
};

async function getPost(slug: string): Promise<Post | undefined> {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}

// interface PostPageProps {
//   params: { slug: string };
// }

export default function PostPage() {
  const [postData, setPostData] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : null;

  const localStorageKey = useMemo(() => {
    if (!slug) return null;
    return `comments_${slug}`;
  }, [slug]);

  useEffect(() => {
    if (!slug || !localStorageKey) {
      setError('Invalid post identifier or URL.');
      setIsLoading(false);
      setPostData(null);
      return;
    }

    const fetchPostAndComments = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const initialPost = await getPost(slug);
        if (!initialPost) {
          setError('Post not found.');
          setPostData(null);
          return;
        }

        const storedCommentsRaw = localStorage.getItem(localStorageKey);
        let storedComments: Comment[] = [];
        if (storedCommentsRaw) {
          try {
            storedComments = JSON.parse(storedCommentsRaw);
          } catch (e) {
            console.error('Failed to comments in  Local Storage', e);
            localStorage.removeItem(localStorageKey);
          }
        }

        const allComments = [...initialPost.comments];
        storedComments.forEach((storedComment) => {
          if (!allComments.find((c) => c.id === storedComment.id)) {
            allComments.push(storedComment);
          }
        });
        allComments.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        setPostData({ ...initialPost, comments: allComments });
      } catch (err) {
        console.error('Failed to fetch post or load comments', err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Failed to load post. Please try again later.');
        }
        setPostData(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPostAndComments();
  }, [slug, localStorageKey]);

  const handleCommentSubmitted = (newComment: Comment) => {
    if (!localStorageKey) {
      console.error('localStorage key isnt set, cannot save comment');
      return;
    }
    setPostData((prevPostData) => {
      if (!prevPostData) return null;
      const updatedComments = [...prevPostData.comments, newComment].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      try {
        localStorage.setItem(localStorageKey, JSON.stringify(updatedComments));
      } catch (e) {
        console.error('Failed to save comments to Local Storage', e);
      }

      return {
        ...prevPostData,
        comments: updatedComments
      };
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-slate-700">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-red-400 bg-slate-900 p-4">
        <p className="text-2xl mb-4">Error: {error}</p>
        <Link
          href="/"
          className="px-4 py-2 bg-sky-500 hover:bg-sky-600 rounded-lg text-white font-medium transition-colors"
        >
          بازگشت به صفحه اصلی وبلاگ
        </Link>
      </div>
    );
  }

  if (!postData || !slug) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-slate-900 p-4">
        <p className="text-2xl mb-4">پست یافت نشد یا آدرس نامعتبر است.</p>
        <Link
          href="/"
          className="px-4 py-2 bg-sky-500 hover:bg-sky-600 rounded-lg text-white font-medium transition-colors"
        >
          بازگشت به صفحه اصلی وبلاگ
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col">
      <header className="p-4 sm:p-6 border-b border-slate-700">
        <nav className="container mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-3xl font-extrabold hover:text-sky-400 transition-colors"
          >
            وبلاگ من
          </Link>
          <div className="flex py-1  px-2 bg-sky-800 hover:bg-sky-600 rounded-lg text-sm font-medium transition-colors  ">
            <Link
              href="/"
              className="flex rounded-lg text-sm font-medium transition-colors items-center justify-center "
            >
              {' '}
              <span className="cursor-pointer">بازگشت</span>
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
                  fill="#95b3ca"
                />
              </svg>
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <article className="bg-slate-800 p-6 sm:p-8 rounded-xl shadow-lg mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-sky-400 leading-tight">
            {postData.title}
          </h1>
          <p className="text-slate-400 text-md mb-6">
            منتشر شده در{' '}
            {new Date(postData.date).toLocaleDateString('fa-IR', {
              year: '2-digit',
              month: '2-digit',
              day: '2-digit'
            })}
          </p>

          <div
            className="prose prose-invert prose-lg max-w-none prose-p:text-slate-300 prose-headings:text-sky-400 prose-a:text-sky-500 hover:prose-a:text-sky-400 prose-strong:text-slate-100 prose-em:text-slate-200 prose-code:text-pink-400 prose-code:bg-slate-900 prose-code:p-1 prose-code:rounded-md prose-blockquote:border-sky-500 prose-blockquote:text-slate-300"
            dangerouslySetInnerHTML={{ __html: postData.content }}
          />
        </article>

        <section
          id="comments"
          className="bg-slate-800 p-6 sm:p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-sky-300">
            نظرات ({postData.comments.length})
          </h2>
          {postData.comments.length > 0 ? (
            <ul className="space-y-6">
              {postData.comments.map((comment) => (
                <li
                  key={comment.id}
                  className="p-4 bg-slate-700 rounded-lg shadow"
                >
                  <div className="flex justify-between items-center mb-1">
                    <p className="font-semibold text-sky-400">
                      {comment.author}
                    </p>
                    <p className="text-xs text-slate-400">
                      {new Date(comment.date).toLocaleDateString('fa-IR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                      ، ساعت&nbsp;
                      {new Date(comment.date).toLocaleTimeString('fa-IR', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  <p className="text-slate-300 whitespace-pre-wrap">
                    {comment.text}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-400">هیچ نظری ثبت نشده است!</p>
          )}

          <CommentForm
            postId={slug}
            onCommentSubmitted={handleCommentSubmitted}
          />
        </section>
      </main>
    </div>
  );
}
