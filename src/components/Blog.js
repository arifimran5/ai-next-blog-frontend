import Link from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const Blog = ({ article }) => {
  return (
    <div>
      <Link href={'/'}>Go back Home</Link>
      <h1 className="text-4xl font-bold">{article.title}</h1>
      <ReactMarkdown>{article.body}</ReactMarkdown>
    </div>
  );
};

export default Blog;
