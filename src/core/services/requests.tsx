import axios, { AxiosResponse } from "axios";

export async function getAllPosts() {
  try {
    let res = await axios.get("https://linkstagram-api.ga/posts/");
    let data = res.data;
    return data;
  } catch (error) {
    console.log('jhvjhv', error.message);
  }
}

export async function getCommentById(id: number) {
  try {
    let res = await axios.get(
      `https://linkstagram-api.ga/posts/${id}/comments`
    )
    
    let data = res.data;
    return data;
  } catch (error) {
    console.log('sdfgsd', error.message);
  }
}
