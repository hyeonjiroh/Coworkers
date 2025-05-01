'use client';

import React from 'react';

import Alert from '@/assets/icons/alert.svg';
import Arrow from '@/assets/icons/arrow.svg';
import ArrowTop from '@/assets/icons/arrow_top.svg';
import Calendar from '@/assets/icons/calendar.svg';
import CheckGreen from '@/assets/icons/check_green.svg';
import CheckWhite from '@/assets/icons/check_white.svg';
import Check from '@/assets/icons/check.svg';
import CheckboxDefault from '@/assets/icons/checkbox_default.svg';
import CheckboxActive from '@/assets/icons/checkbox_active.svg';
import Comment from '@/assets/icons/comment.svg';
import Coworkers from '@/assets/icons/coworkers.svg';
import Done from '@/assets/icons/done.svg';
import Edit from '@/assets/icons/edit.svg';
import Gear from '@/assets/icons/gear.svg';
import GnbMenu from '@/assets/icons/gnb_menu.svg';
import Img from '@/assets/icons/img.svg';
import List from '@/assets/icons/list.svg';
import Logo from '@/assets/icons/logo.svg';
import Member from '@/assets/icons/member.svg';
import Plus from '@/assets/icons/plus.svg';
import ProfileImage from '@/assets/icons/profile_image.svg';
import ProgressDone from '@/assets/icons/progress_done.svg';
import ProgressOngoing from '@/assets/icons/progress_ongoing.svg';
import Repair from '@/assets/icons/repair.svg';
import Repeat from '@/assets/icons/repeat.svg';
import Search from '@/assets/icons/search.svg';
import ThreeDots from '@/assets/icons/three_dots.svg';
import Time from '@/assets/icons/time.svg';
import Toggle from '@/assets/icons/toggle.svg';
import User from '@/assets/icons/user.svg';
import VisibilityOff from '@/assets/icons/visibility_off.svg';
import VisibilityOn from '@/assets/icons/visibility_on.svg';
import X from '@/assets/icons/x.svg';
import Expansion from '@/assets/icons/expansion.svg';
import KakaoLogin from '@/assets/icons/kakao_login.svg';

interface IconProps {
  size?: number;
  className?: string;
  onClick?: React.MouseEventHandler<SVGElement>;
}

interface FlipIconProps extends IconProps {
  flip?: boolean;
}

