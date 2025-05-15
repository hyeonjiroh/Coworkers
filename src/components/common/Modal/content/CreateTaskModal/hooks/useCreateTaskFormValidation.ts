import { useState, useEffect } from 'react';
import { useModalStore } from '@/store/useModalStore';
import { RecurringTaskFormState } from '@/components/common/Modal/content/CreateTaskModal';

export function useCreateTaskFormValidation(formData: RecurringTaskFormState) {
  const { name, description, startDate, frequencyType, weekDays, monthDay } =
    formData;
  const [isSubmitValid, setIsSubmitValid] = useState(false);
  const { setRequestBody, setIsButtonDisabled } = useModalStore();

  useEffect(() => {
    const trimmedName = name.trim();
    const trimmedDescription = description.trim();

    const isNameValid = trimmedName !== '';
    const isDescriptionValid = trimmedDescription !== '';
    const isFrequencyValid =
      frequencyType === 'ONCE' ||
      frequencyType === 'DAILY' ||
      (frequencyType === 'WEEKLY' && weekDays.length > 0) ||
      (frequencyType === 'MONTHLY' && monthDay !== null);

    const isValid = isNameValid && isDescriptionValid && isFrequencyValid;

    setIsSubmitValid(isValid);

    setRequestBody({
      name: trimmedName,
      description: trimmedDescription,
      startDate: startDate.toISOString(),
      frequencyType,
      ...(frequencyType === 'WEEKLY' && { weekDays }),
      ...(frequencyType === 'MONTHLY' && { monthDay }),
    });
  }, [formData]);

  useEffect(() => {
    setIsButtonDisabled(!isSubmitValid);
  }, [isSubmitValid]);
}
