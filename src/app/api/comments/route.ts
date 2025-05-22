import { NextResponse } from 'next/server';
import type { Comment } from '@/types'; // Import the Comment type

const commentsByPostId: Record<string, Comment[]> = {};
export async function POST(request: Request) {
  try {
    const { postId, author, text } = await request.json();

    if (!postId || !author || !text) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newComment = {
      id: Date.now().toString(),
      author,
      text,
      date: new Date().toISOString()
    };

    if (!commentsByPostId[postId]) {
      commentsByPostId[postId] = [];
    }
    commentsByPostId[postId].push(newComment);

    console.log(`New comment for post ${postId}:`, newComment);
    console.log('All comments for post:', commentsByPostId[postId]);

    return NextResponse.json(
      { message: 'Comment submitted successfully', comment: newComment },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting comment:', error);
    return NextResponse.json(
      { message: 'Error submitting comment' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get('postId');

  if (!postId) {
    return NextResponse.json(
      { message: 'postId query parameter is required' },
      { status: 400 }
    );
  }

  const postComments = commentsByPostId[postId] || [];
  return NextResponse.json({ comments: postComments });
}
