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
      {children}
      {sidePage}
    </div>
  );
}
