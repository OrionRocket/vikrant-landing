import { useEffect } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Insider Vikrant',
  description: 'Join Now for IPL match pass and World Cup updates',
};

export default function RootLayout({ children }) {
  useEffect(() => {
    // Function to load Facebook Pixel
    const loadFacebookPixel = () => {
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        'script',
        'https://connect.facebook.net/en_US/fbevents.js'
      );

      window.fbq('init', '412348771820889');
      window.fbq('track', 'PageView');
    };

    // Load the script only if it hasn't been loaded yet
    if (!window.fbq) {
      loadFacebookPixel();
    }
  }, []);

  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <noscript>
          <img
            height='1'
            width='1'
            style={{ display: 'none' }}
            src='https://www.facebook.com/tr?id=412348771820889&ev=PageView&noscript=1'
            alt='Facebook Pixel'
          />
        </noscript>
      </body>
    </html>
  );
}
