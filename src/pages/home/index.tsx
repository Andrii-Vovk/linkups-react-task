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

  const PlaceholderPostProps =[
     {
    name: "Bill Murray",
    time: new Date("January 16, 2021"),
    avatar: "https://www.fillmurray.com/645/360?u=4",
    imageUrl: ["https://www.fillmurray.com/645/360?u=4"],
    about:
      "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
    likes: 1230,
    comments: [
      {
        avatar: {
          url: "https://i.pravatar.cc/300?u=" + Math.floor(Math.random() * 90)
        },
        text: "wow, this is really cool 👍 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim praesentium saepe dolorem omnis, aut qui, quae quos deleniti quasi optio minima cupiditate explicabo ipsam, suscipit delectus ratione laudantium tenetur eos.", 
        time: new Date("july 29, 2021"),
        likes: 30,
        isLiked: true
      },
      {
        avatar: {
          url: "https://i.pravatar.cc/300?u=" + Math.floor(Math.random() * 90)
        },
        text: "wow, this is really cool 👍 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim praesentium saepe dolorem omnis, aut qui, quae quos deleniti quasi optio minima cupiditate explicabo ipsam, suscipit delectus ratione laudantium tenetur eos.", 
        time: new Date("july 29, 2021"),
        likes: 30,
        isLiked: true
      },
      {
        avatar: {
          url: "https://i.pravatar.cc/300?u=" + Math.floor(Math.random() * 90)
        },
        text: "wow, this is really qui, quae quos deleniti quasi optio minima cupiditate explicabo ipsam, suscipit delectus ratione laudantium tenetur eos.", 
        time: new Date("july 29, 2021"),
        likes: 30,
        isLiked: true
      }
    ]
  },
     {
    name: "Bill Murray",
    time: new Date("July 26, 2021"),
    avatar: "https://www.fillmurray.com/645/360?u=4",
    imageUrl: ["https://www.fillmurray.com/642/360?u=4"],
    about:
      "Golf was my first glimpse of comedy. I was a caddy when I was a kid. I was on the golf course rather than being in lessons, but I can play better now than I could then.",
    likes: 1230,
  },
]


  return (
    <>
      <Navbar variant="Homepage"/>
      <div className="layout-parent">
        <div className="layout-left">
          <StoriesLine avatarArray={arr} />
          {PlaceholderPostProps.map(item => <Post props={item} />)}
        </div>
        <div className="layout-right">
          <ProfileCard props={PlaceholderProfileProps} variant="Homepage"/>
        </div>
      </div>
    </>
  );
};

export default HomePage;
