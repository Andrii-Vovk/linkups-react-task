import React, { useCallback, useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { fetchPosts, setStateToPending } from "../../core/store/postsSlice";
import { fetchProfiles } from "../../core/store/usersSlice";
import { PlaceholderProfileProps } from "../../core/utils/placeholders/placeholders";
import Navbar from "../../ui/components/Navbar/Navbar";
import Post from "../../ui/components/Post/Post";
import ProfileCard from "../../ui/components/ProfileCard/ProfileCard";
import StoriesLine from "../../ui/components/StoriesLine/StoriesLine";
import PostPopUp from "../../ui/components/common/PostPopUp/PostPopUp";
import "./index.scss";
import Spinner from "../../ui/components/spinner/Spinner";
import useFetchProfile from "../../ui/hooks/useFetchProfile";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const token = useAppSelector((state) => state.auth.authToken);

  const allProfiles = useAppSelector((state) => state.users);
  const apiMyProfile = useAppSelector((state) => state.profile.profile);
  const myProfileStatus = useAppSelector((state) => state.profile.status);

  const allPosts = useAppSelector((state) => state.posts);
  const isLastPage = useAppSelector((state) => state.posts.lastPage);

  const { post, status } = useAppSelector((state) => state.popUp);

  const [pageState, setPageState] = useState(1);

  useFetchProfile();

  const handleScrollToBottom = useCallback(() => {
    let bottom = false;
    const div = document.getElementById("div-to-scroll");
    if (div) {
      bottom =
        Math.ceil(window.innerHeight + window.scrollY) >= div.scrollHeight;
    }
    if (bottom) {
      dispatch(setStateToPending());
    }
  }, []);

  useEffect(() => {
    if (isLastPage) {
      window.removeEventListener("scroll", handleScrollToBottom);
    } else {
      window.addEventListener("scroll", handleScrollToBottom);
    }
  }, [handleScrollToBottom, isLastPage]);

  useEffect(() => {
    async function getAllPostsUseEffect() {
      if (allPosts.status === "pending") {
        dispatch(fetchPosts(pageState));
        setPageState(pageState + 1);
      }
    }
    getAllPostsUseEffect();
  }, [dispatch, allPosts.status]);

  useEffect(() => {
    async function getAllProfilesUseEffect() {
      if (allProfiles.status !== "loaded" && token) {
        dispatch(fetchProfiles(token));
      }
    }
    getAllProfilesUseEffect();
  }, [dispatch, allProfiles.status, token]);

  return (
    <>
      {status === "opened" && post && <PostPopUp post={post} />}

      <Navbar variant="Homepage" />
      <div className="layout-parent">
        <div className="layout-left" id="div-to-scroll">
          <StoriesLine profiles={allProfiles.profiles} />
          {allPosts.posts.length > 0 &&
            allPosts.posts.map((item) => <Post key={item.id} post={item} />)}
          {allPosts.status === "pending" && <Spinner />}
        </div>
        <div className="layout-right">
          {myProfileStatus === "loaded" ? (
            <ProfileCard
              profile={apiMyProfile || PlaceholderProfileProps}
              variant="Homepage"
            />
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
