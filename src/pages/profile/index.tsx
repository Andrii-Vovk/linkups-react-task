import React, { useEffect, useState } from "react";

import { getMyProfile } from "../../core/services/requests";
import ApiProfieToPropsProfile from "../../core/utils/ApiPorfileToPropsProfile";
import Navbar from "../../ui/components/Navbar/Navbar";
import ProfileCard, {
  ProfileCardProps,
} from "../../ui/components/ProfileCard/ProfileCard";
import ProfilePhotoGrid from "../../ui/components/ProfilePhotoGrid/ProfilePhotoGrid";
import "./index.scss";

const ProfilePage: React.FC = () => {
  const PlaceholderProfileProps = {
    followers: 0,
    following: 0,
    firstName: "Loading...",
    lastName: "",
    interest: "",
    about: "",
    avatar: {
      url: "https://via.placeholder.com/80",
      style: {
        width: 88,
        height: 88,
      },
    },
  };

  const PlaceholderPostProps = [
    {
      post: {
        id: 1,
        name: "Bill Murray",
        time: new Date("January 16, 2021"),
        avatar: "https://www.fillmurray.com/645/360?u=4",
        imageUrl: ["https://www.fillmurray.com/645/360?u=4"],
        about: "",
        likes: 1230,
      },
    },
    {
      post: {
        id: 1,
        name: "Bill Murray",
        time: new Date("January 16, 2021"),
        avatar: "https://www.fillmurray.com/645/360?u=4",
        imageUrl: ["https://www.fillmurray.com/645/360?u=4"],
        about: "",
        likes: 1230,
      },
    },
    {
      post: {
        id: 1,
        name: "Bill Murray",
        time: new Date("January 16, 2021"),
        avatar: "https://www.fillmurray.com/645/360?u=4",
        imageUrl: ["https://www.fillmurray.com/645/360?u=4"],
        about: "",
        likes: 1230,
      },
    },
    {
      post: {
        id: 1,
        name: "Bill Murray",
        time: new Date("January 16, 2021"),
        avatar: "https://www.fillmurray.com/645/360?u=4",
        imageUrl: ["https://www.fillmurray.com/645/360?u=4"],
        about: "",
        likes: 1230,
      },
    },
    {
      post: {
        id: 1,
        name: "Bill Murray",
        time: new Date("January 16, 2021"),
        avatar: "https://www.fillmurray.com/645/360?u=4",
        imageUrl: ["https://www.fillmurray.com/645/360?u=4"],
        about: "",
        likes: 1230,
      },
    },
    {
      post: {
        id: 1,
        name: "Bill Murray",
        time: new Date("January 16, 2021"),
        avatar: "https://www.fillmurray.com/645/360?u=4",
        imageUrl: ["https://www.fillmurray.com/645/360?u=4"],
        about: "",
        likes: 1230,
      },
    },
  ];

  const [myProfile, setMyProfile] = useState<ProfileCardProps>();

  useEffect(() => {
    async function getAllPostsUseEffect() {
      const apiMyProfile = await getMyProfile();
      setMyProfile(ApiProfieToPropsProfile(apiMyProfile, "Homepage"));
    }

    getAllPostsUseEffect();
  }, []);

  return (
    <>
      <Navbar variant="Profilepage" />
      <ProfileCard
        profile={myProfile ? myProfile.profile : PlaceholderProfileProps}
        variant="Profilepage"
      />
      <div className="grid-wrapper">
        <ProfilePhotoGrid postsProp={PlaceholderPostProps} />
      </div>
    </>
  );
};

export default ProfilePage;
