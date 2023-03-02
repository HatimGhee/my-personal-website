import Layout from '../components/Layout';
import { getGlobalData } from '../utils/global-data';

export default function Index({ globalData }) {
  return (
    <Layout globalData={globalData}>
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12"></h1>
      </main>
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();
  return {
    props: { globalData },
  };
}
