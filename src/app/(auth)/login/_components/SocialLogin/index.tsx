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
              // client_id, redirect_uri, state
              const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
              const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
              const STATE = crypto.randomUUID(); // CSRF 방지를 위한 난수 문자열 생성

              const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&state=${STATE}`;
              // redirection to kakaoAuthUrl
              window.location.href = kakaoAuthUrl;
            }}
          />
        </button>
      </div>
    </div>
  );
}
