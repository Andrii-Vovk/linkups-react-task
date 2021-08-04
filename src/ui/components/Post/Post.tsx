import "./Post.scss";
import classNames from "classnames";
import { useEffect, useState } from "react";

import { getCommentById } from "../../../core/services/requests";
import ApiCommentsToPropsComments from "../../../core/utils/ApiCommentsToPropsComments";
import ImageRotator from "../ImageRotator/ImageRotator";
import Avatar from "../StoriesAvatar/StoriesAvatar";
import PostPopUp from "../common/PostPopUp/PostPopUp";
import PostComment, { CommentProps } from "../common/comment/PostComment";
import { getRelativeTime, thousandstoK } from "../common/functions";

export type PostPropsType = {
  id: number;
  name: string;
  time: Date;
  avatar: string;
  imageUrl: string[];
  about: string;
  likes: number;
  isliked?: boolean;
  comments?: CommentProps[];
};

export interface PostProps {
  post: PostPropsType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [liked, setLiked] = useState(post.isliked);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [showCommments, setShowComments] = useState(false);

  const [commentAnswer, setcommentAnswer] = useState<CommentProps[]>();

  useEffect(() => {
    async function getAllCommentsUseEffect() {
      const apiComments = await getCommentById(post.id);
      if (apiComments && apiComments[0]){
        setcommentAnswer(
          apiComments.map((item) => ApiCommentsToPropsComments(item))
        );
      }
        
    }

    getAllCommentsUseEffect();
  }, [post.id]);

  const convertedPostProps = post;

  convertedPostProps.comments = commentAnswer;

  function handleLikeClick() {
    setLiked(!liked);
  }

  function togglePopUp() {
    setIsPopUpVisible(!isPopUpVisible);
  }

  return (
    <>
      {isPopUpVisible && (
        <PostPopUp post={convertedPostProps} closeFunc={togglePopUp} />
      )}
      <div className="post-wrapper">
        <div className="title-bar">
          <div className="title-bar-left">
            <Avatar url={post.avatar} style={{ width: 40, height: 40 }} />
            <div className="title-text">
              <h3>{post.name}</h3>
              <span className="subtext">
                {getRelativeTime(post.time) as string}
              </span>
            </div>
          </div>
          <div className="title-bar-right">
            <i className="fas fa-ellipsis-v" />
          </div>
        </div>

        <div
          role="button"
          onClick={() => togglePopUp()}
          className="post-img-wrapper"
          onKeyDown={() => togglePopUp()}
          tabIndex={0}
        >
          <ImageRotator url={post.imageUrl[0] ? post.imageUrl[0] : "https://via.placeholder.com/300" } />
        </div>

        <p className="post-about">{post.about}</p>

        <div className="post-footer">
          <div className="left-footer-part">
            <div
              className={classNames({
                "like-wrapper": true,
                "hide-likes": showCommments,
              })}
            >
              <i
                className={classNames([
                  "fas",
                  "fa-heart",
                  { "red-heart": liked },
                ])}
                onClick={() => handleLikeClick()}
                onKeyDown={() => handleLikeClick()}
                tabIndex={0}
                role="button"
              />
              <div
                role="button"
                onKeyDown={() => handleLikeClick()}
                className="like-countes"
                onClick={() => handleLikeClick()}
                tabIndex={0}
              >
                <h3>{thousandstoK(post.likes)}</h3>
              </div>
            </div>
            <div
              className="comment-count-wrapper"
              onClick={() => setShowComments(!showCommments)}
              role="button"
              tabIndex={0}
              onKeyDown={() => setShowComments(!showCommments)}
            >
              <svg
                className="comment-svg"
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
              <h3 className="comment-counter">
                {thousandstoK(
                  post.comments !== undefined ? post.comments.length : 0
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
        <div
          className={classNames({
            "post-hidden-comments": true,
            "come-out": showCommments,
          })}
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
