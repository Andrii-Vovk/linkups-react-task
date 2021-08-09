import React from "react";

import { useAppSelector } from "../../core/store/hooks";
import { PlaceholderProfileProps } from "../../core/utils/placeholders/placeholders";
import Navbar from "../../ui/components/Navbar/Navbar";
import ProfileCard from "../../ui/components/ProfileCard/ProfileCard";
import ProfilePhotoGrid from "../../ui/components/ProfilePhotoGrid/ProfilePhotoGrid";
import useFetchProfile from "../../ui/hooks/useFetchProfile";
import "./index.scss";

const ProfilePage: React.FC = () => {
  const PlaceholderPostProps = [
    {
      id: 1,
      name: "Bill Murray",
      time: new Date("January 16, 2021"),
      avatar: "https://www.fillmurray.com/645/360?u=4",
      imageUrl: ["https://www.fillmurray.com/645/360?u=4"],
      about: "",
      likes: 1230,
    },
    {
      id: 1,
      name: "Bill Murray",
      time: new Date("January 16, 2021"),
      avatar: "https://www.fillmurray.com/645/360?u=4",
      imageUrl: ["https://www.fillmurray.com/645/360?u=4"],
      about: "",
      likes: 1230,
    },
    {
      id: 1,
      name: "Bill Murray",
      time: new Date("January 16, 2021"),
      avatar: "https://www.fillmurray.com/645/360?u=4",
      imageUrl: ["https://www.fillmurray.com/645/360?u=4"],
      about: "",
      likes: 1230,
    },
    {
      id: 1,
      name: "Bill Murray",
      time: new Date("January 16, 2021"),
      avatar: "https://www.fillmurray.com/645/360?u=4",
      imageUrl: ["https://www.fillmurray.com/645/360?u=4"],
      about: "",
      likes: 1230,
    },
  ];

  const myProfile = useAppSelector((state) => state.profile.profile);

  useFetchProfile();

  return (
    <>
      <Navbar variant="Profilepage" />
      <ProfileCard
        profile={myProfile || PlaceholderProfileProps}
        variant="Profilepage"
      />
      <div className="grid-wrapper">
        <ProfilePhotoGrid posts={PlaceholderPostProps} />
      </div>
    </>
  );
};

export default ProfilePage;
