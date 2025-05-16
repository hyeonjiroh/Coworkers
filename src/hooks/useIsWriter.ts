import { UserResponse } from '@/lib/apis/user/type';

interface useIsWriterProps {
  writerData: UserResponse;
  userId: number;
}

export const useIsWriter = ({ writerData, userId }: useIsWriterProps) => {
  return Boolean(writerData.id === userId);
};
