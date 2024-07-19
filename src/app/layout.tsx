import React from 'react';

import PageHeader from '@/components/pageHeader/PageHeader';
import Provider from '@/components/provider/Provider';
import '../styles/main.scss';

export default function RootLayout({
  auth,
  children,
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
        </Provider>
      </body>
    </html>
  );
}
