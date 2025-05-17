import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/common/Button';
import { ROUTES } from '@/constants/routes';

export default function NoTeamPage() {
  return (
    <div className="tablet:p-[120px] tablet:gap-20 flex h-[calc(100vh-60px)] w-full flex-col items-center justify-center gap-12 p-8">
      <Image
        src="/image/no_team.png"
        alt="인부 3명이 아이템을 들고 가는 배경 일러스트"
        width={810}
        height={255}
        className="object-contain"
        priority
      />

      <div>
        <p className="laptop:text-lg-medium text-md-medium text-center text-slate-500">
          아직 소속된 팀이 없습니다.
          <br />
          팀을 생성하거나 팀에 참여해 보세요.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <Link href={ROUTES.TEAM_ADD}>
          <Button
            variant="primary"
            styleType="filled"
            radius="sm"
            className="text-lg-semibold h-[48px] w-[186px] text-white"
          >
            팀 생성하기
          </Button>
        </Link>
        <Link href={ROUTES.TEAM_JOIN}>
          <Button
            variant="secondary"
            styleType="outlined"
            radius="sm"
            className="text-lg-semibold h-[48px] w-[186px] text-green-700"
          >
            팀 참여하기
          </Button>
        </Link>
      </div>
    </div>
  );
}
