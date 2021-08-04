import React, { useEffect, useState } from "react";

import { getAllPosts, getMyProfile } from "../../core/services/requests";
import ApiProfieToPropsProfile from "../../core/utils/ApiPorfileToPropsProfile";
import ApiPostToPropsPost from "../../core/utils/ApiPostToPropsPost";
import { PostAnswer } from "../../typings/PostAnswer";
import Navbar from "../../ui/components/Navbar/Navbar";
import Post, { PostPropsType } from "../../ui/components/Post/Post";
import ProfileCard, {
  ProfileCardProps,
} from "../../ui/components/ProfileCard/ProfileCard";
import StoriesLine from "../../ui/components/StoriesLine/StoriesLine";
import "../../ui/style/buttons.scss";
import "./index.scss";

const HomePage: React.FC = () => {
  const arr = [
    {
      key: 0,
      url: `https://i.pravatar.cc/300?u=${Math.floor(Math.random() * 90)}`,
      bordered: true,
    },
    {
      key: 1,
      url: `https://i.pravatar.cc/300?u=${Math.floor(Math.random() * 90)}`,
      bordered: true,
    },
    {
      key: 2,
      url: `https://i.pravatar.cc/300?u=${Math.floor(Math.random() * 90)}`,
      bordered: true,
    },
    {
      key: 3,
      url: `https://i.pravatar.cc/300?u=${Math.floor(Math.random() * 90)}`,
      bordered: true,
    },
    {
      key: 4,
      url: `https://i.pravatar.cc/300?u=${Math.floor(Math.random() * 90)}`,
      bordered: true,
    },
    {
      key: 5,
      url: `https://i.pravatar.cc/300?u=${Math.floor(Math.random() * 90)}`,
      bordered: true,
    },
    {
      key: 6,
      url: `https://i.pravatar.cc/300?u=${Math.floor(Math.random() * 90)}`,
      bordered: true,
    },
    {
      key: 7,
      url: `https://i.pravatar.cc/300?u=${Math.floor(Math.random() * 90)}`,
      bordered: true,
    },
    {
      key: 8,
      url: `https://i.pravatar.cc/300?u=${Math.floor(Math.random() * 90)}`,
      bordered: true,
    },
    {
      key: 9,
      url: `https://i.pravatar.cc/300?u=${Math.floor(Math.random() * 90)}`,
      bordered: true,
    },
    {
      key: 10,
      url: `https://i.pravatar.cc/300?u=${Math.floor(Math.random() * 90)}`,
      bordered: true,
    },
    {
      key: 11,
      url: `https://i.pravatar.cc/300?u=${Math.floor(Math.random() * 90)}`,
      bordered: true,
    },
    {
      key: 12,
      url: `https://i.pravatar.cc/300?u=${Math.floor(Math.random() * 90)}`,
      bordered: true,
    },
    {
      key: 13,
      url: `https://i.pravatar.cc/300?u=${Math.floor(Math.random() * 90)}`,
      bordered: true,
    },
    {
      key: 14,
      url: `https://i.pravatar.cc/300?u=${Math.floor(Math.random() * 90)}`,
      bordered: true,
    },
    {
      key: 15,
      url: `https://i.pravatar.cc/300?u=${Math.floor(Math.random() * 90)}`,
      bordered: true,
    },
    {
      key: 16,
      url: `https://i.pravatar.cc/300?u=${Math.floor(Math.random() * 90)}`,
      bordered: true,
    },
    {
      key: 17,
      url: `https://i.pravatar.cc/300?u=${Math.floor(Math.random() * 90)}`,
      bordered: true,
    },
    {
      key: 18,
      url: `https://i.pravatar.cc/300?u=${Math.floor(Math.random() * 90)}`,
      bordered: true,
    },
  ]; /* placeholder avatars */

  const PlaceholderProfileProps = {
    followers: 0,
    following: 0,
    firstName: "Loading...",
    lastName: "",
    jobTitle: "",
    description: "",
    avatar: {
      url: "https://via.placeholder.com/80",
      style: {
        width: 88,
        height: 88,
      },
    },
  };

  /*   const PlaceholderPostProps = [
    {
      key: 0,
      name: "Bill Murray",
      time: new Date("January 16, 2021"),
      avatar: "https://www.fillmurray.com/645/360?u=4",
      imageUrl: ["https://www.fillmurray.com/645/360?u=4"],
      about:
        "The more relaxed you are, the better you are at everything: the better you are with your loved ones,
         the better you are with your enemies, the better you are at your job, the better you are with yourself.",
      likes: 1230,
      comments: [
        {
          avatar: {
            url:
              "https://i.pravatar.cc/300?u=" + Math.floor(Math.random() * 90),
          },
          text: "wow, this is really cool 👍 ",
          time: new Date("july 29, 2021"),
          likes: 30,
          isLiked: true,
        },
        {
          avatar: {
            url:
              "https://i.pravatar.cc/300?u=" + Math.floor(Math.random() * 90),
          },
          text: "wow, this is really cool 👍 ",
          time: new Date("july 29, 2021"),
          likes: 30,
          isLiked: true,
        },
        {
          avatar: {
            url:
              "https://i.pravatar.cc/300?u=" + Math.floor(Math.random() * 90),
          },
          text: "wow, this is really 👍",
          time: new Date("july 29, 2021"),
          likes: 30,
          isLiked: true,
        },
      ],
    },
    {
      key: 1,
      name: "Bill Murray",
      time: new Date("July 26, 2021"),
      avatar: "https://www.fillmurray.com/645/360?u=4",
      imageUrl: ["https://www.fillmurray.com/642/360?u=4"],
      about:
        "Golf was my first glimpse of comedy. I was a caddy when I was a kid. 
        I was on the golf course rather than being in lessons, but I can play better now than I could then.",
      likes: 1230,
    },
  ]; */

  const [allPosts, setAllPosts] = useState<PostPropsType[]>([]);
  const [myProfile, setMyProfile] = useState<ProfileCardProps>();

  useEffect(() => {
    async function getAllPostsUseEffect() {
      const apiAllPosts = await getAllPosts();
      if (apiAllPosts) {
        setAllPosts(
          apiAllPosts.map((item: PostAnswer) => ApiPostToPropsPost(item))
        );
      }

      const apiMyProfile = await getMyProfile();
      setMyProfile(ApiProfieToPropsProfile(apiMyProfile, "Homepage"));
    }

    getAllPostsUseEffect();
  }, []);

  return (
    <>
      <Navbar variant="Homepage" />
      <div className="layout-parent">
        <div className="layout-left">
          <StoriesLine avatarArray={arr} />
          {allPosts &&
            allPosts.map((item) => <Post key={item.id} post={item} />)}
        </div>
        <div className="layout-right">
          <ProfileCard
            profile={myProfile ? myProfile.profile : PlaceholderProfileProps}
            variant="Homepage"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
