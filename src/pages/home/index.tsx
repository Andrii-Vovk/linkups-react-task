import React, { useEffect, useState } from "react";

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
import buttons from "../../ui/style/buttons.module.scss";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const token = useAppSelector((state) => state.auth.authToken);

  const allProfiles = useAppSelector((state) => state.users);
  const apiMyProfile = useAppSelector((state) => state.profile.profile);
  const myProfileStatus = useAppSelector((state) => state.profile.status);

  const allPosts = useAppSelector((state) => state.posts);

  const { post, status } = useAppSelector((state) => state.popUp);

  const [pageState, setPageState] = useState(1);

  useFetchProfile();

  useEffect(() => {
    async function getAllPostsUseEffect() {
      if (allPosts.status !== "loaded") {
        dispatch(fetchPosts(pageState));
      }

      if (allPosts.posts.length < 1) {
        setPageState(1);
        dispatch(fetchPosts());
      }

      if (allProfiles.status !== "loaded" && token) {
        dispatch(fetchProfiles(token));
      }
    }
    getAllPostsUseEffect();
  }, [dispatch, allPosts, allProfiles.status, token, pageState]);

  function handleNextPageClick() {
    setPageState(pageState + 1);
    dispatch(setStateToPending());
  }

  function handlePrevPageClick() {
    if (pageState - 1 > 0) {
      setPageState(pageState - 1);
      dispatch(setStateToPending());
    }
  }

  return (
    <>
      {status === "opened" && post && <PostPopUp post={post} />}

      <Navbar variant="Homepage" />
      <div className="layout-parent">
        <div className="layout-left">
          <StoriesLine profiles={allProfiles.profiles} />
          {allPosts.status === "loaded" ? (
            allPosts.posts.map((item) => <Post key={item.id} post={item} />)
          ) : (
            <Spinner />
          )}
          {allPosts.status === "loaded" && (
            <div className="pagination">
              <button
                className={buttons.blueBtn}
                type="button"
                onClick={handlePrevPageClick}
                disabled={allPosts.status !== "loaded"}
              >
                Prev
              </button>
              <span className="pageIndicator">{pageState}</span>
              <button
                className={buttons.blueBtn}
                type="button"
                onClick={handleNextPageClick}
                disabled={allPosts.status !== "loaded"}
              >
                Next
              </button>
            </div>
          )}
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
