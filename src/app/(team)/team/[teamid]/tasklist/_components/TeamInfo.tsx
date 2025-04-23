import { cookies } from 'next/headers';

import { getGroupsById } from '@/lib/apis/group';

export default async function TeamInfo() {
  const token = cookies().get('accessToken')?.value ?? '';
  const groupId = 2200;

  const data = await getGroupsById({ groupId, token });

  if (!data) return;

  const { id } = data;

  return <div>{id}</div>;
}
