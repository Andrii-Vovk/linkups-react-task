import classNames from "classnames";
import { useState } from "react";

import Avatar from "../../StoriesAvatar/StoriesAvatar";
import { getRelativeTime, thousandstoK } from "../functions";
import "./PostComment.scss";

export interface CommentProps {
  id: number;
  avatar: string;
  time: Date;
  text: string;
  likes: number;
  isLiked: boolean;
}

const PostComment: React.FC<CommentProps> = ({id, avatar, text, time, likes, isLiked }) => {
  const [liked, setIsLiked] = useState(isLiked);

  function handleLikeClick() {
    setIsLiked(!liked);
  }

  return (
    <div className="comment-wrapper">
      <span hidden className="comment-id">{id}</span>
      <div className="left-comment-part">
        <div className="comment-avatar">
          <Avatar url={avatar} style={{ width: 40, height: 40 }} />
        </div>
        <p className="comment-text">{text}</p>
        <p id="time" className="subtext">
          {getRelativeTime(time) as string}
        </p>
        <p id="likes" className="subtext">
          {`${thousandstoK(likes)  } likes`}
        </p>
        <a id="reply" href="https://google.com">
          Reply
        </a>
      </div>
      
      <div className="right-comment-part">
        <i
          className={classNames({
            fas: true,
            "fa-heart": true,
            "red-heart": liked,
          })}
          onClick={() => handleLikeClick()}
          onKeyDown={() => handleLikeClick()}
          tabIndex={0}
          role="button"
          />
      </div>
    </div>
  );
};

export default PostComment;
