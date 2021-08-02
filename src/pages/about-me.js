import Link from 'next/link';

const AboutMe = () => {
  return (
    <>
      <Link href={'/'}>
        <a>Go back Home</a>
      </Link>
      <h1 className="text-center text-8xl font-bold">Hello I am Arif</h1>
    </>
  );
};

export default AboutMe;
