import { AvatarProps } from "./common/interfaces";
import Avatar from "./StoriesAvatar";
import "./ProfileCard.scss";
import { thousandstoK } from "./common/functions";


type ProfilePropsType = {
  followers: number;
  following: number;
  name: string;
  interest?: string;
  about: string;
  avatar: AvatarProps;
};

export interface ProfileCardProps {
  props: ProfilePropsType;
}

const ProfileCard = ({ props }: ProfileCardProps) => {

  let isInterest = false;
  if (props.interest) {
    isInterest = true;
  } else {
    isInterest = false;
  }

  return (
    <>
      <div className="profile-card-wrapper">
        <div className="first-line">
          <div className="followers-part">
            <h3>{thousandstoK(props.followers)}</h3>
            <h4>Followers</h4>
          </div>
          <Avatar
            url={props.avatar.url}
            bordered={true}
            withPlus={true}
            style={props.avatar.style}
          />
          <div className="followers-part">
            <h3>{thousandstoK(props.following)}</h3>
            <h4>Following</h4>
          </div>
        </div>

        <div className="second-line">
          {isInterest && <h3>{props.name + " - " + props.interest}</h3>}
          {!isInterest && <h3>{props.name}</h3>}
        </div>

        <div className="third-line">
          <p>{props.about}</p>
        </div>

        <div className="forth-line">
          <button className="white-btn">Edit Profile</button>
          <button className="blue-btn">New Post</button>
        </div>

        <div className="refs">
            <a href="https://google.com">About</a>
            <a href="https://google.com">Help</a>
            <a href="https://google.com">Privacy</a>
            <a href="https://google.com">Terms</a>
            <a href="https://google.com">Locations</a>
            <a href="https://google.com">Language</a>
        </div>
        <div className="refs">
            <a href="https://google.com">&copy; 2020 Linkstagram</a>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
