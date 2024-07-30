import React from 'react';

import PageHeader from '@/components/pageHeader/PageHeader';
import Provider from '@/components/provider/Provider';
import Footer from '@/components/footer/Footer';
import '../styles/main.scss';

export default function RootLayout({
  auth,
  children
}: Readonly<{
  auth: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <PageHeader />
          {auth}
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
