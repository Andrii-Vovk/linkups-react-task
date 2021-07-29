import { getRelativeTime, thousandstoK } from "./common/functions";
import { PostProps } from "./common/interfaces";
import ImageRotator from "./ImageRotator";
import Avatar from "./StoriesAvatar";
import "./Post.scss";
import { useState } from "react";
import PostPopUp from "./common/PostPopUp/PostPopUp";
//import PostComment from "./common/comment/PostComment";

const Post = ({ props }: PostProps) => {
  const [liked, setLiked] = useState(props.isliked);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  function handleLikeClick() {
    setLiked(!liked);
  }

  function togglePopUp() {
    setIsPopUpVisible(!isPopUpVisible);
  }

  return (
    <>
      {isPopUpVisible && <PostPopUp props={props} closeFunc={togglePopUp} />}
      <div className="post-wrapper">
        <div className="title-bar">
          <div className="title-bar-left">
            <Avatar url={props.avatar} style={{ width: 40, height: 40 }} />
            <div className="title-text">
              <h3>{props.name}</h3>
              <span className="subtext">{getRelativeTime(props.time)}</span>
            </div>
          </div>
          <div className="title-bar-right">
            <i className="fas fa-ellipsis-v"></i>
          </div>
        </div>

        <div onClick={() => togglePopUp()} className="post-img-wrapper">
          <ImageRotator url={props.imageUrl[0]} />
        </div>

        <p className="post-about">{props.about}</p>

        <div className="post-footer">
          <div className="left-footer-part">
            <div className="like-wrapper">
              <i
                className={liked ? "fas fa-heart red-heart" : "fas fa-heart"}
                onClick={() => handleLikeClick()}
              ></i>
              <h3 className="like-counter" onClick={() => handleLikeClick()}>
                {thousandstoK(props.likes)}
              </h3>
            </div>
            <div className="comment-count-wrapper">
              <svg
                className="comment-svg"
                width="16"
                height="19"
                viewBox="0 0 16 19"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.75 15.75C11.8921 15.75 15.25 12.3921 15.25 8.25C15.25 4.10786 11.8921 0.75 7.75 0.75C3.60786 0.75 0.25 4.10786 0.25 8.25V16.25C0.25 17.8981 2.13153 18.8389 3.45 17.85L5.71667 16.15C6.06286 15.8904 6.48393 15.75 6.91667 15.75H7.75Z"
                  fill="currentColor"
                />
              </svg>
              <h3 className="comment-counter">
                {thousandstoK(
                  props.comments !== undefined ? props.comments.length : 0
                )}
              </h3>
            </div>
          </div>
          <div className="right-footer-part">
            <a href="https://google.com" className="share-link">
              Share
            </a>
          </div>
        </div>
        {/* {props.comments && (
          <PostComment
            avatar={props.comments[0].avatar}
            text={props.comments[0].text}
            isLiked={props.comments[0].isLiked}
            likes={props.comments[0].likes}
            time={props.comments[0].time}
          />
        )} */}
      </div>
    </>
  );
};

export default Post;
