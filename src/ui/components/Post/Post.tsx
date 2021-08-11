import classNames from "classnames";
import { useEffect, useState } from "react";
import ReactTimeAgo from "react-time-ago";

import {
  deletePostRequest,
  getCommentById,
  removeLike,
  setLike,
} from "../../../core/services/requests";
import { useAppDispatch, useAppSelector } from "../../../core/store/hooks";
import { changePopUp, changeStatus } from "../../../core/store/postPopUpSlice";
import { removePost } from "../../../core/store/postsSlice";
import ApiCommentsToPropsComments from "../../../core/utils/ApiCommentsToPropsComments";
import ImageRotator from "../ImageRotator/ImageRotator";
import Avatar from "../StoriesAvatar/StoriesAvatar";
import DropDown from "../common/DropDown/DropDown";
import PostComment, { CommentProps } from "../common/comment/PostComment";
import thousandstoK from "../common/functions";

import styles from "./Post.module.scss";

export type PostPropsType = {
  username?: string;
  id: number;
  name: string;
  time: string;
  avatar: string;
  imageUrl: string[];
  about: string;
  likes: number;
  isliked: boolean;
  comments?: CommentProps[];
};

export interface PostProps {
  post: PostPropsType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(post.isliked);
  const [likes, setLikes] = useState(post.likes);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [showCommments, setShowComments] = useState(false);

  const author = useAppSelector((state) => state.profile.profile?.username);
  const token = useAppSelector((state) => state.auth.authToken);

  const [commentAnswer, setcommentAnswer] = useState<CommentProps[]>();

  const date = new Date(post.time);

  const dropDownData = author === post.username ? [{index: 0, text: "Delete", onClick: handleDelete}] : [];

  useEffect(() => {
    async function getAllCommentsUseEffect() {
      const apiComments = await getCommentById(post.id);
      if (apiComments && apiComments[0]) {
        setcommentAnswer(
          apiComments.map((item) => ApiCommentsToPropsComments(item))
        );
      }
    }

    getAllCommentsUseEffect();
  }, [post.id]);

  const convertedPostProps = {
    ...post,
    comments: commentAnswer,
  };

  async function handleLikeClick() {
    if (!isLiked && token) {
      const response = await setLike(post.id, token);
      if (response) {
        setIsLiked(!isLiked);
        setLikes(likes + 1);
      }
    } else if (isLiked && token) {
      const response = await removeLike(post.id, token);
      if (response) {
        setIsLiked(!isLiked);
        setLikes(likes - 1);
      }
    }
  }

  async function handleDelete() {
    if (post.id && token) {
      const res = await deletePostRequest(post.id, token);
      if (res) {
        dispatch(removePost(post.id));
      }
    }
  }

  const dispatch = useAppDispatch();

  function togglePopUp() {
    setIsPopUpVisible(!isPopUpVisible);

    dispatch(changePopUp(convertedPostProps));
    dispatch(changeStatus());
  }

  return (
    <>
      <div className={styles.postWrapper}>
        <div className={styles.titleBar}>
          <div className={styles.titleBarLeft}>
            <Avatar url={post.avatar} style={{ width: 40, height: 40 }} />
            <div className={styles.titleText}>
              <h3>{post.name}</h3>
              <span className="subtext">
                <ReactTimeAgo date={date} locale="en-US" />
              </span>
            </div>
          </div>
          <div className={styles.titleBarRight}>
            <DropDown dropdown={dropDownData} />
          </div>
        </div>

        <div className={styles.rotator}>
          <ImageRotator post={post} imageClickFunc={togglePopUp} />
        </div>

        <p className={styles.postAbout}>{post.about}</p>

        <div className={styles.postFooter}>
          <div className={styles.leftFooterPart}>
            <div
              className={classNames([
                styles.likeWrapper,
                { [styles.hideLikes]: showCommments },
              ])}
            >
              <i
                className={classNames([
                  "fas",
                  "fa-heart",
                  styles.heartMargin,
                  { [styles.redHeart]: isLiked },
                ])}
                onClick={() => handleLikeClick()}
                onKeyDown={() => handleLikeClick()}
                tabIndex={0}
                role="button"
              />
              <div
                role="button"
                onKeyDown={() => handleLikeClick()}
                className={styles.likeCounter}
                onClick={() => handleLikeClick()}
                tabIndex={0}
              >
                <h3>{thousandstoK(likes)}</h3>
              </div>
            </div>
            <div
              className={styles.commentCountWrapper}
              onClick={() => setShowComments(!showCommments)}
              role="button"
              tabIndex={0}
              onKeyDown={() => setShowComments(!showCommments)}
            >
              <svg
                className={styles.commentSvg}
                width="16"
                height="19"
                viewBox="0 0 16 19"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.75 15.75C11.8921 15.75 15.25 12.3921 15.25 8.25C15.25 4.10786 11.8921 0.75 7.75 0.75C3.60786
                   0.75 0.25 4.10786 0.25 8.25V16.25C0.25 17.8981 2.13153 18.8389 3.45 17.85L5.71667 
                   16.15C6.06286 15.8904
                    6.48393 15.75 6.91667 15.75H7.75Z"
                  fill="currentColor"
                />
              </svg>
              <h3 className={styles.commentCounter}>
                {thousandstoK(
                  commentAnswer !== undefined ? commentAnswer.length : 0
                )}
              </h3>
            </div>
          </div>
          <div className={styles.rightFooterPart}>
            <a href="https://google.com" className={styles.shareLink}>
              Share
            </a>
          </div>
        </div>
        <div
          className={classNames([
            styles.postHiddenComments,
            { [styles.comeOut]: showCommments },
          ])}
        >
          {commentAnswer &&
            commentAnswer.map((item) => (
              <PostComment
                id={item.id}
                avatar={item.avatar}
                text={item.text}
                isLiked={item.isLiked}
                likes={item.likes}
                time={item.time}
                key={item.id}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Post;
