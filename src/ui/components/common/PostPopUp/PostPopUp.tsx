import { useState } from "react";

import { PostProps } from "../../Post/Post";
import Avatar from "../../StoriesAvatar/StoriesAvatar";
import PostComment from "../comment/PostComment";
import { thousandstoK } from "../functions";
import "./PostPopUp.scss";

interface PostPoUpProps extends PostProps {
  closeFunc(): void;
}

const PostPopUp: React.FC<PostPoUpProps> = ({ post, closeFunc }) => {
  const [liked, setLiked] = useState(post.isliked);
  function handleLikeClick() {
    setLiked(!liked);
  }

  return (
    <>
      {" "}
      <div className="popup-wrapper">
        <div
          onClick={() => closeFunc()}
          className="gray-overlay"
          onKeyDown={() => closeFunc()}
          tabIndex={0}
          role="button"
        />
        <div className="post-pop-up-wrapper">
          <img src={post.imageUrl[0]} alt="post" className="post-photo" />
          <div className="title-grid-cell">
            <div className="title-wrapper">
              <Avatar url={post.avatar} style={{ width: 40, height: 40 }} />
              <h3>{post.name}</h3>
            </div>
            <span
              onClick={() => closeFunc()}
              className="cross-button"
              onKeyDown={() => closeFunc()}
              tabIndex={0}
              role="button"
            />
          </div>
          <div className="comments-grid-cell">
            {post.comments &&
              post.comments.map((item) => (
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
          <div className="likes-grid-cell">
            <div className="centered">
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
                <h3 className="like-counter">{thousandstoK(post.likes)}</h3>
              </div>
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
