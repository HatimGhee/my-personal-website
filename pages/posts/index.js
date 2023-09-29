import Link from 'next/link';
import { getPosts } from '../../utils/mdx-utils';

import Layout from '../../components/Layout';
import ArrowIcon from '../../components/ArrowIcon';
import { getGlobalData } from '../../utils/global-data';

export default function Index({ posts, globalData }) {
  return (
    <Layout globalData={globalData}>
      <main>
        <h1>
          {globalData.blogTitle}
        </h1>
        <ul>
          {posts.map((post) => (
            <li
              key={post.filePath}
             >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a>
                  {post.data.date && (
                    <p>
                      {post.data.date}
                    </p>
                  )}
                  <h2>{post.data.title}</h2>
                  {post.data.description && (
                    <p>
                      {post.data.description}
                    </p>
                  )}
                  <ArrowIcon/>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const posts = getPosts();
  const globalData = getGlobalData();
  return {
    props: {
      globalData,
      posts,
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
