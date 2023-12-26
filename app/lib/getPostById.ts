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

export const getPostById = (id: string) => {
  const [post, setPost] = useState<Post>({
    id: 0,
    user: {
      id: 0,
      first_name: "",
      last_name: "",
      identity_number: "",
      username: "",
    },
    replies: [],
    likes: 0,
    dislikes: 0,
    content: "",
    category: "",
    created_at: "",
    updated_at: "",
  });

  useEffect(() => {
    axiosInstance
      .get("/posts/" + id)
      .then((res) => {
        setPost(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return post;
};
