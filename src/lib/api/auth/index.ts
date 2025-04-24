import fetcher from '@/lib/fetcher';
import { LoginBody, LoginResponse } from '@/lib/api/auth/type';

export async function postLogin(
  body: LoginBody
): Promise<LoginResponse | null> {
  return fetcher<LoginBody, LoginResponse>({
    url: '/auth/signIn',
    method: 'POST',
    body,
  });
}
