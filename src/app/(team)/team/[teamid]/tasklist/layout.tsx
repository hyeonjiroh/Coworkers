import { ReactNode } from 'react';

export default function Layout({
  children,
  sidePage,
}: {
  children: ReactNode;
  sidePage: ReactNode;
}) {
  return (
    <div>
      <main className="laptop:py-10 tablet:p-6 relative min-h-[calc(100vh-60px)] px-4 py-6">
        {children}
      </main>
      {sidePage}
    </div>
  );
}
