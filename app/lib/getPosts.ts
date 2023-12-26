import { useEffect, useState } from "react";
import { axiosInstance } from "./axiosInstance";

interface Post {
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
  category: string;
  created_at: string;
  updated_at: string;
}

export const getPosts = (params?: any) => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 0,
      user: {
        id: 0,
        first_name: "",
        last_name: "",
        identity_number: "",
        username: "",
      },
      likes: 0,
      dislikes: 0,
      content: "",
      category: "",
      created_at: "",
      updated_at: "",
    },
  ]);

  useEffect(() => {
    axiosInstance
      .get("/posts", { params })
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return posts;
};
