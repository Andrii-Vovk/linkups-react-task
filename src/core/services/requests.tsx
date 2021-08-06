import axios from "axios";
import { toCamel } from "snake-camel";

import { CommentAnswer } from "../../typings/CommentAnswer";
import { PostAnswer } from "../../typings/PostAnswer";
import { ProfileAnswer } from "../../typings/ProfileAnswer";
import { SignUpAnswer } from "../../typings/SignUpAnswer";
import { ProfileType } from "../../ui/components/ProfileCard/ProfileCard";

import { getToken, hasToken } from "./authHandling";

export async function getAllPosts(): Promise<PostAnswer[] | null> {
  try {
    const res = await axios.get("https://linkstagram-api.ga/posts/");
    const { data } = res;
    return data.map((item: { [key: string]: unknown }) => toCamel(item));
  } catch (error) {
    return null;
  }
}

export async function getMyProfile(): Promise<ProfileAnswer> {
  try {
    if (!hasToken()) throw new Error("Not authorized!");

    const config = {
      headers: {
        authorization: getToken(),
      },
    };

    const res = await axios.get("https://linkstagram-api.ga/account", config);
    return toCamel(res.data) as ProfileAnswer;
  } catch (error) {
    return error.message;
  }
}

export async function getCommentById(
  id: number
): Promise<CommentAnswer[] | null> {
  try {
    const res = await axios.get(
      `https://linkstagram-api.ga/posts/${id}/comments`
    );

    const { data } = res;
    return data.map((item: { [key: string]: unknown }) => toCamel(item));
  } catch (error) {
    return null;
  }
}

export async function signUpRequest(
  _email: string,
  _username: string,
  _password: string
): Promise<SignUpAnswer> {
  const payload = {
    login: _email,
    username: _username,
    password: _password,
  };

  try {
    const res = await axios.post(
      "https://linkstagram-api.ga/create-account",
      payload
    );

    return res.data;
  } catch (error) {
    return error.message;
  }
}

export async function logInRequest(
  _email: string,
  _password: string
): Promise<SignUpAnswer> {
  const payload = {
    login: _email,
    password: _password,
  };

  try {
    const res = await axios.post("https://linkstagram-api.ga/login", payload);
    return {
      success: res.data.success,
      headers: { authorization: res.headers.authorization },
    };
  } catch (error) {
    return error.message;
  }
}

export async function updateProfile(
  profile: ProfileType
): Promise<ProfileType | null> {
  const config = {
      first_name: profile.firstName,
      last_name: profile.lastName,
      description: profile.description,
      job_title: profile.jobTitle,
  };

  const headers = {
    authorization: getToken(),
  };

  try {
    const res = await axios.patch<ProfileType>("https://linkstagram-api.ga/account", config, {
      headers,
    });

    return toCamel(res.data) as ProfileType;
  } catch (error) {
    return null;
  }
}

/* export async function createPostRequest():Promise<PostAnswer> {
  const photos_attributes: [
    {
      "image": {
        "id": "23cf096f93e15a6aa7eebb9d8267895e.jpg",
        "storage": "cache",
        "metadata": {
          "filename": "test.jpg",
          "size": 68393,
          "mime_type": "image/jpeg"
        }
      }
    }
}
 */