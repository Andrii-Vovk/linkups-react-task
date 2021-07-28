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

export type PostPropsType = {
  name: string;
  time: Date;
  avatar: string;
  imageUrl: string[];
  about: string;
  likes: number;
  isliked?: boolean;
  comments?: CommentProps[];
};

export interface PostProps {
  props: PostPropsType;
}