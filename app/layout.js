'use client';
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
    // Create script element
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    script.onload = () => {
      // Initialize Facebook Pixel
      window.fbq('init', '412348771820889');
      window.fbq('track', 'PageView');
    };

    // Insert the script into the DOM
    document.head.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
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
