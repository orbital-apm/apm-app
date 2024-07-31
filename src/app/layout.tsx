import React from 'react';

import PageHeader from '@/components/pageHeader/PageHeader';
import Provider from '@/components/provider/Provider';
import Footer from '@/components/footer/Footer';
import '../styles/main.scss';

export default function RootLayout({
  modal,
  children
}: Readonly<{
  modal: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className='content'>
            <PageHeader />
            {modal}
            {children}
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
