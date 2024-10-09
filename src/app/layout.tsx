import './globals.css';
import type { Metadata } from 'next';

import { Anek_Latin } from 'next/font/google';
import { cn } from '@/lib/utils';
import Menu from '@/components/containers/Menu';
import Footer from '@/components/containers/Footer';

const anek = Anek_Latin({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bipin Manandhar = Portfolio',
  description: 'My Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn('bg-background', anek.className)}>
        <Menu />

        <main className='min-h-screen'>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
