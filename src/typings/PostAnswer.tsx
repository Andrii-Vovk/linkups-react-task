export interface Person {
  username: string;
  description: string;
  first_name: string;
  followers: number;
  following: number;
  job_title: string;
  last_name: string;
  profile_photo_url: string;
}

export interface Photo {
  id: number;
  url: string;
}

export interface PostAnswer {
  id: number;
  author: Person;
  comments_count: number;
  created_at: string;
  description: string;
  is_liked: boolean;
  likes_count: number;
  photos: Photo[];
}
