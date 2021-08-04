import classNames from "classnames";
import { useState } from "react";

import Avatar from "../../StoriesAvatar/StoriesAvatar";
import { getRelativeTime, thousandstoK } from "../functions";

import styles from "./PostComment.module.scss";

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
    <div className={styles.commentWrapper}>
      <span hidden className={styles.commentId}>{id}</span>
      <div className={styles.leftCommentPart}>
        <div className={styles.commentAvatar}>
          <Avatar url={avatar} style={{ width: 40, height: 40 }} />
        </div>
        <p className={styles.commentText}>{text}</p>
        <p className={classNames([styles.time, 'subtext'])} >
          {getRelativeTime(time) as string}
        </p>
        <p  className={classNames([styles.likes, 'subtext'])}>
          {`${thousandstoK(likes)  } likes`}
        </p>
        <a className={styles.reply} href="https://google.com">
          Reply
        </a>
      </div>
      
      <div className={styles.rightCommentPart}>
        <i
          className={classNames(
           [ 'fas',
            'fa-heart',
            {"red-heart": liked,}]
          )}
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
