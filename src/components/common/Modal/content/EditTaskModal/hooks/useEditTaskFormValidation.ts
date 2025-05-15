import { useState, useEffect } from 'react';
import { useModalStore } from '@/store/useModalStore';
import { RecurringTaskFormState } from '@/components/common/Modal/content/EditTaskModal';

export function useEditTaskFormValidation({
  current,
  initial,
}: {
  current: RecurringTaskFormState;
  initial: RecurringTaskFormState;
}) {
  const { name, description } = current;
  const [isSubmitValid, setIsSubmitValid] = useState(false);
  const { setRequestBody, setIsButtonDisabled } = useModalStore();

  useEffect(() => {
    const trimmedName = name.trim();
    const trimmedDescription = description.trim();

    const isNameValid = trimmedName !== '';
    const isDescriptionValid = trimmedDescription !== '';
    const isChanged =
      trimmedName !== initial.name.trim() ||
      trimmedDescription !== initial.description.trim();

    const isValid = isNameValid && isDescriptionValid && isChanged;

    setIsSubmitValid(isValid);

    setRequestBody({
      name: trimmedName,
      description: trimmedDescription,
    });
  }, [current, initial.name, initial.description]);

  useEffect(() => {
    setIsButtonDisabled(!isSubmitValid);
  }, [isSubmitValid]);
}
