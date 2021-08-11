import classNames from "classnames";
import ReactTimeAgo from 'react-time-ago'
import Spinner from "../../spinner/Spinner";

import Avatar from "../../StoriesAvatar/StoriesAvatar";

import styles from "./PostComment.module.scss";

export interface CommentProps {
  id: number;
  avatar?: string | null;
  time: Date;
  text: string;
  likes: number;
  isLiked: boolean;
  isPending?: boolean
}

const PostComment: React.FC<CommentProps> = ({id, avatar, text, time, isPending }) => {

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
        {isPending && <Spinner small/>}
    </div>
  );
};

export default PostComment;
