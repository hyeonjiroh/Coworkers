import { UserResponse } from '@/lib/apis/user/type';
import UserIcon from '@/components/user/UserIcon';

export default function WriterInfo({ nickname, image }: UserResponse) {
  return (
    <div className="flex items-center gap-3">
      <UserIcon image={image} />
      <div className="text-md-medium">{nickname}</div>
    </div>
  );
}
