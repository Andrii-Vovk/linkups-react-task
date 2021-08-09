import { useEffect, useState } from "react";

import { useAppDispatch } from "../../../../core/store/hooks";
import { changeStatus } from "../../../../core/store/postPopUpSlice";
import ImageRotator from "../../ImageRotator/ImageRotator";
import { PostProps } from "../../Post/Post";
import Avatar from "../../StoriesAvatar/StoriesAvatar";
import PostComment from "../comment/PostComment";
import thousandstoK from "../functions";

import styles from "./PostPopUp.module.scss";

const PostPopUp: React.FC<PostProps> = ({ post }) => {
  const [postState, setPostState] = useState(post);
  const [liked, setLiked] = useState(post.isliked);

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
          {/* <img
            src={postState.imageUrl[0]}
            alt="post"
            className={styles.postPhoto}
          /> */}
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
            <input
              className={styles.commentInput}
              type="text"
              placeholder="Add a comment..."
            />
            <a href="https://google.com">Post</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostPopUp;
