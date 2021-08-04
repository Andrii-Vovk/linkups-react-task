import Avatar, { AvatarProps } from "../StoriesAvatar/StoriesAvatar";

import styles from "./StoriesLine.module.scss";

interface StoriesLinePropsType extends AvatarProps{
  key: number;
}
export interface StoriesLineProps {
  avatarArray: StoriesLinePropsType[];
}

const StoriesLine: React.FC<StoriesLineProps> = ({ avatarArray }) => {
  const arr = avatarArray.map((item) => (
      <li key={item.key}>
        <Avatar url={item.url} bordered={item.bordered} />
      </li>
  ));

  return (
    <>
      <div className={styles.storiesGridWrapper}>
        <ul className={styles.storiesGrid}>{arr}</ul>
      </div>
    </>
  );
};

export default StoriesLine;
