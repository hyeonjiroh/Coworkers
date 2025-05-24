'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { UserMembershipResponse } from '@/lib/apis/user/type';
import { getUserMemberships } from '@/lib/apis/user';

export function useMemberships(isLogin: boolean) {
  const { data: memberships = [] } = useQuery<
    UserMembershipResponse[],
    Error,
    UserMembershipResponse[]
  >({
    queryKey: ['memberships'],
    queryFn: async () => {
      const res = await getUserMemberships({ tag: ['memberships'] });
      return res ?? [];
    },
    enabled: isLogin,
  });

  const [selectedGroup, setSelectedGroup] = useState<
    UserMembershipResponse['group'] | null
  >(null);

  useEffect(() => {
    if (memberships.length > 0) {
      setSelectedGroup((prev) => {
        const newGroup = memberships.find(
          (m) => m.group.id === prev?.id
        )?.group;
        return newGroup ?? memberships[0].group;
      });
    } else {
      setSelectedGroup(null);
    }
  }, [memberships]);

  return { memberships, selectedGroup, setSelectedGroup } as const;
}
