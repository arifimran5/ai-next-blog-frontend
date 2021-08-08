import Head from 'next/head';
import Blog from '../../components/Blog';
// import { url } from '../../../config/next.config';

const BlogPage = ({ article }) => {
  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.title} />
        <link rel="icon" href="/aifavicon.svg" />
      </Head>
      <Blog article={article} />
    </>
  );
};

export const getStaticProps = async (context) => {
  const data = await fetch(`${process.env.backend_url}/articles?slug=${context.params.slug}`);

  const article = await data.json();
  return {
    props: {
      article: article[0],
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.backend_url}/articles`);
  const articles = await res.json();

  const paths = articles.map((item) => ({ params: { slug: item.slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default BlogPage;
