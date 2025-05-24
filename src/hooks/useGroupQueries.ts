'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getGroupById,
  postGroup,
  patchGroupById,
  deleteGroupById,
} from '@/lib/apis/group';
import uploadImage from '@/lib/apis/uploadImage';
import type { GroupBody, GroupResponse } from '@/lib/apis/group/type';

type UpdateGroupVariables = GroupBody & {
  file?: File;
  removeImage?: boolean;
};

export function useGroup(teamId: number) {
  return useQuery({
    queryKey: ['group', teamId],
    queryFn: () => getGroupById({ groupId: teamId }),
    enabled: Boolean(teamId),
  });
}

export function useCreateGroup() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (
      data: GroupBody & { file?: File }
    ): Promise<GroupResponse | null> => {
      let imageUrl: string | undefined;
      if (data.file) {
        imageUrl = await uploadImage(data.file);
      }
      return postGroup({
        body: { name: data.name, ...(imageUrl ? { image: imageUrl } : {}) },
      });
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['memberships'] });
    },
  });
}

export function useUpdateGroup(teamId: number) {
  const qc = useQueryClient();

  return useMutation<GroupResponse | null, Error, UpdateGroupVariables>({
    mutationFn: async (data) => {
      const body: { name: string; image?: string | null } = { name: data.name };
      if (data.file) {
        const url = await uploadImage(data.file);
        body.image = url;
      } else if (data.removeImage) {
        body.image = null;
      }
      return patchGroupById({ groupId: teamId, body });
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['group', teamId] });
      qc.invalidateQueries({
        queryKey: ['memberships'],
      });
    },
  });
}
export function useDeleteGroup(teamId: number) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: () => deleteGroupById({ groupId: teamId }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['memberships'] });
    },
  });
}
