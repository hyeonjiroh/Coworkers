import fetcher from '../fetcher';
import { LoginBody, LoginResponse } from './types/auth';

export async function postLogin(
  body: LoginBody
): Promise<LoginResponse | null> {
  return fetcher<LoginBody, LoginResponse>({
    url: '/auth/signIn',
    method: 'POST',
    body,
  });
}
