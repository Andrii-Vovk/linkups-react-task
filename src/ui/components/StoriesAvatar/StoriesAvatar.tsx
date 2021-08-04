import classNames from "classnames";
import { CSSProperties } from "react";
import "./StoriesAvatar.scss";

export interface AvatarProps {
  url: string;
  bordered?: boolean;
  withPlus?: boolean;
  style?: CSSProperties;
}

const Avatar: React.FC<AvatarProps> = ({ url, bordered, withPlus, style }) => {
  const classes = classNames({
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
