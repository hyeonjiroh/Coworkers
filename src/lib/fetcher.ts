import getNewAccessToken from '@/lib/token';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function fetcher<B, R>({
  url,
  method,
  token,
  body = undefined,
}: {
  url: string;
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  token?: string;
  body?: B;
}): Promise<R | null> {
  const request = async (accessToken?: string): Promise<Response> => {
    const headers: HeadersInit = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    if (accessToken) {
      headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return fetch(`${BASE_URL}${url}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
  };

  let res = await request(token);

  // 액세스 토큰 만료 시 재발급 후 재요청
  if (res.status === 401) {
    const newToken = await getNewAccessToken();
    res = await request(newToken);
  }

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

  return res.status === 204 ? null : res.json();
}
