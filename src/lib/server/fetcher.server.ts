'use server';

import { cookies } from 'next/headers';
import getNewAccessTokenInServer from '@/lib/server/token.server';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

interface ErrorResponse {
  message: string;
}

export default async function serverFetcher<B, R>({
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

  const token = cookies().get('accessToken')?.value;
  let res = await request(token);

  // 액세스 토큰 만료 시 재발급 후 재요청
  if (res.status === 401) {
    const newToken = await getNewAccessTokenInServer();
    res = await request(newToken);
  }

  if (res.status === 400) {
    const errorBody: ErrorResponse = await res.json();
    throw new Error(errorBody.message);
  }

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

  return res.status === 204 ? null : res.json();
}
