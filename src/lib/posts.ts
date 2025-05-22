export interface Post {
  id: string;
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: '1',
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    date: '2024-05-01',
    tags: ['Next.js', 'Web Development', 'JavaScript', 'React'],
    excerpt:
      'A beginner-friendly guide to setting up your first Next.js project.',
    content: `
      <p>Next.js is a popular React framework for building server-rendered applications, static websites, and more. This guide will walk you through the initial setup and basic concepts.</p>
      <h3 class="mt-4 mb-2 text-xl font-semibold">Prerequisites</h3>
      <p>Ensure you have Node.js (version 18.x or later) and npm installed.</p>
      <h3 class="mt-4 mb-2 text-xl font-semibold">Installation</h3>
      <p>You can create a new Next.js app using the <code>create-next-app</code> CLI:</p>
      <pre><code class="language-bash">npx create-next-app@latest my-next-app --typescript --tailwind --eslint</code></pre>
      <p>This command sets up a new project with TypeScript, Tailwind CSS, and ESLint configured.</p>
      <h3 class="mt-4 mb-2 text-xl font-semibold">Running the Development Server</h3>
      <p>Navigate to your project directory and run:</p>
      <pre><code class="language-bash">npm run dev</code></pre>
      <p>Your application will be available at <code>http://localhost:3000</code>.</p>
      <p class="mt-4">Happy coding!</p>
    `
  },
  {
    id: '2',
    slug: 'typescript-tips-and-tricks',
    title: 'TypeScript Tips and Tricks',
    date: '2024-05-10',
    tags: ['TypeScript', 'JavaScript', 'Web Development'],
    excerpt:
      'Boost your productivity with these useful TypeScript tips and tricks.',
    content: `
      <p>TypeScript enhances JavaScript with static typing, leading to more robust and maintainable code. Here are some tips to make the most of it:</p>
      <h3 class="mt-4 mb-2 text-xl font-semibold">1. Use Utility Types</h3>
      <p>TypeScript provides several utility types like <code>Partial&lt;T&gt;</code>, <code>Readonly&lt;T&gt;</code>, <code>Pick&lt;T, K&gt;</code>, and <code>Omit&lt;T, K&gt;</code> that can simplify common type transformations.</p>
      <h3 class="mt-4 mb-2 text-xl font-semibold">2. Leverage Enums for Constants</h3>
      <p>Enums allow you to define a set of named constants, making your code more readable and less prone to errors from magic strings or numbers.</p>
      <pre><code class="language-typescript">
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
      </code></pre>
      <h3 class="mt-4 mb-2 text-xl font-semibold">3. Understand Type Inference</h3>
      <p>TypeScript often infers types, reducing the need for explicit annotations. However, be explicit in function return types and public APIs for clarity.</p>
      <p class="mt-4">These are just a few tips. The TypeScript documentation is an excellent resource for more in-depth learning.</p>
    `
  },
  {
    id: '3',
    slug: 'mastering-tailwind-css',
    title: 'Mastering Tailwind CSS',
    date: '2024-05-15',
    tags: ['Tailwind CSS', 'CSS', 'Web Design', 'Frontend'],
    excerpt:
      'Learn how to effectively use Tailwind CSS to build modern user interfaces rapidly.',
    content: `
      <p>Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without writing custom CSS.</p>
      <h3 class="mt-4 mb-2 text-xl font-semibold">Core Concepts</h3>
      <p>Understand utility classes, responsive design prefixes (<code>sm:</code>, <code>md:</code>, <code>lg:</code>), and state variants (<code>hover:</code>, <code>focus:</code>).</p>
      <h3 class="mt-4 mb-2 text-xl font-semibold">Customization</h3>
      <p>Tailwind is highly customizable via its <code>tailwind.config.js</code> file. You can extend the default theme, add plugins, and more.</p>
      <h3 class="mt-4 mb-2 text-xl font-semibold">Component-Based Approach</h3>
      <p>While utility-first, you can still create reusable components by extracting common class patterns using <code>@apply</code> or by creating JavaScript/React/Vue components.</p>
      <p class="mt-4">Tailwind's documentation is comprehensive and a great place to start mastering its features.</p>
    `
  },
  {
    id: '4',
    slug: 'react-hooks-deep-dive',
    title: 'React Hooks: A Deep Dive',
    date: '2024-05-20',
    tags: ['React', 'JavaScript', 'Frontend', 'Hooks'],
    excerpt:
      'Explore the power and flexibility of React Hooks for managing state and side effects in functional components.',
    content: `
      <p>React Hooks, introduced in React 16.8, allow you to use state and other React features without writing a class. Let's explore some key hooks.</p>
      <h3 class="mt-4 mb-2 text-xl font-semibold">useState</h3>
      <p>The <code>useState</code> hook lets you add React state to function components. It returns a pair: the current state value and a function that lets you update it.</p>
      <h3 class="mt-4 mb-2 text-xl font-semibold">useEffect</h3>
      <p>The <code>useEffect</code> hook lets you perform side effects in function components. It's a close replacement for <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code>.</p>
      <h3 class="mt-4 mb-2 text-xl font-semibold">useContext</h3>
      <p>The <code>useContext</code> hook accepts a context object (the value returned from <code>React.createContext</code>) and returns the current context value for that context.</p>
      <h3 class="mt-4 mb-2 text-xl font-semibold">Custom Hooks</h3>
      <p>You can also create your own custom Hooks to reuse stateful logic between different components.</p>
      <p class="mt-4">Hooks have revolutionized how we write React components, making them more concise and easier to reason about.</p>
    `
  }
];

export const getAllPosts = (): Post[] => {
  return posts;
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find((post) => post.slug === slug);
};
