import { useEffect, useState } from 'react';
import InputBase from '@/components/common/Input/InputBase';
import Button from '@/components/common/Button';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import Image from 'next/image';

export interface TeamProfileFormProps {
  initialName?: string;
  existingNames: string[];
  initialPreview?: string;
  submitLabel: string;
  onSubmit: (data: {
    name: string;
    file?: File;
    removeImage?: boolean;
  }) => Promise<void> | void;
}

const MAX_FILE_SIZE = 4.2 * 1024 * 1024;

export default function TeamProfileForm({
  initialName = '',
  existingNames,
  initialPreview = '',
  submitLabel,
  onSubmit,
}: TeamProfileFormProps) {
  const [name, setName] = useState(initialName);
  const [preview, setPreview] = useState(initialPreview);
  const [file, setFile] = useState<File>();
  const [nameError, setNameError] = useState(false);
  const [imageError, setImageError] = useState('');

  useEffect(() => {
    setName(initialName);
    setPreview(initialPreview);
    setFile(undefined);
    setNameError(false);
    setImageError('');
  }, [initialName, initialPreview]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    setPreview(URL.createObjectURL(selected));

    if (selected.size > MAX_FILE_SIZE) {
      setImageError('4.2MB 이하의 이미지만 업로드할 수 있습니다.');
      setFile(undefined);
      return;
    }

    setImageError('');
    setFile(selected);
  };

  const handleClearImage = () => {
    setImageError('');
    setFile(undefined);
    setPreview('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  const removeImage = preview === '' && !file;

  const handleSubmit = async () => {
    let hasErr = false;
    if (existingNames.includes(name.trim())) {
      setNameError(true);
      hasErr = true;
    }

    if (imageError) {
      hasErr = true;
    }
    if (hasErr) return;

    await onSubmit({ name: name.trim(), file, removeImage });
  };

  const isDisabled = !name.trim() || Boolean(imageError);

  return (
    <div className="text-md-regular tablet:w-[460px] tablet:text-lg-regular flex w-[343px] flex-col items-center">
      <h1 className="text-2xl-medium laptop:text-4xl-medium tablet:mb-20 mb-6">
        {submitLabel}
      </h1>

      <div className="relative mb-6 flex w-full flex-col gap-3 self-start">
        <span className="text-lg-medium">팀 프로필</span>

        <label
          htmlFor="team-profile-input"
          className={`relative h-16 w-16 cursor-pointer rounded-full`}
        >
          {preview ? (
            <div className="absolute inset-0 overflow-hidden rounded-full border-2 border-slate-600">
              <Image src={preview} alt="프로필" fill className="object-cover" />
            </div>
          ) : (
            <IconRenderer name="ProfileImageIcon" size={64} />
          )}
        </label>
        <label
          htmlFor="team-profile-input"
          className="absolute top-19 left-11 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 border-slate-900 bg-slate-600"
        >
          <IconRenderer name="EditIcon" size={9} />
        </label>

        {preview && (
          <button
            type="button"
            onClick={handleClearImage}
            className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-gray-500 hover:bg-gray-100"
          >
            <IconRenderer name="XIcon" size={12} />
          </button>
        )}

        <input
          id="team-profile-input"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />

        {imageError && (
          <p className="mt-1 text-xs text-red-500">{imageError}</p>
        )}
      </div>

      <div className="mb-10 w-full self-start">
        <InputBase
          id="teamName"
          title="팀 이름"
          placeholder="팀 이름을 입력해주세요."
          value={name}
          autoComplete="off"
          isInvalid={nameError}
          onChange={(e) => {
            setName(e.target.value);
            setNameError(false);
          }}
          onKeyDown={handleKeyDown}
          titleClassName="mb-3"
          containerClassName=" h-11 tablet:h-12 bg-slate-800"
          inputClassName="w-full h-11 tablet:h-12"
        />
        {nameError && (
          <p className="text-md-medium mt-2 text-red-500">
            이미 존재하는 이름입니다.
          </p>
        )}
      </div>

      <div className="mb-6 w-full">
        <Button
          variant="primary"
          styleType="filled"
          size="lg"
          radius="sm"
          className="text-lg-semibold w-full"
          onClick={handleSubmit}
          disabled={isDisabled}
        >
          {submitLabel}
        </Button>
      </div>

      <p className="text-md-regular tablet:text-lg-regular">
        팀 이름은 회사명이나 모임 이름 등으로 설정하면 좋아요.
      </p>
    </div>
  );
}
