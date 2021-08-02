import React from 'react';
import Image from 'next/image';

const BlogThumb = ({ post }) => {
  const date = new Date(post.createdAt);
  const dateObj = {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  };

  return (
    <div className="text-center blog_thumb w-72 sm:w-96 mx-auto px-4 py-4 mt-6 md:flex md:items-center md:w-max ">
      <div className="md:w-72 md:text-left md:self-start">
        <h1 className="text-lg font-semibold">{post.title}</h1>
        <p className="font-semibold bog_thumb_date">{`${dateObj.day}-${dateObj.month}-${dateObj.year}`}</p>
        <p>{post.description}</p>
      </div>
      <div className="hidden md:block">
        <Image
          width="300px"
          height="140px"
          src={post.cover.formats.small.url}
          alt={post.title}
        />
      </div>
    </div>
  );
};

export default BlogThumb;
