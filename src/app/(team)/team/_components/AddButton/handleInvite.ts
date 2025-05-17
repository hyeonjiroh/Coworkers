import { getGroupInvitation } from '@/lib/apis/group';
import { toast } from 'react-toastify';
import { TOAST_MESSAGES } from '@/constants/messages';

export const handleInvite = async (groupId: number) => {
  try {
    const inviteUrl = await getGroupInvitation({ groupId });

    if (!inviteUrl) return;

    if (inviteUrl) {
      await navigator.clipboard.writeText(inviteUrl);
      toast.success(TOAST_MESSAGES.clipboard.copyLinkSuccess);
    }
  } catch (error) {
    console.log('링크 복사 실패', error);
    toast.error(TOAST_MESSAGES.clipboard.copyLinkFail);
  }
};
