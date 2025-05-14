'use client';
import { useEffect, useRef, useState } from 'react';

const BreakEmail = ({ email }: { email: string }) => {
  const [shouldBreak, setShouldBreak] = useState<null | boolean>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const wrapper = wrapperRef.current;
      const text = textRef.current;
      if (!wrapper || !text) return;

      const isOverflowing = text.scrollWidth > wrapper.clientWidth;
      setShouldBreak(isOverflowing);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [email]);

  const [local, domain] = email.includes('@') ? email.split('@') : [email];

  return (
    <div ref={wrapperRef} className="relative w-full leading-tight">
      <span
        ref={textRef}
        className="text-xs-regular block h-0 overflow-visible whitespace-nowrap opacity-0"
      >
        {email}
      </span>

      {shouldBreak && email.includes('@') ? (
        <p className="text-xs-regular break-words whitespace-pre-wrap text-slate-300">
          {local}
          {'\n'}@{domain}
        </p>
      ) : (
        <span className="text-xs-regular block truncate text-slate-300">
          {email}
        </span>
      )}
    </div>
  );
};

export default BreakEmail;
