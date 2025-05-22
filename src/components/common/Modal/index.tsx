'use client';

import { useRef } from 'react';
import { useModalStore } from '@/store/useModalStore';
import { useClosePopup } from '@/hooks/useClosePopup';
import { useLockBackgroundScroll } from '@/hooks/useLockBackgroundScroll';
import Button from '@/components/common/Button';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import clsx from 'clsx';

export default function Modal() {
  const {
    options: { variant = 'default', title, description, button },
    content,
    requestBody,
    isButtonDisabled,
    closeModal,
  } = useModalStore();

  const formId = button?.formId; // formId 추출
  const modalRef = useRef<HTMLDivElement>(null);
  const isModalOpen = Boolean(title || content);

  // 폼 제출 시도 여부를 추적하는 플래그
  const isSubmittedRef = useRef(false);

  useClosePopup(modalRef, closeModal);
  useLockBackgroundScroll(isModalOpen);

  // button 클릭 시 실행되는 함수 (form 존재 여부에 따른 분기 처리 )
  const handleRequest = () => {
    isSubmittedRef.current = true;

    // 기존 모달 흐름
    if (!formId) {
      if (isSubmittedRef.current) {
        button?.onRequest?.(requestBody);
        closeModal();
        isSubmittedRef.current = false;
        return;
      }
    }

    // formId 존재 (브라우저 submit 트리거)
    const form = document.getElementById(
      formId as string
    ) as HTMLFormElement | null;
    if (form) {
      form.requestSubmit(); // 폼 제출만 담당
    }
    isSubmittedRef.current = false;
  };

  if (!isModalOpen) return null;

  return (
    <div className="tablet:items-center fixed inset-0 z-80 flex h-full w-full items-end justify-center bg-black/50">
      <div
        ref={modalRef}
        className={clsx(
          'tablet:w-[384px] tablet:rounded-xl relative flex w-full flex-col rounded-t-3xl border-none bg-slate-800 pb-8',
          variant === 'default' && 'gap-6 px-[52px] pt-12',
          variant === 'danger' && 'gap-6 px-[52px] pt-8',
          variant === 'taskForm' && 'gap-8 px-6 pt-8'
        )}
      >
        {button?.number === 1 && (
          <button
            type="button"
            onClick={closeModal}
            className="absolute top-4 right-6 size-6 rounded-full transition-colors duration-100 hover:bg-slate-700"
          >
            <IconRenderer name="XIcon" />
          </button>
        )}
        <div className="tablet:max-h-[60vh] flex max-h-[70vh] flex-col items-center gap-4">
          {variant === 'danger' && <IconRenderer name="AlertIcon" />}
          <div
            className={clsx(
              'flex w-full flex-col overflow-hidden',
              variant === 'taskForm' ? 'gap-6' : 'gap-4'
            )}
          >
            {(title || description) && (
              <div
                className={clsx(
                  'flex flex-col items-center',
                  variant === 'taskForm' ? 'gap-4' : 'gap-2'
                )}
              >
                {title && (
                  <div className="text-lg-medium text-center whitespace-pre-line">
                    {title}
                  </div>
                )}
                {description && (
                  <div
                    className={clsx(
                      'text-md-medium text-center whitespace-pre-line',
                      variant === 'danger' ? '' : 'text-slate-500'
                    )}
                  >
                    {description}
                  </div>
                )}
              </div>
            )}
            {content && (
              <div className="overflow-y-auto">
                {typeof content === 'function' ? content() : content}
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          {button?.number === 2 && (
            <Button
              variant="primary"
              styleType={variant === 'danger' ? 'neutral' : 'outlined'}
              className="flex-1"
              radius="sm"
              size="lg"
              onClick={closeModal}
            >
              닫기
            </Button>
          )}
          <Button
            {...(formId ? { form: formId } : {})} // formId 존재 여부에 따라 form 속성 추가
            variant="primary"
            styleType={variant === 'danger' ? 'danger' : 'filled'}
            className="flex-1"
            radius="sm"
            size="lg"
            onClick={handleRequest}
            disabled={isButtonDisabled}
          >
            {button?.text}
          </Button>
        </div>
      </div>
    </div>
  );
}
