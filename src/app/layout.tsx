import React from 'react';

import PageHeader from '@/components/pageHeader/PageHeader';
import '../styles/main.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <PageHeader />
        {children}
      </body>
    </html>
  );
}
