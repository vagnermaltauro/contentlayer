import { Analytics } from '@/components/analytics';
import { MainNav } from '@/components/main-nav';
import { ThemeProvider } from '@/components/theme-provider';

import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Contentlayer Nextjs 13',
  description: 'Template contentlayer with Nextjs 13 - by: Vagner Maltauro',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MainNav />
          <div className="max-w-2xl mx-auto py-10 px-4">
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
