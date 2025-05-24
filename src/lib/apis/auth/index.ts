import clientFetcher from '@/lib/client/fetcher.client';
import {
  OAuthAppBody,
  OAuthAppResponse,
  OAuthBody,
  AuthBody,
  AuthResponse,
} from '@/lib/apis/auth/type';
import serverFetcher from '@/lib/server/fetcher.server';

// 회원가입
export async function signUp({
  body,
}: {
  body: AuthBody;
}): Promise<AuthResponse | null> {
  return clientFetcher<AuthBody, AuthResponse>({
    url: '/auth/signUp',
    method: 'POST',
    body,
  });
}

// 로그인
export async function signIn({
  body,
}: {
  body: AuthBody;
}): Promise<AuthResponse | null> {
  return clientFetcher<AuthBody, AuthResponse>({
    url: '/auth/signIn',
    method: 'POST',
    body,
  });
}

// 간편 로그인
export async function postOAuth({
  body,
}: {
  body: OAuthBody;
}): Promise<AuthResponse | null> {
  return serverFetcher<OAuthBody, AuthResponse>({
    url: '/auth/signIn/KAKAO',
    method: 'POST',
    body,
  });
}

// 간편 로그인 App 등록/수정
export async function postOAuthApp({
  body,
}: {
  body: OAuthAppBody;
}): Promise<OAuthAppResponse | null> {
  return clientFetcher<OAuthAppBody, OAuthAppResponse>({
    url: '/oauthApps',
    method: 'POST',
    body,
  });
}
