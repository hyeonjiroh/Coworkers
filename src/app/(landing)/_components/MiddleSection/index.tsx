import { motion } from 'framer-motion';
import { fadeInUp } from '@/app/(landing)/_components/styles/motionStyle';
import { LANDING_IMAGE_URL } from '@/app/(landing)/_components/landingImageUrl';
import LandingBox from '@/app/(landing)/_components/MiddleSection/LandingBox';

const LandingMiddleSection = ({ className }: { className?: string }) => {
  return (
    <section
      className={`${className} laptop:gap-20 flex w-full flex-col items-center gap-[24px]`}
    >
      {/* BOX 1 */}
      <motion.div {...fadeInUp}>
        <LandingBox
          imageSrc={`${LANDING_IMAGE_URL}mockup_team.png`}
          imageAlt="팀 페이지 이미지"
          iconSrc={`${LANDING_IMAGE_URL}icon_box_folder.svg`}
          iconAlt="폴더 아이콘"
          textLines={['그룹으로', '일정을 관리해요']}
          tabletReverse
          gradient
          className="items-end bg-slate-900"
        />
      </motion.div>

      {/* BOX 2 */}
      <motion.div {...fadeInUp}>
        <LandingBox
          imageSrc={`${LANDING_IMAGE_URL}mockup_invitation.png`}
          imageAlt="멤버 초대 이미지"
          imageOnTop
          iconSrc={`${LANDING_IMAGE_URL}icon_box_message.svg`}
          iconAlt="메시지 아이콘"
          textLines={['간단하게 멤버들을', '초대해요']}
          textLeft={false}
          mobileReverse
          className="items-start border border-slate-50/10 bg-slate-800"
        />
      </motion.div>

      {/* BOX 3 */}
      <motion.div {...fadeInUp}>
        <LandingBox
          imageSrc={`${LANDING_IMAGE_URL}mockup_reply.png`}
          imageAlt="댓글 이미지"
          imageOnTop
          tabletReverse
          mobileReverse
          iconSrc={`${LANDING_IMAGE_URL}icon_box_check.svg`}
          iconAlt="체크 아이콘"
          textLines={['할 일도 간편하게', '체크해요']}
          className="items-start bg-slate-950"
        />
      </motion.div>
    </section>
  );
};

export default LandingMiddleSection;
