import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { fetchPosts } from "../../core/store/postsSlice";
import { fetchProfile } from "../../core/store/profileSlice";
import {
  PlaceholderProfileProps,
  StoriesPLaceholder,
} from "../../core/utils/placeholders/placeholders";
import Navbar from "../../ui/components/Navbar/Navbar";
import Post from "../../ui/components/Post/Post";
import ProfileCard from "../../ui/components/ProfileCard/ProfileCard";
import StoriesLine from "../../ui/components/StoriesLine/StoriesLine";
import PostPopUp from "../../ui/components/common/PostPopUp/PostPopUp";
import "./index.scss";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const apiMyProfile = useAppSelector((state) => state.profile.profile);
  const myProfileStatus = useAppSelector((state) => state.profile.status);

  const allPosts = useAppSelector((state) => state.posts);

  const currentPopUp = useAppSelector((state) => state.popUp);

  useEffect(() => {
    async function getAllPostsUseEffect() {
      if (allPosts.status !== "loaded") {
        dispatch(fetchPosts());
      }
      if (myProfileStatus !== "loaded") {
        dispatch(fetchProfile());
      }
    }

    getAllPostsUseEffect();
  }, [dispatch, myProfileStatus, allPosts.status]);

  return (
    <>
      {currentPopUp.status === "opened" && currentPopUp.post && (
        <PostPopUp post={currentPopUp.post} />
      )}

      <Navbar variant="Homepage" />
      <div className="layout-parent">
        <div className="layout-left">
          <StoriesLine avatarArray={StoriesPLaceholder} />
          {allPosts &&
            allPosts.posts.map((item) => <Post key={item.id} post={item} />)}
        </div>
        <div className="layout-right">
          {myProfileStatus === "loaded" ? (
            <ProfileCard
              profile={apiMyProfile || PlaceholderProfileProps}
              variant="Homepage"
            />
          ) : (
            myProfileStatus === "error" && "error"
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
