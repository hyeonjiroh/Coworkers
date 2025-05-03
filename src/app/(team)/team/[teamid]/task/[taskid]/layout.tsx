import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="tablet:p-10 relative min-h-screen p-6">{children}</div>
  );
}
