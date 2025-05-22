export interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  comments: Comment[];
}
