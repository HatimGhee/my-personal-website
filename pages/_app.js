import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import { NextIntlProvider } from 'next-intl';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextIntlProvider
        formats={{
          dateTime: {
            short: {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            },
          },
        }}
        now={new Date(pageProps.now)}
        timeZone="Asia/Kuwait"
        messages={pageProps.messages}
      >
        <span className="theme-bejamas" />
        <Component {...pageProps} />
      </NextIntlProvider>
    </>
  );
}

export default MyApp;
