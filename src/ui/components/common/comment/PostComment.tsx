import { useState } from "react";
import Avatar, { AvatarProps } from "../../StoriesAvatar/StoriesAvatar";
import { getRelativeTime, thousandstoK } from "../functions";
import "./PostComment.scss";


export interface CommentProps {
  avatar: AvatarProps;
  time: Date;
  text: string;
  likes: number;
  isLiked: boolean
}

const PostComment = ({ avatar, text, time, likes, isLiked }: CommentProps) => {
  const [liked, setIsLiked] = useState(isLiked);

  function handleLikeClick() {
    setIsLiked(!liked);
  }

  return (
    <div className="comment-wrapper">
      <div className="left-comment-part">
        <div className="comment-avatar">
          <Avatar url={avatar.url} style={{ width: 40, height: 40 }} />
        </div>
        <p className="comment-text">{text}</p>
        <p id="time" className="subtext">{getRelativeTime(time)}</p>
        <p id="likes" className="subtext">{thousandstoK(likes) + " likes"}</p>
        <a id="reply" href="https://google.com">Reply</a>
      </div>
      <div className="right-comment-part">
        <i
          className={liked ? "fas fa-heart red-heart" : "fas fa-heart"}
          onClick={() => handleLikeClick()}
        ></i>
      </div>
    </div>
  );
};

export default PostComment;
