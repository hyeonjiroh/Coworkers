'use client';
import LandingTopSection from '@/app/(landing)/_components/TopSection';
import LandingMiddleSection from '@/app/(landing)/_components/MiddleSection';
import LandingBottomSection from '@/app/(landing)/_components/BottomSection';
import StartButton from '@/app/(landing)/_components/StartButton';

export default function LandingPage() {
  return (
    <div className="h-full w-full flex-col items-center justify-center overflow-hidden">
      <LandingTopSection />
      <StartButton className="tablet:mt-10 laptop:mt-0" />
      <LandingMiddleSection className="laptop::mt-45 tablet:mt-30 mt-12" />
      <LandingBottomSection />
    </div>
  );
}
