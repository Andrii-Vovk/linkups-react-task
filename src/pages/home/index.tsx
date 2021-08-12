import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLocation } from "react-router";

import { getCommentById, getPostById } from "../../core/services/requests";
import { setError } from "../../core/store/errorSlice";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { changePopUp, changeStatus } from "../../core/store/postPopUpSlice";
import { fetchPosts, setStateToPending } from "../../core/store/postsSlice";
import { fetchProfiles } from "../../core/store/usersSlice";
import ApiCommentsToPropsComments from "../../core/utils/ApiCommentsToPropsComments";
import ApiPostToPropsPost from "../../core/utils/ApiPostToPropsPost";
import { PlaceholderProfileProps } from "../../core/utils/placeholders/placeholders";
import { CommentAnswer } from "../../typings/CommentAnswer";
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

  const { post, status } = useAppSelector((state) => state.popUp);

  const [pageState, setPageState] = useState(1);

  useFetchProfile();

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

  const location = useLocation();

  useEffect(() => {
    async function getPopup() {
      if (location.hash) {
        try {
          const id = parseInt(location.hash.slice(1), 10);
          const res = await getPostById(id);
          const commRes = await getCommentById(id);
          if (res) {
            const convertedRes = ApiPostToPropsPost(res);
            if (commRes)
              convertedRes.comments = commRes.map((item: CommentAnswer) =>
                ApiCommentsToPropsComments(item)
              );
            dispatch(changePopUp(convertedRes));
            dispatch(changeStatus());
          }
          if(!res) throw new Error("This post doesnt exist");
        } catch (error) {
          dispatch(setError(error.message))
        }
      }
    }

    getPopup();
  }, [dispatch, location.hash]);

  return (
    <>
      {status === "opened" && post && <PostPopUp post={post} />}

      <Navbar variant="Homepage" />
      <div className="layout-parent">
        <div className="layout-left" id="div-to-scroll">
          <StoriesLine profiles={allProfiles.profiles} />

          <InfiniteScroll
            dataLength={allPosts.posts.length}
            hasMore={!allPosts.lastPage}
            next={() => dispatch(setStateToPending())}
            loader={<Spinner />}
            endMessage={<h3>You scrolled to the bottom!</h3>}
            className="no-scrollbar"
          >
            {allPosts.posts.map((item) => (
              <Post key={item.id} post={item} />
            ))}
          </InfiniteScroll>
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
