import Cookies from 'js-cookie';
import getNewAccessTokenInClient from '@/lib/client/token.client';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function postImage(file: File): Promise<string> {
  const token = Cookies.get('accessToken');

  const formData = new FormData();
  formData.append('image', file);

  const request = async (
    accessToken: string | undefined
  ): Promise<Response> => {
    return fetch(`${BASE_URL}/images/upload`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
    });
  };

  let res = await request(token);

  // 액세스 토큰 만료 시 재발급 후 재요청
  if (res.status === 401) {
    const newToken = await getNewAccessTokenInClient();
    res = await request(newToken);
  }

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

  const image = await res.json();
  return image.url;
}
