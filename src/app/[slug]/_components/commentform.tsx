'use client';

import { useState } from 'react';

export interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
}

interface CommentFormProps {
  postId: string;
  onCommentSubmitted: (newComment: Comment) => void;
}

const CommentForm = ({ postId, onCommentSubmitted }: CommentFormProps) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!author || !text) {
      setError('لطفاً تمام فیلدها را پر کنید.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId, author, text })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'خطا در ارسال نظر');
      }

      const result = await response.json();
      onCommentSubmitted(result.comment);
      setAuthor('');
      setText('');
    } catch (err) {
      console.error('Comment submit error:', err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('خطایی غیرمنتظره رخ داده است.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 p-6 bg-slate-700 rounded-lg shadow-md"
    >
      <h3 className="text-xl font-semibold mb-4 text-sky-300">نظرات</h3>
      {error && <p className="text-red-400 mb-3">{error}</p>}

      <div className="mb-4">
        <label
          htmlFor="author"
          className="block text-sm font-medium text-slate-300 mb-1"
        >
          نام خود را وارد کنید
        </label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          disabled={isSubmitting}
          className="w-full p-2 rounded-md bg-slate-800 border border-slate-600 focus:ring-sky-500 focus:border-sky-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="comment"
          className="block text-sm font-medium text-slate-300 mb-1"
        >
          نظر
        </label>
        <textarea
          id="comment"
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          disabled={isSubmitting}
          className="w-full p-2 rounded-md bg-slate-800 border border-slate-600 focus:ring-sky-500 focus:border-sky-500"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="px-6 py-2 bg-sky-500 hover:bg-sky-600 rounded-lg font-medium transition-colors disabled:opacity-50"
      >
        {isSubmitting ? 'در حال ارسال...' : 'ارسال نظر'}
      </button>
    </form>
  );
};

export default CommentForm;
