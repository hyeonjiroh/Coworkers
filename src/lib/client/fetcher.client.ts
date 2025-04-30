import Cookies from 'js-cookie';
import getNewAccessTokenInClient from '@/lib/client/token.client';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function clientFetcher<B, R>({
  url,
  method,
  body = undefined,
}: {
  url: string;
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  body?: B;
}): Promise<R | null> {
  const request = async (token?: string): Promise<Response> => {
    const headers: HeadersInit = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    };

    return fetch(`${BASE_URL}${url}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
  };

  const token = Cookies.get('accessToken') || undefined;
  let res = await request(token);

  // 액세스 토큰 만료 시 재발급 후 재요청
  if (res.status === 401) {
    const newToken = await getNewAccessTokenInClient();
    res = await request(newToken);
  }

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

  return res.status === 204 ? null : res.json();
}
