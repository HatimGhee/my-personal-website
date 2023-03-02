import Link from 'next/link';
import { GradientBackground } from '../components/Layout';
import React from 'react';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

const Index = ({ globalData }) => {
  return (
    <>
      <SEO title={'404 - ' + globalData.name} description={globalData.blogTitle} />

      <div className="relative pb-24 overflow-hidden">
        <div className="flex flex-col items-center max-w-2xl w-full mx-auto"></div>
          <main className="text-center w-full">
            <div>
              Ahh Great you found it, now go back to{' '}
              <Link href={'/'}>
                <span className="underline hover:cursor-pointer">Home</span>
              </Link>{' '}
              page
            </div>
          </main>
          <GradientBackground
            variant="large"
            className="fixed top-20 opacity-40 dark:opacity-60"
          />
          <GradientBackground
            variant="small"
            className="absolute bottom-0 opacity-20 dark:opacity-10"
          />
      </div>
    </>
  );
};

export default Index;

export function getStaticProps() {
  const globalData = getGlobalData();
  return {
    props: { globalData },
  };
}
