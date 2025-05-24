'use client';
import Button from '@/components/common/Button';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { patchUser } from '@/lib/apis/user';
import { toast } from 'react-toastify';
import { getUser } from '@/lib/apis/user';
import { UserResponse } from '@/lib/apis/user/type';

interface AccountUpdateButtonProps {
  name: string;
  image: string | null;
}

const AccountUpdateButton = ({ name, image }: AccountUpdateButtonProps) => {
  const queryClient = useQueryClient();

  const { data: userData } = useQuery<UserResponse | null>({
    queryKey: ['user'],
    queryFn: () => getUser({ tag: ['user'] }),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: () => {
      const body: { nickname?: string; image?: string } = {};

      if (name !== userData?.nickname) {
        body.nickname = name;
      }

      if (image !== userData?.image) {
        body.image = image || '';
      }

      return patchUser({ body });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUser'] });
      toast.success('개인 정보가 수정되었습니다.');
    },
    onError: () => {
      toast.error('개인 정보 수정에 실패했습니다.');
    },
  });

  return (
    <div className="mb-6">
      <Button
        variant="primary"
        styleType="filled"
        radius="sm"
        className="w-full"
        onClick={() => mutate()}
        disabled={isPending}
      >
        {isPending ? '업데이트 중' : '이미지 / 이름 변경하기'}
      </Button>
    </div>
  );
};

export default AccountUpdateButton;
