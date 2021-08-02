import classNames from "classnames";
import { CSSProperties } from "react";
import "./StoriesAvatar.scss";

export interface AvatarProps {
  url: string;
  bordered?: boolean;
  withPlus?: boolean;
  style?: CSSProperties;
}

const Avatar = ({ url, bordered, withPlus, style }: AvatarProps) => {
  let classes = classNames({
    "avatar-container": true,
    "avatar-container-bordered": bordered,
    "avatar-with-plus": withPlus,
  });

  return (
    <>
      <div className={classes} style={style}>
        <img src={url} alt="Avatar" className="stories-avatar" />
      </div>
    </>
  );
};

export default Avatar;
