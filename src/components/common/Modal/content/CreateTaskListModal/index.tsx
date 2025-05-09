import { useState, useEffect } from 'react';
import { useModalStore } from '@/store/useModalStore';
import InputBase from '@/components/common/Input/InputBase';

export default function CreateTaskListModal() {
  const [name, setName] = useState('');
  const [isSubmitValid, setIsSubmitValid] = useState(false);

  const { setRequestBody, setIsButtonDisabled } = useModalStore();

  useEffect(() => {
    const trimmedName = name.trim();

    if (trimmedName !== '') {
      setIsSubmitValid(true);
    } else {
      setIsSubmitValid(false);
    }

    setRequestBody({
      name: trimmedName,
    });
  }, [name]);

  useEffect(() => {
    setIsButtonDisabled(!isSubmitValid);
  }, [isSubmitValid]);

  return (
    <div>
      <InputBase
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="목록 이름을 입력해주세요."
      />
    </div>
  );
}
