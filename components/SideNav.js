import { useRouter } from 'next/router';
import ThemeSwitcher from './ThemeSwitcher';
import Link from 'next/link';

const SideNav = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
  return (
    <aside className="w-full md:w-20">
      <nav>
        <ul>
          <li className="underline hover:text-gray-500">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="underline hover:text-gray-500">
            <Link href={'about'}>About</Link>
          </li>
          <li className="underline hover:text-gray-500">
            <Link href={'services'}>Services</Link>
          </li>
          <li className="underline hover:text-gray-500">
            <Link href={'contact'}>Contact</Link>
          </li>
          <li className="underline hover:text-gray-500">
            <Link href={'work'}>Work</Link>
          </li>
          <li className="underline hover:text-gray-500">
            <Link href={'posts'}>Blogs</Link>
          </li>
          <li>
            <ThemeSwitcher />
          </li>
          <li>
            <div className="m-10">
              {locale === 'ar' ? (
                <button
                  className="underline hover:text-blue-600"
                  type="button"
                  onClick={() => {
                    router.push({ pathname, query }, asPath, { locale: 'en' });
                  }}
                >
                  English
                </button>
              ) : (
                <button
                  className="underline hover:text-blue-600"
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
