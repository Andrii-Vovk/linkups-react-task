import axios from "axios";
import { getToken, hasToken } from "./authHandling";

export async function getAllPosts() {
  try {
    let res = await axios.get("https://linkstagram-api.ga/posts/");
    let data = res.data;
    return data;
  } catch (error) {
    console.log("jhvjhv", error.message);
  }
}

export async function getMyProfile() {
  try {
    if (!hasToken()) throw new Error("Not authorized!");

    let config = {
      headers: {
        authorization: getToken(),
      },
    };

    console.log("Got token:", getToken());

    let res = await axios.get("https://linkstagram-api.ga/account", config);
    console.table(res);
    return res.data;

  } catch (error) {
    console.log(error.message);
  }
}

export async function getCommentById(id: number) {
  try {
    let res = await axios.get(
      `https://linkstagram-api.ga/posts/${id}/comments`
    );

    let data = res.data;
    return data;
  } catch (error) {
    console.log("sdfgsd", error.message);
  }
}

export async function signUpRequest(
  _email: string,
  _username: string,
  _password: string
) {
  let payload = {
    login: _email,
    username: _username,
    password: _password,
  };

  try {
    return await axios.post(
      "https://linkstagram-api.ga/create-account",
      payload
    );
  } catch (error) {
    return null;
  }
}

export async function logInRequest(_email: string, _password: string) {
  let payload = {
    login: _email,
    password: _password,
  };

  try {
    return await axios.post("https://linkstagram-api.ga/login", payload);
  } catch (error) {
    console.log(error.message);
  }
}
