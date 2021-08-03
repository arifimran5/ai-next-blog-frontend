import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './Blog.module.scss';
import Footer from './Footer';

const Blog = ({ article }) => {
  const date = new Date(article.createdAt);
  const dateObj = {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  };
  return (
    <>
    <div className="pt-2 mb-10 px-3 sm:px-6 md:pr-10 md:px-20 lg:pl-32 lg:max-w-5xl xl:pl-44 xl:max-w-6xl">
      <Link href={'/'}>
        <a className="font-semibold text-gray-400 hover:text-blue-500">{'👈'}Go back Home</a>
      </Link>
      <h1 className="text-4xl font-bold mt-8 mb-3">{article.title}</h1>
      <div className="mb-3">
        <p className="font-semibold bog_thumb_date inline">{`${dateObj.day}-${dateObj.month}-${dateObj.year}`}</p>
        <p className="font-semibold text-lg text-gray-500  ml-4 inline">
          #{article.category.category}
        </p>
      </div>

      <Image
        width="500px"
        height="240px"
        src={article.cover.formats.small.url}
        alt=""
      />
      <ReactMarkdown className={styles.article_body}>
        {article.body}
      </ReactMarkdown>
    </div>
    <Footer/>
    </>
  );
};

export default Blog;
