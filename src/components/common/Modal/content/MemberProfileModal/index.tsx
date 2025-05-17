import UserIcon from '@/components/user/UserIcon';

interface MemberProfileModalProps {
  image: string | null;
  name: string;
  email: string;
}

export default function MemberProfileModal({
  image,
  name,
  email,
}: MemberProfileModalProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center">
      {' '}
      <UserIcon
        image={image}
        sizeClass="tablet:size-[52px] size-[46px]"
        imageSize="54px"
        iconClass="tablet:size-10.5 size-9"
      />
      <div className="flex flex-col gap-2">
        <p className="text-md-medium">{name}</p>
        <p className="text-xs-regular text-slate-300">{email}</p>
      </div>
    </div>
  );
}
