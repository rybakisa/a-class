import React from "react";
import {GoalItemType} from ".";

interface ButtonProps {
  text: string;
  isOutline?: boolean;
}

interface GoalItemProps {
  isActive: boolean;
  item: GoalItemType;
}

interface LessonModalProps {
  onClose: () => void;
  lessonLink: string;
}

interface MobileHeaderProps {
  onClose: () => void;
}

interface VideoItemProps {
  title: string;
  image: string;
  onClick: () => void;
  isDisabled?: boolean;
}

interface VideoModalProps {
  onClose: () => void;
  embedId: string;
}

interface VideosSliderProps {
  setActiveVideo: (id: string) => void;
}

interface FormModalProps {
  isError: boolean;
  onClose: () => void;
}

interface ModalProps {
  children: React.ReactNode;
  onClickOutside: () => void;
}

export type {
  ButtonProps,
  GoalItemProps,
  LessonModalProps,
  MobileHeaderProps,
  VideoItemProps,
  VideoModalProps,
  VideosSliderProps,
  FormModalProps,
  ModalProps,
};