const Icons = {
  AlertIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Alert width={size} height={size} className={className} onClick={onClick} />
  ),

  ArrowIcon: ({
    size = 24,
    className,
    onClick,
    flip = false,
  }: FlipIconProps) => (
    <Arrow
      width={size}
      height={size}
      className={` ${className ?? ''} ${flip ? '-scale-x-100 transform' : ''} `}
      onClick={onClick}
    />
  ),

  ArrowTopIcon: ({ size = 24, className, onClick }: IconProps) => (
    <ArrowTop
      width={size}
      height={size}
      className={className}
      onClick={onClick}
    />
  ),

  CalendarIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Calendar
      width={size}
      height={size}
      className={className}
      onClick={onClick}
    />
  ),

  CheckGreenIcon: ({ size = 24, className, onClick }: IconProps) => (
    <CheckGreen
      width={size}
      height={size}
      className={`text-green-700 ${className}`}
      onClick={onClick}
    />
  ),

  CheckWhiteIcon: ({ size = 24, className, onClick }: IconProps) => (
    <CheckWhite
      width={size}
      height={size}
      className={className}
      onClick={onClick}
    />
  ),

  CheckIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Check
      width={size}
      height={size}
      className={`text-slate-50 ${className}`}
      onClick={onClick}
    />
  ),

  CheckboxActiveIcon: ({ size = 24, className, onClick }: IconProps) => (
    <CheckboxActive
      width={size}
      height={size}
      className={className}
      onClick={onClick}
    />
  ),

  CheckboxDefaultIcon: ({ size = 24, className, onClick }: IconProps) => (
    <CheckboxDefault
      width={size}
      height={size}
      className={className}
      onClick={onClick}
    />
  ),

  CommentIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Comment
      width={size}
      height={size}
      className={className}
      onClick={onClick}
    />
  ),

  CoworkersIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Coworkers
      width={size}
      height={size}
      className={className}
      onClick={onClick}
    />
  ),

  DoneIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Done width={size} height={size} className={className} onClick={onClick} />
  ),

  EditIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Edit width={size} height={size} className={className} onClick={onClick} />
  ),

  GearIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Gear width={size} height={size} className={className} onClick={onClick} />
  ),

  GnbMenuIcon: ({ size = 24, className, onClick }: IconProps) => (
    <GnbMenu
      width={size}
      height={size}
      className={`text-slate-500 ${className}`}
      onClick={onClick}
    />
  ),

  ImgIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Img width={size} height={size} className={className} onClick={onClick} />
  ),

  ListIcon: ({ size = 24, className, onClick }: IconProps) => (
    <List width={size} height={size} className={className} onClick={onClick} />
  ),

  LogoIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Logo width={size} height={size} className={className} onClick={onClick} />
  ),

  MemberIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Member
      width={size}
      height={size}
      className={className}
      onClick={onClick}
    />
  ),

  PlusIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Plus width={size} height={size} className={className} onClick={onClick} />
  ),

  ProfileImageIcon: ({ size = 24, className, onClick }: IconProps) => (
    <ProfileImage
      width={size}
      height={size}
      className={className}
      onClick={onClick}
    />
  ),

  ProgressDoneIcon: ({ size = 24, className, onClick }: IconProps) => (
    <ProgressDone
      width={size}
      height={size}
      className={className}
      onClick={onClick}
    />
  ),

  ProgressOngoingIcon: ({ size = 24, className, onClick }: IconProps) => (
    <ProgressOngoing
      width={size}
      height={size}
      className={className}
      onClick={onClick}
    />
  ),

  RepairIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Repair
      width={size}
      height={size}
      className={className}
      onClick={onClick}
    />
  ),

  RepeatIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Repeat
      width={size}
      height={size}
      className={className}
      onClick={onClick}
    />
  ),

  SearchIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Search
      width={size}
      height={size}
      className={className}
      onClick={onClick}
    />
  ),

  ThreeDotsIcon: ({ size = 24, className, onClick }: IconProps) => (
    <ThreeDots
      width={size}
      height={size}
      className={`text-slate-500 ${className}`}
      onClick={onClick}
    />
  ),

  TimeIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Time width={size} height={size} className={className} onClick={onClick} />
  ),

  ToggleIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Toggle
      width={size}
      height={size}
      className={className}
      onClick={onClick}
    />
  ),

  UserIcon: ({ size = 24, className, onClick }: IconProps) => (
    <User
      width={size}
      height={size}
      className={`text-slate-50 ${className}`}
      onClick={onClick}
    />
  ),

  VisibilityOffIcon: ({ size = 24, className, onClick }: IconProps) => (
    <VisibilityOff
      width={size}
      height={size}
      className={className}
      onClick={onClick}
    />
  ),

  VisibilityOnIcon: ({ size = 24, className, onClick }: IconProps) => (
    <VisibilityOn
      width={size}
      height={size}
      className={className}
      onClick={onClick}
    />
  ),

  XIcon: ({ size = 24, className, onClick }: IconProps) => (
    <X
      width={size}
      height={size}
      className={`text-slate-500 ${className}`}
      onClick={onClick}
    />
  ),

  ExpansionIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Expansion
      width={size}
      height={size}
      className={`text-slate-500 ${className}`}
      onClick={onClick}
    />
  ),

  KakaoLoginIcon: ({ size = 42, onClick }: IconProps) => (
    <KakaoLogin width={size} height={size} onClick={onClick} />
  ),
};

export default Icons;
