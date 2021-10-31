import Head from 'next/head';
import BlogHome from '../components/BlogHome';
// import {url} from '../../config/next.config.js'

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>ai-blogs</title>
        <meta name="description" content="A blog about development and problem solving by arif" />
        <link rel="icon" href="/aifavicon.svg" />
      </Head>
      <BlogHome articles={articles} />
    </>
  );
}

export const getStaticProps = async () => {
  const data = await fetch(
    `${process.env.backend_url}/articles?_sort=createdAt:DESC`
  );

  const articles = await data.json();
  return {
    props: {
      articles: articles,
    },
    revalidate: 60,
  };
};
