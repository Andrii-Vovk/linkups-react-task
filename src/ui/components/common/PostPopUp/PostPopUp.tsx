/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import {
  getCommentById,
  postComment,
} from "../../../../core/services/requests";
import { useAppDispatch, useAppSelector } from "../../../../core/store/hooks";
import {
  changeComments,
  changeStatus,
} from "../../../../core/store/postPopUpSlice";
import ApiCommentsToPropsComments from "../../../../core/utils/ApiCommentsToPropsComments";
import ImageRotator from "../../ImageRotator/ImageRotator";
import { PostProps } from "../../Post/Post";
import Avatar from "../../StoriesAvatar/StoriesAvatar";
import PostComment, { CommentProps } from "../comment/PostComment";
import thousandstoK from "../functions";

import styles from "./PostPopUp.module.scss";

const PostPopUp: React.FC<PostProps> = ({ post }) => {
  const [postState, setPostState] = useState(post);
  const [liked, setLiked] = useState(post.isliked);
  const [commentState, setCommentState] = useState(postState.comments?.slice());

  const [comment, setComment] = useState("");

  const token = useAppSelector((state) => state.auth.authToken);
  const currentUser = useAppSelector((state) => state.profile.profile);

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

    const newComment: CommentProps = {
      id: 99999,
      avatar: currentUser?.avatar?.url,
      time: new Date(),
      text: comment,
      likes: 0,
      isLiked: false,
      isPending: true,
    };

    const newCommentState = commentState?.concat(newComment);
    console.log(newCommentState)
    dispatch(changeComments(newCommentState));
    if (token) {
      const res = await postComment(comment, post.id, token);

      if (res) {
        setComment("");
        const comments = await getCommentById(post.id);
        if (comments) {
          const convertedComments = comments.map((item) =>
            ApiCommentsToPropsComments(item)
          );
          dispatch(changeComments(convertedComments));
        }
      }
    }
  }

  useEffect(() => {
    setCommentState(postState.comments)
  }, [postState.comments])

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
            {commentState &&
              commentState.map((item) => (
                <PostComment
                  id={item.id}
                  key={item.id}
                  text={item.text}
                  avatar={item.avatar}
                  likes={item.likes}
                  time={item.time}
                  isLiked={item.isLiked}
                  isPending={item.isPending}
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
