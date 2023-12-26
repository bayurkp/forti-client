import { useEffect, useState } from "react";
import { axiosInstance } from "./axiosInstance";

interface Reply {
  id: number;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    identity_number: string;
    username: string;
  };
  likes: number;
  dislikes: number;
  content: string;
  created_at: string;
  updated_at: string;
}

interface Post {
  id: number;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    identity_number: string;
    username: string;
  };
  replies: Reply[];
  likes: number;
  dislikes: number;
  content: string;
  category: string;
  created_at: string;
  updated_at: string;
}

export const getPosts = (params?: any) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axiosInstance
      .get("/posts/", { params: params })
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return posts;
};
