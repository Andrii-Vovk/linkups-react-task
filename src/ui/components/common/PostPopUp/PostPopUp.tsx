import { useState } from "react";
import { PostProps } from "../../Post/Post";
import Avatar from "../../StoriesAvatar/StoriesAvatar";
import PostComment from "../comment/PostComment";
import { thousandstoK } from "../functions";
import "./PostPopUp.scss";

interface PostPoUpProps extends PostProps {
  closeFunc(): void;
}

const PostPopUp = ({ post, closeFunc }: PostPoUpProps) => {
  const [liked, setLiked] = useState(post.isliked);
  function handleLikeClick() {
    setLiked(!liked);
  }

  return (
    <>
      {" "}
      <div className="popup-wrapper">
        <div onClick={() => closeFunc()} className="gray-overlay"></div>
        <div className="post-pop-up-wrapper">
          <img src={post.imageUrl[0]} alt="post" className="post-photo" />
          <div className="title-grid-cell">
            <div className="title-wrapper">
              <Avatar url={post.avatar} style={{ width: 40, height: 40 }} />
              <h3>{post.name}</h3>
            </div>
            <span onClick={() => closeFunc()} className="cross-button"></span>
          </div>
          <div className="comments-grid-cell">
            {post.comments &&
              post.comments.map((item) => (
                <PostComment
                  text={item.text}
                  avatar={item.avatar}
                  likes={item.likes}
                  time={item.time}
                  isLiked={item.isLiked}
                />
              ))}
          </div>
          <div className="likes-grid-cell">
            <div className="centered">
              <i
                className={liked ? "fas fa-heart red-heart" : "fas fa-heart"}
                onClick={() => handleLikeClick()}
              ></i>
              <h3 className="like-counter" onClick={() => handleLikeClick()}>
                {thousandstoK(post.likes)}
              </h3>
            </div>
          </div>
          <div className="inputs-grid-cell">
            <input
              className="comment-input"
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
