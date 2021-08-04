import classNames from "classnames";
import { CSSProperties } from "react";

import styles from "./StoriesAvatar.module.scss";

export interface AvatarProps {
  url: string;
  bordered?: boolean;
  withPlus?: boolean;
  style?: CSSProperties;
}

const Avatar: React.FC<AvatarProps> = ({ url, bordered, withPlus, style }) => {
  const classes = classNames([
    styles.avatarContainer,
    {
      [styles.avatarContainerBordered]: bordered,
      [styles.avatarWithPlus]: withPlus,
    },
  ]);

  return (
    <>
      <div className={classes} style={style}>
        <img src={url} alt="Avatar" className={styles.storiesAvatar} />
      </div>
    </>
  );
};

export default Avatar;
