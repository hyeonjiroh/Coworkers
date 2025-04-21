import './globals.css';

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
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomToastContainer />
        {children}
      </body>
    </html>
  );
}
