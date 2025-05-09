import { useState, useEffect } from 'react';
import { useModalStore } from '@/store/useModalStore';
import InputBase from '@/components/common/Input/InputBase';

export default function EditTaskListModal({
  taskListName,
}: {
  taskListName: string;
}) {
  const [editedName, setEditedName] = useState(taskListName);
  const [isEditValid, setIsEditValid] = useState(false);

  const { setRequestBody, setIsButtonDisabled } = useModalStore();

  useEffect(() => {
    const trimmedName = editedName.trim();

    if (trimmedName !== '' && trimmedName !== taskListName) {
      setIsEditValid(true);
    } else {
      setIsEditValid(false);
    }

    setRequestBody({
      name: trimmedName,
    });
  }, [editedName]);

  useEffect(() => {
    setIsButtonDisabled(!isEditValid);
  }, [isEditValid]);

  return (
    <div>
      <InputBase
        value={editedName}
        onChange={(e) => {
          setEditedName(e.target.value);
        }}
        placeholder="목록 이름을 입력해주세요."
      />
    </div>
  );
}
