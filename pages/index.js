import Layout from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import { useTranslations } from 'next-intl';

export default function Index({ globalData }) {
  const t = useTranslations('website');
  return (
    <Layout globalData={globalData}>
      <main>
        <h1>{t('Home')}</h1>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  console.log('==================== home logging')
  const globalData = getGlobalData();
  return {
    props: {
      globalData,
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}
