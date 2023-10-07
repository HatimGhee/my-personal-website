import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "../styles/globals.css";
import 'prismjs/themes/prism-tomorrow.css';
import { NextIntlProvider } from 'next-intl';
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
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
        <span/>
        <Component {...pageProps} />
      </NextIntlProvider>
    </>
  );
}

export default MyApp;
