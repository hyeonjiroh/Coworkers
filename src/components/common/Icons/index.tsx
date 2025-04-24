'use client';

import React from 'react';

import Alert from '@/assets/icons/alert.svg';
import Calendar from '@/assets/icons/calendar.svg';
import Check from '@/assets/icons/check.svg';
import CheckGreen from '@/assets/icons/check_green.svg';
import CheckWhite from '@/assets/icons/check_white.svg';
import CheckboxDefault from '@/assets/icons/checkbox_default.svg';
import CheckboxActive from '@/assets/icons/chekcbox_active.svg';
import Comment from '@/assets/icons/comment.svg';
import Cowrkers from '@/assets/icons/coworkers.svg';
import Done from '@/assets/icons/done.svg';
import Gear from '@/assets/icons/gear.svg';
import GnbMenu from '@/assets/icons/gnb_menu.svg';
import Img from '@/assets/icons/img.svg';
import Left from '@/assets/icons/left.svg';
import List from '@/assets/icons/list.svg';
import Logo from '@/assets/icons/logo.svg';
import Plus from '@/assets/icons/plus.svg';
import ProfileImage from '@/assets/icons/profile_image.svg';
import PrograssDone from '@/assets/icons/progress_done.svg';
import PrograssOngoing from '@/assets/icons/progress_ongoing.svg';
import Repair from '@/assets/icons/repair.svg';
import Repeat from '@/assets/icons/repeat.svg';
import Right from '@/assets/icons/right.svg';
import Search from '@/assets/icons/search.svg';
import ThreeDots from '@/assets/icons/three_dots.svg';
import Time from '@/assets/icons/time.svg';
import Toggle from '@/assets/icons/toggle.svg';
import User from '@/assets/icons/user.svg';
import VisbilityOff from '@/assets/icons/visibility_off.svg';
import VisbilityOn from '@/assets/icons/visibility_on.svg';
import X from '@/assets/icons/x.svg';

interface IconProps {
  size?: number;
  className?: string;
  onClick?: React.MouseEventHandler<SVGElement>;
}

const Icons = {
  AlertIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Alert width={size} height={size} className={className} onClick={onClick} />
  ),
  CalendarIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Calendar
      width={size}
      height={size}
      className={className}
      onClick={onClick}
    />
  ),
  CheckIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Check width={size} height={size} className={className} onClick={onClick} />
  ),

  CheckGreenIcon: ({ size = 24, className, onClick }: IconProps) => (
    <CheckGreen
      width={size}
      height={size}
      className={className}
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
  CheckboxDefaultIcon: ({ size = 24, className, onClick }: IconProps) => (
    <CheckboxDefault
      width={size}
      height={size}
      className={className}
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
  CommentIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Comment
      width={size}
      height={size}
      className={className}
      onClick={onClick}
    />
  ),
  CowrkersIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Cowrkers
      width={size}
      height={size}
      className={className}
      onClick={onClick}
    />
  ),
  DoneIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Done width={size} height={size} className={className} onClick={onClick} />
  ),
  GearIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Gear width={size} height={size} className={className} onClick={onClick} />
  ),
  GnbMenuIcon: ({ size = 24, className, onClick }: IconProps) => (
    <GnbMenu
      width={size}
      height={size}
      className={`text-[#64748B] ${className}`}
      onClick={onClick}
    />
  ),

  ImgIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Img
      width={size}
      height={size}
      className={`text-[#64748B] ${className}`}
      onClick={onClick}
    />
  ),
  LeftIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Left width={size} height={size} className={className} onClick={onClick} />
  ),
  ListIcon: ({ size = 24, className, onClick }: IconProps) => (
    <List width={size} height={size} className={className} onClick={onClick} />
  ),
  LogoIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Logo width={size} height={size} className={className} onClick={onClick} />
  ),
  PlusIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Plus width={size} height={size} className={className} onClick={onClick} />
  ),
  ProgileImageIcon: ({ size = 24, className, onClick }: IconProps) => (
    <ProfileImage
      width={size}
      height={size}
      className={className}
      onClick={onClick}
    />
  ),
  PrograssDoneIcon: ({ size = 24, className, onClick }: IconProps) => (
    <PrograssDone
      width={size}
      height={size}
      className={className}
      onClick={onClick}
    />
  ),
  PrograssOngoingIcon: ({ size = 24, className, onClick }: IconProps) => (
    <PrograssOngoing
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
  RightIcon: ({ size = 24, className, onClick }: IconProps) => (
    <Right width={size} height={size} className={className} onClick={onClick} />
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
      className={className}
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
      className={`text-[#F8FAFC] ${className}`}
      onClick={onClick}
    />
  ),
  VisbilityOffIcon: ({ size = 24, className, onClick }: IconProps) => (
    <VisbilityOff
      width={size}
      height={size}
      className={className}
      onClick={onClick}
    />
  ),
  VisbilityOnIcon: ({ size = 24, className, onClick }: IconProps) => (
    <VisbilityOn
      width={size}
      height={size}
      className={className}
      onClick={onClick}
    />
  ),
  XIcon: ({ size = 24, className, onClick }: IconProps) => (
    <X width={size} height={size} className={className} onClick={onClick} />
  ),
};

export default Icons;
