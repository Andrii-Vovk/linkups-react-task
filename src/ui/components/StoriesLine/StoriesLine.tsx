import Avatar, { AvatarProps } from "../StoriesAvatar/StoriesAvatar";
import "./StoriesLine.scss";

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
      <div className="stories-grid-wrapper">
        <ul className="stories-grid">{arr}</ul>
      </div>
    </>
  );
};

export default StoriesLine;
