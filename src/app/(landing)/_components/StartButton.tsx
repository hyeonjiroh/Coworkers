'use client';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { useMemberships } from '@/hooks/useMemberships';
import { ROUTES } from '@/constants/routes';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/app/(landing)/_components/styles/motionStyle';
import { buttonStyle } from '@/app/(landing)/_components/styles/buttonStyle';

const StartButton = ({ className }: { className?: string }) => {
  const router = useRouter();
  const isLogin = useAuth(); // 로그인 여부 판별
  const { memberships, selectedGroup } = useMemberships(isLogin); // 소속 그룹 유무 판별

  const handleClick = () => {
    if (!isLogin) {
      router.push(ROUTES.LOGIN);
      return;
    }

    if (memberships.length > 0 && selectedGroup) {
      router.push(ROUTES.TEAM(selectedGroup.id));
    } else {
      router.push(ROUTES.TEAM_NO);
    }
  };

  return (
    <motion.div {...fadeInUp} className="flex justify-center">
      <button onClick={handleClick} className={`${buttonStyle} ${className}`}>
        지금 시작하기
      </button>
    </motion.div>
  );
};

export default StartButton;
