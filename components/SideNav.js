import { useRouter } from 'next/router';
import ThemeSwitcher from './ThemeSwitcher';
import Link from 'next/link';

const SideNav = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'about'}>About</Link>
          </li>
          <li>
            <Link href={'services'}>Services</Link>
          </li>
          <li>
            <Link href={'contact'}>Contact</Link>
          </li>
          <li>
            <Link href={'work'}>Work</Link>
          </li>
          <li>
            <Link href={'posts'}>Posts</Link>
          </li>
          <li>
            <ThemeSwitcher />
          </li>
          <li>
            <div className="m-10">
              {locale === 'ar' ? (
                <button
                  type="button"
                  onClick={() => {
                    router.push({ pathname, query }, asPath, { locale: 'en' });
                  }}
                >
                  English
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    router.push({ pathname, query }, asPath, { locale: 'ar' });
                  }}
                >
                  العربية
                </button>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
