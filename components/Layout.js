import classNames from 'classnames';
import { useEffect } from 'react';
import styles from './Layout.module.css';
import SEO from './SEO';
import Header from './Header';
import Footer from './Footer';
import SideNav from './SideNav';
import { useRouter } from 'next/router';

export function GradientBackground({ variant, className }) {
  const classes = classNames(
    {
      [styles.colorBackground]: variant === 'large',
      [styles.colorBackgroundBottom]: variant === 'small',
    },
    className
  );

  return <div className={classes} />;
}

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
      <SideNav />
      <div className="relative pb-24 overflow-hidden">
        <div className="flex flex-col items-center max-w-2xl w-full mx-auto">
          <Header name={globalData.name} />
          {children}
          <Footer copyrightText={globalData.footerText} />
          <GradientBackground
            variant="large"
            className="fixed top-20 opacity-40 dark:opacity-60"
          />
          <GradientBackground
            variant="small"
            className="absolute bottom-0 opacity-20 dark:opacity-10"
          />
        </div>
      </div>
    </div>
  );
}
