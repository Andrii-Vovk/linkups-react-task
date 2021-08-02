import React from "react";
import Navbar from "../../ui/components/Navbar/Navbar";
import ProfileCard from "../../ui/components/ProfileCard/ProfileCard";
import ProfilePhotoGrid from "../../ui/components/ProfilePhotoGrid/ProfilePhotoGrid";
import "./index.scss";

const ProfilePage = () => {
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

  const PlaceholderPostProps = [
    {
      props: {
          name: "Bill Murray",
          time: new Date("January 16, 2021"),
          avatar: "https://www.fillmurray.com/645/360?u=4",
          imageUrl: ["https://www.fillmurray.com/645/360?u=4"],
          about:
            "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
          likes: 1230,
      }
    },
    {
      props: {
          name: "Bill Murray",
          time: new Date("January 16, 2021"),
          avatar: "https://www.fillmurray.com/645/360?u=4",
          imageUrl: ["https://www.fillmurray.com/647/360?u=4"],
          about:
            "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
          likes: 1230,
      }
    },
    {
      props: {
          name: "Bill Murray",
          time: new Date("January 16, 2021"),
          avatar: "https://www.fillmurray.com/645/360?u=4",
          imageUrl: ["https://www.fillmurray.com/648/360?u=4"],
          about:
            "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
          likes: 1230,
      }
    },
    {
      props: {
          name: "Bill Murray",
          time: new Date("January 16, 2021"),
          avatar: "https://www.fillmurray.com/645/360?u=4",
          imageUrl: ["https://www.fillmurray.com/649/360?u=4"],
          about:
            "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
          likes: 1230,
      }
    },
    {
      props: {
          name: "Bill Murray",
          time: new Date("January 16, 2021"),
          avatar: "https://www.fillmurray.com/645/360?u=4",
          imageUrl: ["https://www.fillmurray.com/645/360?u=4"],
          about:
            "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
          likes: 1230,
      }
    },
    {
      props: {
          name: "Bill Murray",
          time: new Date("January 16, 2021"),
          avatar: "https://www.fillmurray.com/645/360?u=4",
          imageUrl: ["https://www.fillmurray.com/647/360?u=4"],
          about:
            "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
          likes: 1230,
      }
    },
    {
      props: {
          name: "Bill Murray",
          time: new Date("January 16, 2021"),
          avatar: "https://www.fillmurray.com/645/360?u=4",
          imageUrl: ["https://www.fillmurray.com/648/360?u=4"],
          about:
            "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
          likes: 1230,
      }
    },
    {
      props: {
          name: "Bill Murray",
          time: new Date("January 16, 2021"),
          avatar: "https://www.fillmurray.com/645/360?u=4",
          imageUrl: ["https://www.fillmurray.com/649/360?u=4"],
          about:
            "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
          likes: 1230,
      }
    },
    {
      props: {
          name: "Bill Murray",
          time: new Date("January 16, 2021"),
          avatar: "https://www.fillmurray.com/645/360?u=4",
          imageUrl: ["https://www.fillmurray.com/645/360?u=4"],
          about:
            "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
          likes: 1230,
      }
    },
    {
      props: {
          name: "Bill Murray",
          time: new Date("January 16, 2021"),
          avatar: "https://www.fillmurray.com/645/360?u=4",
          imageUrl: ["https://www.fillmurray.com/647/360?u=4"],
          about:
            "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
          likes: 1230,
      }
    },
    {
      props: {
          name: "Bill Murray",
          time: new Date("January 16, 2021"),
          avatar: "https://www.fillmurray.com/645/360?u=4",
          imageUrl: ["https://www.fillmurray.com/648/360?u=4"],
          about:
            "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
          likes: 1230,
      }
    },
    {
      props: {
          name: "Bill Murray",
          time: new Date("January 16, 2021"),
          avatar: "https://www.fillmurray.com/645/360?u=4",
          imageUrl: ["https://www.fillmurray.com/649/360?u=4"],
          about:
            "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
          likes: 1230,
      }
    },
    {
      props: {
          name: "Bill Murray",
          time: new Date("January 16, 2021"),
          avatar: "https://www.fillmurray.com/645/360?u=4",
          imageUrl: ["https://www.fillmurray.com/645/360?u=4"],
          about:
            "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
          likes: 1230,
      }
    },
    {
      props: {
          name: "Bill Murray",
          time: new Date("January 16, 2021"),
          avatar: "https://www.fillmurray.com/645/360?u=4",
          imageUrl: ["https://www.fillmurray.com/647/360?u=4"],
          about:
            "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
          likes: 1230,
      }
    },
    {
      props: {
          name: "Bill Murray",
          time: new Date("January 16, 2021"),
          avatar: "https://www.fillmurray.com/645/360?u=4",
          imageUrl: ["https://www.fillmurray.com/648/360?u=4"],
          about:
            "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
          likes: 1230,
      }
    },
    {
      props: {
          name: "Bill Murray",
          time: new Date("January 16, 2021"),
          avatar: "https://www.fillmurray.com/645/360?u=4",
          imageUrl: ["https://www.fillmurray.com/649/360?u=4"],
          about:
            "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
          likes: 1230,
      }
    },
    {
      props: {
          name: "Bill Murray",
          time: new Date("January 16, 2021"),
          avatar: "https://www.fillmurray.com/645/360?u=4",
          imageUrl: ["https://www.fillmurray.com/645/360?u=4"],
          about:
            "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
          likes: 1230,
      }
    },
    {
      props: {
          name: "Bill Murray",
          time: new Date("January 16, 2021"),
          avatar: "https://www.fillmurray.com/645/360?u=4",
          imageUrl: ["https://www.fillmurray.com/647/360?u=4"],
          about:
            "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
          likes: 1230,
      }
    },
    {
      props: {
          name: "Bill Murray",
          time: new Date("January 16, 2021"),
          avatar: "https://www.fillmurray.com/645/360?u=4",
          imageUrl: ["https://www.fillmurray.com/648/360?u=4"],
          about:
            "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
          likes: 1230,
      }
    },
    {
      props: {
          name: "Bill Murray",
          time: new Date("January 16, 2021"),
          avatar: "https://www.fillmurray.com/645/360?u=4",
          imageUrl: ["https://www.fillmurray.com/649/360?u=4"],
          about:
            "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
          likes: 1230,
      }
    },
    {
      props: {
          name: "Bill Murray",
          time: new Date("January 16, 2021"),
          avatar: "https://www.fillmurray.com/645/360?u=4",
          imageUrl: ["https://www.fillmurray.com/645/360?u=4"],
          about:
            "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
          likes: 1230,
      }
    },
    {
      props: {
          name: "Bill Murray",
          time: new Date("January 16, 2021"),
          avatar: "https://www.fillmurray.com/645/360?u=4",
          imageUrl: ["https://www.fillmurray.com/647/360?u=4"],
          about:
            "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
          likes: 1230,
      }
    },
    {
      props: {
          name: "Bill Murray",
          time: new Date("January 16, 2021"),
          avatar: "https://www.fillmurray.com/645/360?u=4",
          imageUrl: ["https://www.fillmurray.com/648/360?u=4"],
          about:
            "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
          likes: 1230,
      }
    },
    {
      props: {
          name: "Bill Murray",
          time: new Date("January 16, 2021"),
          avatar: "https://www.fillmurray.com/645/360?u=4",
          imageUrl: ["https://www.fillmurray.com/649/360?u=4"],
          about:
            "The more relaxed you are, the better you are at everything: the better you are with your loved ones, the better you are with your enemies, the better you are at your job, the better you are with yourself.",
          likes: 1230,
      }
    },
  ]

  return (
    <>
      <Navbar variant="Profilepage" />
      <ProfileCard props={PlaceholderProfileProps} variant="Profilepage" />
      <div className="grid-wrapper">
      <ProfilePhotoGrid postsProp={PlaceholderPostProps} />
      </div>
    </>
  );
};

export default ProfilePage;
