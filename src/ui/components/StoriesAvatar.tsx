import "./StoriesAvatar.scss";
import { AvatarProps } from "./common/interfaces";


const Avatar = ({ url, bordered, withPlus, style }: AvatarProps) => {

  let classes = "avatar-container";
  if(bordered) {
    classes += " avatar-container-bordered";
  }
  if(withPlus) {
    classes += " avatar-with-plus";
  }

  return (
    <>
      <div className={classes} style={style}>
        <img src={url} alt="Avatar" className="stories-avatar" />
      </div>
    </>
  );
};

export default Avatar;
