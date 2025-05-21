import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/common/Button';
import { ROUTES } from '@/constants/routes';

export default function NoTeamPage() {
  return (
    <div className="tablet:px-[115px] laptop:px-0 flex h-[calc(100vh-60px)] w-full flex-col items-center justify-center px-7">
      <Image
        src="/image/no_team.png"
        alt="인부 3명이 아이템을 들고 가는 배경 일러스트"
        width={810}
        height={255}
        className="object-contain"
        priority
      />

      <div>
        <p className="laptop:text-lg-medium text-md-medium tablet:mt-12 mt-8 text-center text-slate-500">
          아직 소속된 팀이 없습니다.
          <br />
          팀을 생성하거나 팀에 참여해 보세요.
        </p>
      </div>

      <div className="laptop:gap-4 tablet:mt-20 mt-12 flex flex-col items-center gap-2">
        <Link href={ROUTES.TEAM_ADD}>
          <Button
            variant="primary"
            styleType="filled"
            radius="sm"
            size="lg"
            className="text-lg-semibold w-[186px] text-white"
          >
            팀 생성하기
          </Button>
        </Link>
        <Link href={ROUTES.TEAM_JOIN}>
          <Button
            variant="secondary"
            styleType="outlined"
            radius="sm"
            size="lg"
            className="text-lg-semibold w-[186px] text-green-700"
          >
            팀 참여하기
          </Button>
        </Link>
      </div>
    </div>
  );
}
