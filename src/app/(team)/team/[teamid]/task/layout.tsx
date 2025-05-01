import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="tablet:p-10 p-6">{children}</div>;
}
