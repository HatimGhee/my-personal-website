import Image from 'next/image';
import Layout from '../components/Layout';
import styles from './index.module.css';
import { getGlobalData } from '../utils/global-data';
import { useTranslations } from 'next-intl';

export default function Index({ globalData }) {
  const t = useTranslations('website');
  return (
    <Layout globalData={globalData}>
      <main>
        <div className={styles.card}>
          <Image
            width={'100%'}
            height={'100%'}
            alt="Hatim"
            src={'/images/hatim.png'}
          ></Image>
          <h1>Hatim Gheewala</h1>
          <p className={styles.title}>Software Engineer</p>
          <p></p>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const globalData = getGlobalData();
  return {
    props: {
      globalData,
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}
