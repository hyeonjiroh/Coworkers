'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import fetcher from '@/lib/client/fetcher.client';
import { UserMembershipResponse } from '@/lib/apis/user/type';

export function useMemberships(isLogin: boolean) {
  const { data: memberships = [] } = useQuery<
    UserMembershipResponse[],
    Error,
    UserMembershipResponse[]
  >({
    queryKey: ['memberships'],
    queryFn: async () => {
      const res = await fetcher<undefined, UserMembershipResponse[]>({
        url: '/user/memberships',
        method: 'GET',
      });
      return res ?? [];
    },
    enabled: isLogin,
  });

  const [selectedGroup, setSelectedGroup] = useState<
    UserMembershipResponse['group'] | null
  >(null);

  useEffect(() => {
    if (memberships.length > 0) {
      setSelectedGroup((prev) =>
        prev && memberships.some((m) => m.group.id === prev.id)
          ? prev
          : memberships[0].group
      );
    } else {
      setSelectedGroup(null);
    }
  }, [memberships]);

  return { memberships, selectedGroup, setSelectedGroup } as const;
}
