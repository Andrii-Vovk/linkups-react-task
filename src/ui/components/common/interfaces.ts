import { CSSProperties } from "react";

export interface AvatarProps {
    url: string;
    bordered?: boolean;
    withPlus?: boolean;
    style?: CSSProperties;
  }

export interface CommentProps {
  avatar: AvatarProps;
  time: Date;
  text: string;
  likes: number;
  isLiked: boolean
}