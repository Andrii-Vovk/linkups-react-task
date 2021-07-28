import React from "react";
import Navbar from "../../ui/components/Navbar";
import Post from "../../ui/components/Post";
import ProfileCard from "../../ui/components/ProfileCard";
import StoriesLine from "../../ui/components/StoriesLine";
import "../../ui/style/buttons.scss";
import "./index.scss";

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
    name: "Bill Murray",
    time: new Date("January 16, 2021"),
    avatar: "https://www.fillmurray.com/645/360?u=4",
    imageUrl: ["https://www.fillmurray.com/645/360?u=4"],
    about:
      "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
    likes: 1230,
  };

  return (
    <>
      <Navbar />
      <div className="layout-parent">
        <div className="layout-left">
          <StoriesLine avatarArray={arr} />
          <Post props={PlaceholderPostProps} />
        </div>
        <div className="layout-right">
          <ProfileCard props={PlaceholderProfileProps} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
