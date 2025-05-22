'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import Spinner from '@/components/common/Loading/Spinner';
import postImage from '@/lib/apis/uploadImage';

interface FileInputProps {
  title?: string;
  initialUrl?: string | null;
  onChange?: (url: string | null) => void;
  containerClassName?: string;
  inputClassName?: string;
  iconClassName?: string;
}

const FileInput = ({
  title,
  initialUrl = null,
  onChange,
  containerClassName = '',
  inputClassName = '',
  iconClassName = '',
}: FileInputProps) => {
  const [imgUrl, setImgUrl] = useState<string | null>(initialUrl);

  const MAX_IMAGE_SIZE = 4.2 * 1024 * 1024;
  const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg'];

  const { mutate, isPending } = useMutation({
    mutationFn: (file: File) => postImage(file),
    onSuccess: (url) => {
      setImgUrl(url);
      if (onChange) onChange(url);
    },
    onError: () => {
      setImgUrl(null);
      if (onChange) onChange(null);
      toast.error('이미지 업로드 중 오류가 발생했습니다.');
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      setImgUrl(null);
      if (onChange) onChange(null);
      e.target.value = '';
      toast.error('이미지 파일만 업로드할 수 있습니다. (.png, .jpg, .jpeg)');
      return;
    }

    if (file.size > MAX_IMAGE_SIZE) {
      setImgUrl(null);
      if (onChange) onChange(null);
      e.target.value = '';
      toast.error('이미지는 4.2MB 이하여야 합니다.');
      return;
    }

    mutate(file);
  };

  const handleRemoveImage = () => {
    setImgUrl(null);
    if (onChange) onChange(null);
    toast.success('이미지가 삭제되었습니다.');
    const input = document.getElementById('file-input') as HTMLInputElement;
    if (input) input.value = '';
  };

  return (
    <div className="flex w-full flex-col">
      {title && (
        <label className="mb-2 block text-sm text-gray-400">{title}</label>
      )}
      <div
        className={`tablet:h-[240px] tablet:w-[240px] relative flex h-[160px] w-[160px] cursor-pointer items-center justify-center rounded-xl bg-slate-800 transition-colors duration-300 hover:bg-slate-600 ${containerClassName}`}
      >
        {isPending ? (
          <Spinner size={48} />
        ) : imgUrl ? (
          <div className="relative h-full w-full">
            <Image
              src={imgUrl}
              alt="업로드된 이미지"
              fill
              sizes="240px"
              className="rounded-xl object-cover opacity-50"
            />
            <IconRenderer
              name="XIcon"
              size={60}
              className="hover:bg-danger/70 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full text-gray-400 transition-colors duration-300 hover:text-gray-200"
              onClick={handleRemoveImage}
            />
          </div>
        ) : (
          <>
            <input
              id="file-input"
              type="file"
              accept="image/png,image/jpeg,image/jpg"
              className={`absolute h-full w-full cursor-pointer opacity-0 ${inputClassName}`}
              onChange={handleFileChange}
            />
            <IconRenderer
              name="PlusIcon"
              size={56}
              className={`text-gray-400 ${iconClassName}`}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default FileInput;