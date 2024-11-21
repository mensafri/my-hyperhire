import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ClientWrapper from '@/components/ClientWrapper';

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
  title: 'Hyperhire',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url('/bg.png')]  bg-repeat flex flex-col gap-12`}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
