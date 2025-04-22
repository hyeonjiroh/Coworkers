import './globals.css';

import { Montserrat } from 'next/font/google';
// import type { Metadata } from 'next';
import localFont from 'next/font/local';

import CustomToastContainer from '@/components/common/CustomToastContainer';

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
const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
  weight: '300 400 500 600 700',
});
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
});

// export const metadata: Metadata = {
//   title: 'Coworkers',
//   description: '업무 배정 및 현황 공유 서비스',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} ${montserrat.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomToastContainer />
        {children}
      </body>
    </html>
  );
}
