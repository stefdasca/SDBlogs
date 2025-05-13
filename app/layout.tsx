import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'SDBlogs',
  description: 'Sports, Tech, Travel, Life — by SD.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brand-light text-brand-black font-sans">
        <main className="max-w-5xl mx-auto p-4 pt-20">{children}</main>
      </body>
    </html>
  );
}