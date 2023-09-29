import Link from 'next/link';
import React from 'react';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

const Index = ({ globalData }) => {
  return (
    <>
      <SEO
        title={'404 - ' + globalData.name}
        description={globalData.blogTitle}
      />

      <div>
        <div></div>
        <main>
          <div>
            Ahh Great you found it, now go back to{' '}
            <Link href={'/'}>
              <span>Home</span>
            </Link>{' '}
            page
          </div>
        </main>
      </div>
    </>
  );
};

export default Index;

export async function getStaticProps({ locale }) {
  const globalData = getGlobalData();
  return {
    props: {
      globalData,
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}
