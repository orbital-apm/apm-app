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
    <Provider>
      <html lang='en'>
        <body>
          <PageHeader />
          {auth}
          {children}
        </body>
      </html>
    </Provider>
  );
}
