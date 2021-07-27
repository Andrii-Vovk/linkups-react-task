import React from "react";
import Navbar from "../../ui/components/Navbar";
import Post from "../../ui/components/Post";
import ProfileCard from "../../ui/components/ProfileCard";
import StoriesLine from "../../ui/components/StoriesLine";
import "../../ui/style/buttons.scss";

const HomePage = () => {
  const arr = [
    {
      url: "https://i.pravatar.cc/300?u=" + Math.floor(Math.random() * 90),
      bordered: true,
    },
    {
      url: "https://i.pravatar.cc/300?u=" + Math.floor(Math.random() * 90),
      bordered: true,
    },
    {
      url: "https://i.pravatar.cc/300?u=" + Math.floor(Math.random() * 90),
      bordered: true,
    },
    {
      url: "https://i.pravatar.cc/300?u=" + Math.floor(Math.random() * 90),
      bordered: true,
    },
    {
      url: "https://i.pravatar.cc/300?u=" + Math.floor(Math.random() * 90),
      bordered: true,
    },
    {
      url: "https://i.pravatar.cc/300?u=" + Math.floor(Math.random() * 90),
      bordered: true,
    },
    {
      url: "https://i.pravatar.cc/300?u=" + Math.floor(Math.random() * 90),
      bordered: true,
    },
    {
      url: "https://i.pravatar.cc/300?u=" + Math.floor(Math.random() * 90),
      bordered: true,
    },
    {
      url: "https://i.pravatar.cc/300?u=" + Math.floor(Math.random() * 90),
      bordered: true,
    },
    {
      url: "https://i.pravatar.cc/300?u=" + Math.floor(Math.random() * 90),
      bordered: true,
    },
    {
      url: "https://i.pravatar.cc/300?u=" + Math.floor(Math.random() * 90),
      bordered: true,
    },
    {
      url: "https://i.pravatar.cc/300?u=" + Math.floor(Math.random() * 90),
      bordered: true,
    },
    {
      url: "https://i.pravatar.cc/300?u=" + Math.floor(Math.random() * 90),
      bordered: true,
    },
    {
      url: "https://i.pravatar.cc/300?u=" + Math.floor(Math.random() * 90),
      bordered: true,
    },
    {
      url: "https://i.pravatar.cc/300?u=" + Math.floor(Math.random() * 90),
      bordered: true,
    },
    {
      url: "https://i.pravatar.cc/300?u=" + Math.floor(Math.random() * 90),
      bordered: true,
    },
    {
      url: "https://i.pravatar.cc/300?u=" + Math.floor(Math.random() * 90),
      bordered: true,
    },
    {
      url: "https://i.pravatar.cc/300?u=" + Math.floor(Math.random() * 90),
      bordered: true,
    },
    {
      url: "https://i.pravatar.cc/300?u=" + Math.floor(Math.random() * 90),
      bordered: true,
    },
  ]; /* placeholder avatars */

  const PlaceholderProfileProps = {
    followers: 5456,
    following: 403,
    name: "Nancy Dena",
    interest: "React",
    about: "testing this thing!",
    avatar: {
      url: "https://i.pravatar.cc/300?u=297",
      style: {
        width: 88,
        height: 88,
      },
    },
  };

  const PlaceholderPostProps = {
    name: "Ryan Gosling",
    time: new Date("January 16, 2021"),
    avatar: "https://www.fillmurray.com/640/360?u=3",
    imageUrl: ["https://www.fillmurray.com/640/360?u=3"],
    about: "I`m very handsome",
    likes: 1230,
  };

  return (
    <>
      <Navbar />
      <StoriesLine avatarArray={arr} />
      <Post props={PlaceholderPostProps} />
      <ProfileCard props={PlaceholderProfileProps} />
    </>
  );
};

export default HomePage;
