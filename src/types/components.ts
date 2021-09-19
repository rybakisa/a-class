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
  onClick: () => void;
  isDisabled?: boolean;
}

interface YoutubeEmbedProps {
  embedId: string;
}

interface VideoModalProps {
  onClose: () => void;
  embedId: string;
}

interface VideosSliderProps {
  setActiveVideo: (id: string) => void;
}

export type {
  ButtonProps,
  GoalItemProps,
  LessonModalProps,
  MobileHeaderProps,
  VideoItemProps,
  YoutubeEmbedProps,
  VideoModalProps,
  VideosSliderProps,
};
