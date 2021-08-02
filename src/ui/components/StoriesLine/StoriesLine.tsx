import Avatar, { AvatarProps } from "../StoriesAvatar/StoriesAvatar";
import "./StoriesLine.scss";

interface tStoriesLineProps extends AvatarProps{
  key: number;
}
export interface StoriesLineProps {
  avatarArray: tStoriesLineProps[];
}

const StoriesLine = ({ avatarArray }: StoriesLineProps) => {
  const arr = avatarArray.map((item) => (
      <li key={item.key}>
        <Avatar url={item.url} bordered={item.bordered} />
      </li>
  ));

  return (
    <>
      <div className="stories-grid-wrapper">
        <ul className="stories-grid">{arr}</ul>
      </div>
    </>
  );
};

export default StoriesLine;
