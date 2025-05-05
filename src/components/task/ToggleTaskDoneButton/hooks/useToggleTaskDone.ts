import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { patchTaskById } from '@/lib/apis/task';

export function useToggleTaskDone(taskId: number, initialDone: boolean) {
  const [isDone, setIsDone] = useState(initialDone);
  const router = useRouter();

  const updateTaskToDone = async () => {
    try {
      await patchTaskById({ taskId, body: { done: true } });
      setIsDone(true);
    } catch (error) {
      console.error('Failed to update the task status :', error);
    } finally {
      router.refresh();
    }
  };

  const updateTaskToUndone = async () => {
    try {
      await patchTaskById({ taskId, body: { done: false } });
      setIsDone(false);
    } catch (error) {
      console.error('Failed to update the task status :', error);
    } finally {
      router.refresh();
    }
  };

  return { isDone, updateTaskToDone, updateTaskToUndone };
}
