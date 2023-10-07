import { useEffect } from 'react';
import SEO from './SEO';
import Footer from './Footer';
import Navbar from './Navbar';
import { useRouter } from 'next/router';

export default function Layout({ globalData, children }) {
  const router = useRouter();
  const { locale } = router;
  const setAppTheme = () => {
    const darkMode = localStorage.getItem('theme') === 'dark';
    const lightMode = localStorage.getItem('theme') === 'light';

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else if (lightMode) {
      document.documentElement.classList.remove('dark');
    }
    return;
  };

  const handleSystemThemeChange = () => {
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    darkQuery.onchange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    };
  };

  useEffect(() => {
    setAppTheme();
  }, []);

  useEffect(() => {
    handleSystemThemeChange();
  }, []);

  return (
    <div dir={locale == 'ar' ? 'rtl' : 'ltr'}>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Navbar />
      <div>{children}</div>
      <Footer copyrightText={globalData.footerText} />
    </div>
  );
}
