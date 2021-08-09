import { PostAnswer } from "../../typings/PostAnswer";
import { PostPropsType } from "../../ui/components/Post/Post";

function ApiPostToPropsPost(post: PostAnswer): PostPropsType {
  return {
    id: post.id,
    avatar: post.author.profilePhotoUrl,
    name: `${post.author.firstName} ${post.author.lastName}`,
    imageUrl: post.photos.map((entry) => entry.url),
    about: post.description,
    likes: post.likesCount,
    isliked: post.isLiked,
    time: new Date(post.createdAt ? `${post.createdAt.slice(0, -4)}+00:00` : 0),
  };
}

export default ApiPostToPropsPost;
