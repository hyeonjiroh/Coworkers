import UserIcon from '@/components/user/UserIcon';

export default function WriterInfo({
  image,
  nickname,
}: {
  image: string | null;
  nickname: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <UserIcon image={image} />
      <div className="text-md-medium">{nickname}</div>
    </div>
  );
}
