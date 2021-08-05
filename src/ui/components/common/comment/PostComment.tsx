import classNames from "classnames";
import TimeAgo from "javascript-time-ago";
import en from 'javascript-time-ago/locale/en'
import { useState } from "react";
import ReactTimeAgo from 'react-time-ago'

import Avatar from "../../StoriesAvatar/StoriesAvatar";
import thousandstoK from "../functions";

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

  TimeAgo.addDefaultLocale(en)

  return (
    <div className={styles.commentWrapper}>
      <span hidden className={styles.commentId}>{id}</span>
      <div className={styles.leftCommentPart}>
        <div className={styles.commentAvatar}>
          <Avatar url={avatar} style={{ width: 40, height: 40 }} />
        </div>
        <p className={styles.commentText}>{text}</p>
        <p className={classNames([styles.time, 'subtext'])} >
        <ReactTimeAgo date={time} locale="en-US"/>
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
