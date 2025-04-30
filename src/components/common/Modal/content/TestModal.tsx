import { useModalStore } from '@/store/useModalStore';
import { useEffect, useState } from 'react';

export default function TestModal() {
  const { setIsButtonDisabled } = useModalStore();
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsButtonDisabled(!isFormValid);
  }, [isFormValid]);

  return (
    <div>
      <button
        onClick={() => {
          setIsFormValid(!isFormValid);
        }}
      >
        폼 유효성
      </button>
    </div>
  );
}
