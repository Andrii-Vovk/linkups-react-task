import classNames from "classnames";
import ReactTimeAgo from 'react-time-ago'

import Avatar from "../../StoriesAvatar/StoriesAvatar";

import styles from "./PostComment.module.scss";

export interface CommentProps {
  id: number;
  avatar: string;
  time: Date;
  text: string;
  likes: number;
  isLiked: boolean;
}

const PostComment: React.FC<CommentProps> = ({id, avatar, text, time }) => {

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
      </div>

    </div>
  );
};

export default PostComment;
