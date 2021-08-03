/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Footer from '../components/Footer';

const AboutMe = () => {
  return (
    <>
      <div className=" sm:pl-14 pt-2 md:pl-24">
        <Link href={'/'}>
          <a className=" font-bold text-gray-500 hover:text-blue-500">
            {'👈'}Go back Home
          </a>
        </Link>
      </div>

      <section className=" about_me text-center flex flex-col justify-between mt-24 sm:pt-20  sm:mt-0">
        <div>
          <div>
            <img
              className=" mx-auto w-48"
              src="/ai-blog-about-me.png"
              alt="About me DP"
            />
          </div>
          <h1 className="font-bold text-4xl text-purple-400 mt-3">
            Hi, I am Arif
          </h1>
          <p className="font-bold text-4xl  mt-3">
            I design and develop websites.
          </p>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default AboutMe;
