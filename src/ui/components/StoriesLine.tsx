import { AvatarProps } from "./common/interfaces";
import Avatar from "./StoriesAvatar";
import "./StoriesLine.scss";

export interface StoriesLineProps {
  avatarArray: AvatarProps[];
}

const StoriesLine = ({ avatarArray }: StoriesLineProps) => {
  const arr = avatarArray.map((number) => (
      <li>
        <Avatar url={number.url} bordered={number.bordered} />
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
