import "./ProfileCard.scss";
import { useEffect, useState } from "react";

import { updateProfile } from "../../../core/services/requests";
import EditPopUp from "../EditPopUp/EditPopUp";
import Avatar, { AvatarProps } from "../StoriesAvatar/StoriesAvatar";
import { thousandstoK } from "../common/functions";

export type ProfileType = {
  followers: number;
  following: number;
  firstName: string;
  lastName: string;
  jobTitle?: string;
  description?: string;
  avatar?: AvatarProps;
};

export interface ProfileCardProps {
  profile: ProfileType;
  variant?: "Homepage" | "Profilepage";
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, variant }) => {
  const [profileState, setProfileState] = useState(profile);

  useEffect(() => {
    setProfileState(profile);
  }, [profile]);

  const showLinks = variant !== "Homepage";

  const [isPopUpShown, setIsPopUpShown] = useState(false);

  function closeFunc() {
    setIsPopUpShown(!isPopUpShown);
  }

  async function updateProfileRequest(requestProfile: ProfileType): Promise<void> {
    const res = await updateProfile(requestProfile);

    if (res) setProfileState(res);
  }

  return (
    <>
      {isPopUpShown && (
        <EditPopUp
          profile={profileState}
          closeFunc={closeFunc}
          updateFunc={updateProfileRequest}
        />
      )}
      <div className="profile-card-wrapper">
        <div className="first-line">
          <div className="followers-part">
            <h3>{thousandstoK(profileState.followers)}</h3>
            <h4>Followers</h4>
          </div>
          <Avatar
            url={
              profileState.avatar
                ? profileState.avatar.url
                : "https://via.placeholder.com/150"
            }
            bordered
            withPlus
            style={
              profileState.avatar
                ? profileState.avatar.style
                : { width: 88, height: 88 }
            }
          />
          <div className="followers-part">
            <h3>{thousandstoK(profileState.following)}</h3>
            <h4>Following</h4>
          </div>
        </div>

        <div className="second-line">
          {profile.jobTitle && (
            <h3>{`${profileState.firstName} ${profileState.lastName} - ${profileState.jobTitle}`}</h3>
          )}
          {!profile.jobTitle && (
            <h3>{`${profileState.firstName} ${profileState.lastName}`}</h3>
          )}
        </div>

        <div className="third-line">
          <p>{profileState.description}</p>
        </div>

        <div className="forth-line">
          <button
            type="button"
            onClick={() => closeFunc()}
            className="white-btn"
          >
            Edit Profile
          </button>
          <button type="button" className="blue-btn">
            New Post
          </button>
        </div>

        {showLinks && (
          <>
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
          </>
        )}
      </div>
    </>
  );
};

export default ProfileCard;
