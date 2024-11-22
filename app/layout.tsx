import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Anek_Telugu } from 'next/font/google';
import { Toaster } from 'sonner';

const anekTelugu = Anek_Telugu({
  subsets: ['latin'],
  variable: '--font-caption',
});

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Gaël Dewas - Développeur front-end',
  description: 'Portfolio de développeur',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-w-[320px]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anekTelugu.variable} font-sans antialiased min-w-[320px] overflow-x-hidden`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
