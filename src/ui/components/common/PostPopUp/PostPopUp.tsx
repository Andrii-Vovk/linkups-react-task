import React, { useEffect, useState } from "react";
import {
  getCommentById,
  getPostById,
  postComment,
} from "../../../../core/services/requests";

import { useAppDispatch, useAppSelector } from "../../../../core/store/hooks";
import {
  changePopUp,
  changeStatus,
} from "../../../../core/store/postPopUpSlice";
import ApiCommentsToPropsComments from "../../../../core/utils/ApiCommentsToPropsComments";
import ApiPostToPropsPost from "../../../../core/utils/ApiPostToPropsPost";
import ImageRotator from "../../ImageRotator/ImageRotator";
import { PostProps } from "../../Post/Post";
import Avatar from "../../StoriesAvatar/StoriesAvatar";
import PostComment from "../comment/PostComment";
import thousandstoK from "../functions";

import styles from "./PostPopUp.module.scss";

const PostPopUp: React.FC<PostProps> = ({ post }) => {
  const [postState, setPostState] = useState(post);
  const [liked, setLiked] = useState(post.isliked);

  const [comment, setComment] = useState("");

  const token = useAppSelector((state) => state.auth.authToken);

  useEffect(() => {
    setPostState(post);
    setLiked(post.isliked);
  }, [post]);

  function handleLikeClick() {
    setLiked(!liked);
  }

  const dispatch = useAppDispatch();

  function closeFunc() {
    dispatch(changeStatus());
  }

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (token) {
      const res = await postComment(comment, post.id, token);

      if (res) {
        setComment("");
        const updatedPost = await getPostById(post.id);
        if (updatedPost) {
          const convertedPost = ApiPostToPropsPost(updatedPost);
          const comments = await getCommentById(post.id);
          if (comments) {
            convertedPost.comments = comments.map((item) => ApiCommentsToPropsComments(item))
            dispatch(changePopUp(convertedPost));
          }
        }
      }
    }
  }

  return (
    <>
      <div className={styles.popupWrapper}>
        <div
          onClick={() => closeFunc()}
          className={styles.grayOverlay}
          onKeyDown={() => closeFunc()}
          tabIndex={0}
          role="button"
        />
        <div className={styles.postPopUpWrapper}>
          <span className={styles.postPhoto}>
            <ImageRotator post={postState} />
          </span>
          <div className={styles.titleGridCell}>
            <div className={styles.titleWrapper}>
              <Avatar
                url={postState.avatar}
                style={{ width: 40, height: 40 }}
              />
              <h3>{postState.name}</h3>
            </div>
            <span
              onClick={() => closeFunc()}
              className={styles.crossButton}
              onKeyDown={() => closeFunc()}
              tabIndex={0}
              role="button"
            />
          </div>
          <div className={styles.commentsGridCell}>
            {postState.comments &&
              postState.comments.map((item) => (
                <PostComment
                  id={item.id}
                  key={item.id}
                  text={item.text}
                  avatar={item.avatar}
                  likes={item.likes}
                  time={item.time}
                  isLiked={item.isLiked}
                />
              ))}
          </div>
          <div className={styles.likesGridCell}>
            <div className={styles.centered}>
              <i
                className={liked ? "fas fa-heart red-heart" : "fas fa-heart"}
                onClick={() => handleLikeClick()}
                onKeyDown={() => handleLikeClick()}
                tabIndex={0}
                role="button"
              />
              <div
                onClick={() => handleLikeClick()}
                onKeyDown={() => handleLikeClick()}
                tabIndex={0}
                role="button"
              >
                <h3 className={styles.likeCounter}>
                  {thousandstoK(postState.likes)}
                </h3>
              </div>
            </div>
          </div>
          <div className={styles.inputsGridCell}>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
              <input
                className={styles.commentInput}
                type="text"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button type="submit" className="pseudolink">
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostPopUp;
