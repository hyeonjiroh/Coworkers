'use client';

import IconRenderer from '@/components/common/Icons/IconRenderer';
import Button from '@/components/common/Button';
import clsx from 'clsx';
import { patchTaskById } from '@/lib/apis/task';

export default function ToggleTaskDoneButton({
  variant = 'checkbox',
  taskId,
  doneAt,
}: {
  variant?: 'checkbox' | 'button';
  taskId: number;
  doneAt: string | null;
}) {
  const updateTaskToDone = async () => {
    try {
      await patchTaskById({ taskId, body: { done: true }, tag: ['task'] });
    } catch (error) {
      console.error('Failed to update the task status :', error);
    }
  };

  const updateTaskToUndone = async () => {
    try {
      await patchTaskById({ taskId, body: { done: false }, tag: ['task'] });
    } catch (error) {
      console.error('Failed to update the task status :', error);
    }
  };

  return (
    <>
      {variant === 'checkbox' && (
        <IconRenderer
          name={doneAt ? 'CheckboxActiveIcon' : 'CheckboxDefaultIcon'}
          onClick={doneAt ? updateTaskToUndone : updateTaskToDone}
          className="cursor-pointer"
        />
      )}
      {variant === 'button' && (
        <Button
          variant="floating"
          styleType={doneAt ? 'outlined' : 'default'}
          radius="lg"
          size="lg"
          className={clsx(
            'fixed right-6 bottom-6',
            doneAt ? 'min-w-[138px]' : 'min-w-[111px]'
          )}
          startIcon={doneAt ? 'check_green' : 'check'}
          onClick={doneAt ? updateTaskToUndone : updateTaskToDone}
        >
          {doneAt ? '완료 취소하기' : '완료하기'}
        </Button>
      )}
    </>
  );
}
