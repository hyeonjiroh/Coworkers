'use client';

import Icons from '@/components/common/Icons';

export default function SocialLogin() {
  return (
    <div className="mt-12">
      {/* line */}
      <div className="mb-3 flex items-center gap-4">
        <div className="flex-1 border-t border-white/20" />
        <span>OR</span>
        <div className="flex-1 border-t border-white/20" />
      </div>

      {/*social login*/}
      <div className="flex items-center justify-between pb-20">
        <span className="text-lg-medium">간편 로그인하기</span>
        <button>
          <Icons.KakaoLoginIcon
            size={42}
            onClick={() => {
              'kakao Login';
            }}
          />
        </button>
      </div>
    </div>
  );
}
