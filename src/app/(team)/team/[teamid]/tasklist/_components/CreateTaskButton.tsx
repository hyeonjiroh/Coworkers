'use client';

import { useModalStore } from '@/store/useModalStore';
import CreateTaskModal from '@/components/common/Modal/content/CreateTaskModal';
import Button from '@/components/common/Button';

export default function CreateTaskButton() {
  const { openModal } = useModalStore();

  return (
    <Button
      variant="floating"
      styleType="default"
      radius="lg"
      size="lg"
      className="fixed right-6 bottom-6 min-w-[125px] xl:right-auto xl:left-1/2 xl:translate-x-[475px]"
      startIcon="plus"
      onClick={() => {
        openModal(
          {
            variant: 'taskForm',
            title: '할 일 만들기',
            description:
              '할 일은 실제로 행동 가능한 작업 중심으로\n작성해주시면 좋습니다.',
            button: {
              number: 1,
              text: '만들기',
              onRequest: () => {},
            },
          },
          <CreateTaskModal />
        );
      }}
    >
      할 일 추가
    </Button>
  );
}
