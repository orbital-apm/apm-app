import React from 'react';

import PageHeader from '@/components/pageHeader/PageHeader';
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
        <PageHeader />
        {auth}
        {children}
      </body>
    </html>
  );
}
