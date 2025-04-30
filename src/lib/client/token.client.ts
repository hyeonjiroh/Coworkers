import Cookies from 'js-cookie';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function getNewAccessTokenInClient(): Promise<string> {
  const refreshToken = Cookies.get('refreshToken');

  const res = await fetch(`${BASE_URL}/auth/refresh-token`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken }),
  });

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

  const data = await res.json();
  const newAccessToken = data.accessToken;

  Cookies.set('accessToken', newAccessToken, { path: '/' });

  return newAccessToken;
}
