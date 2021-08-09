import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { fetchProfile } from "../../core/store/profileSlice";
import { PlaceholderProfileProps } from "../../core/utils/placeholders/placeholders";
import Navbar from "../../ui/components/Navbar/Navbar";
import ProfileCard from "../../ui/components/ProfileCard/ProfileCard";
import ProfilePhotoGrid from "../../ui/components/ProfilePhotoGrid/ProfilePhotoGrid";
import "./index.scss";

const ProfilePage: React.FC = () => {
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

  const myProfile = useAppSelector((state) => state.profile.profile);
  const myProfileStatus = useAppSelector((state) => state.profile.status);

  const token = useAppSelector((state) => state.auth.authToken);

  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getAllPostsUseEffect() {
      if(myProfileStatus !== 'loaded' && token) {
        dispatch(fetchProfile(token));
      } 
    }

    getAllPostsUseEffect();
  }, [dispatch, myProfileStatus, token]);

  return (
    <>
      <Navbar variant="Profilepage" />
      <ProfileCard
        profile={myProfile || PlaceholderProfileProps}
        variant="Profilepage"
      />
      <div className="grid-wrapper">
        <ProfilePhotoGrid postsProp={PlaceholderPostProps} />
      </div>
    </>
  );
};

export default ProfilePage;
