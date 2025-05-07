import '@/app/styles/globals.css';
import localFont from 'next/font/local';
import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Toast from '@/components/common/Toast';
import Modal from '@/components/common/Modal';
import Providers from '@/app/Providers';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
  weight: '300 400 500 600 700',
});

export const metadata: Metadata = {
  title: 'Coworkers',
  description: '업무 배정 및 현황 공유 서비스',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className="antialiased">
        <Providers>
          <Toast />
          <Modal />
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
