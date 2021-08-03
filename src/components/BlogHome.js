/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './BlogHome.module.scss';

import BlogThumb from './Blog-thumb';
import Footer from './Footer';

const BlogHome = ({ articles }) => {
  // console.log(articles)
  const [blogArticles, setBlogArticles] = useState(articles);

  const handleJsClick = () => {
    const newArticleList = articles.filter(
      (article) => article.category.category === 'javascript'
    );
    setBlogArticles(newArticleList);
  };

  const handleCSSClick = () => {
    const newArticleList = articles.filter(
      (article) => article.category.category === 'css'
    );
    setBlogArticles(newArticleList);
  };

  const handleNodeClick = () => {
    const newArticleList = articles.filter(
      (article) => article.category.category === 'nodejs'
    );
    setBlogArticles(newArticleList);
  };

  const handleReactClick = () => {
    const newArticleList = articles.filter(
      (article) => article.category.category === 'react'
    );
    setBlogArticles(newArticleList);
  };

  return (
    <>
      {/* navbar  */}
      <nav className="flex items-center justify-between px-3 mt-2 sm:px-8 md:px-12 lg:px-48 xl:px-56 2xl:px-72">
        <h1 className="text-4xl font-bold">
          {/* <Link href={'/'}> */}
          <a href="/">ai blogs</a>
          {/* </Link> */}
        </h1>
        <div className="text-lg">
          <Link href={'/about-me'}>
            <a>About Me</a>
          </Link>
        </div>
      </nav>
      {/* categories */}

      <section className="flex flex-wrap gap-2 justify-center px-3 mt-20">
        <div onClick={handleJsClick} className={styles.js}>
          #javascript
        </div>
        <div onClick={handleReactClick} className={styles.react}>
          #react
        </div>
        <div onClick={handleNodeClick} className={styles.nodejs}>
          #nodejs
        </div>
        <div onClick={handleCSSClick} className={styles.css}>
          #css
        </div>
      </section>

      {/* posts */}

      {blogArticles.length == 0 ? (
        <p className="text-center text-2xl font-bold mt-8">No articles😿</p>
      ) : (
        ''
      )}

      <section className="flex flex-col items-center">
        {blogArticles.map((article) => (
          <Link key={article.id} href={`/articles/${article.slug}`}>
            <a className="w-max">
              <BlogThumb post={article} />
            </a>
          </Link>
        ))}
      </section>
      <Footer />
    </>
  );
};

export default BlogHome;
