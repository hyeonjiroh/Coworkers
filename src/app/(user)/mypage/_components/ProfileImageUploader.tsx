'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useMutation, useQuery } from '@tanstack/react-query';
import postImage from '@/lib/apis/uploadImage';
import { getUser } from '@/lib/apis/user';
import IconRenderer from '@/components/common/Icons/IconRenderer';
import { UserResponse } from '@/lib/apis/user/type';
import { toast } from 'react-toastify';
import Spinner from '@/components/common/Loading/Spinner';

interface ProfileImageUploaderProps {
  image: string | null;
  setImage: (image: string | null) => void;
}

const ProfileImageUploader = ({
  image,
  setImage,
}: ProfileImageUploaderProps) => {
  const { data: userData } = useQuery<UserResponse | null>({
    queryKey: ['user'],
    queryFn: () => getUser({ tag: ['user'] }),
  });

  useEffect(() => {
    if (userData?.image) {
      setImage(userData.image);
    }
  }, [userData, setImage]);

  const { mutate, isPending } = useMutation({
    mutationFn: (file: File) => postImage(file),
    onSuccess: (url) => {
      setImage(url);
      toast.success('프로필 이미지가 업로드되었습니다.');
    },
    onError: () => {
      toast.error('이미지는 4.2MB 이하여야 합니다.');
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      mutate(file);
    }
  };

  return (
    <div className="relative mb-6 h-[64px] w-[64px]">
      {isPending ? (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-800">
          <Spinner size={32} color="text-slate-400" />
        </div>
      ) : image ? (
        <>
          <Image
            src={image}
            alt="프로필 미리보기"
            fill
            sizes="64px"
            priority
            className="rounded-full object-cover"
          />
          <label
            htmlFor="image-upload"
            className="absolute right-0 bottom-0 cursor-pointer"
          >
            <IconRenderer
              name="EditIcon"
              size={24}
              className="rounded-full border-2 border-slate-900 bg-slate-700"
            />
          </label>
        </>
      ) : (
        <label
          htmlFor="image-upload"
          className="relative h-full w-full cursor-pointer"
        >
          <IconRenderer
            name="MemberIcon"
            size={64}
            className="border-gray-750/10 rounded-4xl border-2 bg-slate-700"
          />
          <span className="absolute right-0 bottom-0">
            <IconRenderer
              name="EditIcon"
              size={24}
              className="rounded-full border-2 border-slate-900 bg-slate-700"
            />
          </span>
        </label>
      )}
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ProfileImageUploader;
