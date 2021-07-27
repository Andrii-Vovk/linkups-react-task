import { getRelativeTime, thousandstoK } from "./common/functions";
import { CommentProps } from "./common/interfaces";
import ImageRotator from "./ImageRotator";
import Avatar from "./StoriesAvatar";
import "./Post.scss";

type PostPropsType = {
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
  props: PostPropsType;
}

const Post = ({ props }: PostProps) => {
  return (
    <>
      <div className="post-wrapper">
        <Avatar url={props.avatar} style={{ width: 40, height: 40 }} />
        <div className="title-bar">
          <h3>{props.name}</h3>
          <span className="subtext">{getRelativeTime(props.time)}</span>
        </div>

        <div className="post-img-wrapper">
          <ImageRotator url={props.imageUrl[0]} />
        </div>

        <p className="post-about">{props.about}</p>

        <div className="post-footer">
          <div className="left-footer-part">
            <h3 className="like-counter">{thousandstoK(props.likes)}</h3>
            <h3 className="comment-counter">
              {thousandstoK(
                props.comments !== undefined ? props.comments.length : 0
              )}
            </h3>
          </div>
          <div className="right-footer-part">
            <a href="https://google.com" className="share-link">
              Share
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
