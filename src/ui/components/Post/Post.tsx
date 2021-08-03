import { getRelativeTime, thousandstoK } from "../common/functions";
import ImageRotator from "../ImageRotator/ImageRotator";
import "./Post.scss";
import { useEffect, useState } from "react";
import PostPopUp from "../common/PostPopUp/PostPopUp";
import Avatar from "../StoriesAvatar/StoriesAvatar";
import PostComment, { CommentProps } from "../common/comment/PostComment";
import classNames from "classnames";
import { CommentAnswer } from "../../../typings/CommentAnswer";
import { getCommentById } from "../../../core/services/requests";

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

  const [commentAnswer, setcommentAnswer] = useState<CommentAnswer[]>();

  useEffect(() => {
    async function getAllCommentsUseEffect() {
      let api_comments = await getCommentById(post.id);
      setcommentAnswer(api_comments);
    }

    getAllCommentsUseEffect();
  }, [post.id]);

  let convertedComments: CommentProps[] = [];
  if (commentAnswer) {
    for (let item of commentAnswer) {
      convertedComments.push({
        avatar: item.commenter.profile_photo_url,
        isLiked: false,
        likes: 0,
        text: item.message,
        time: new Date(item.created_at.slice(0, -4) + "+00:00")
      })
    }
  }

  let convertedPostProps = post;

  convertedPostProps.comments = convertedComments;

  function handleLikeClick() {
    setLiked(!liked);
  }

  function togglePopUp() {
    setIsPopUpVisible(!isPopUpVisible);
  }

  return (
    <>
      {isPopUpVisible && <PostPopUp post={convertedPostProps} closeFunc={togglePopUp} />}
      <div className="post-wrapper">
        <div className="title-bar">
          <div className="title-bar-left">
            <Avatar url={post.avatar} style={{ width: 40, height: 40 }} />
            <div className="title-text">
              <h3>{post.name}</h3>
              <span className="subtext">{getRelativeTime(post.time)}</span>
            </div>
          </div>
          <div className="title-bar-right">
            <i className="fas fa-ellipsis-v"></i>
          </div>
        </div>

        <div onClick={() => togglePopUp()} className="post-img-wrapper">
          <ImageRotator url={post.imageUrl[0]} />
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
                className={classNames({
                  fas: true,
                  "fa-heart": true,
                  "red-heart": liked,
                })}
                onClick={() => handleLikeClick()}
              ></i>
              <h3 className="like-countes" onClick={() => handleLikeClick()}>
                {thousandstoK(post.likes)}
              </h3>
            </div>
            <div
              className="comment-count-wrapper"
              onClick={() => setShowComments(!showCommments)}
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
                  d="M7.75 15.75C11.8921 15.75 15.25 12.3921 15.25 8.25C15.25 4.10786 11.8921 0.75 7.75 0.75C3.60786 0.75 0.25 4.10786 0.25 8.25V16.25C0.25 17.8981 2.13153 18.8389 3.45 17.85L5.71667 16.15C6.06286 15.8904 6.48393 15.75 6.91667 15.75H7.75Z"
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
          {convertedComments &&
            convertedComments.map((item, index) => (
              <PostComment
                avatar={item.avatar}
                text={item.text}
                isLiked={item.isLiked}
                likes={item.likes}
                time={item.time}
                key={index}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Post;
