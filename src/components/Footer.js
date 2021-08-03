/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image'

const Footer = () => {
  return (
    <div className=" text-center mt-12 py-5 md:grid md:grid-cols-3 md:items-center lg:px-28 xl:px-44 bg-red-300 bottom-0 static">
      <h1 className="font-bold text-3xl">
        <Link href={'/'}>
          <a>ai blogs</a>
        </Link>
      </h1>
      <p className="font-bold text-gray-800 mt-2">
        All rights reserved to ai-blogs
      </p>
      <div className="mx-auto  justify-between flex mt-4 items-center w-44 ">
        <div>
          <a href="https://twitter.com/aidevv_in">
            <Image width="40px" height="35px" src="/twitter.png" alt="Twitter Logo" />
          </a>
        </div>
        <div>
          <a href="https://github.com/arifimran5">
            <Image width="40px" height="40px" src="/github.png" alt="Github Logo" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/arifimran5/">
            <Image width="40px" height="40px" src="/linkedin.png" alt="LinkedIn Logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
