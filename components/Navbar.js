import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href={'/'}>
        <a className="navbar-brand">
          Home
        </a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link href={'posts'}>
              <a className='nav-link'>
                Projects
              </a>
            </Link>
          </li>
          <li className="nav-item active">
            <div className="m-10">
              {locale === 'ar' ? (
                <button
                  className="nav-link"
                  type="button"
                  onClick={() => {
                    router.push({ pathname, query }, asPath, { locale: 'en' });
                  }}
                >
                  EN
                </button>
              ) : (
                <button
                  className="nav-link"
                  type="button"
                  onClick={() => {
                    router.push({ pathname, query }, asPath, { locale: 'ar' });
                  }}
                >
                  Ar
                </button>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
