import { useEffect, useState } from "react";
import { axiosInstance } from "./axiosInstance";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  identity_number: string;
  username: string;
  email: string;
  password: string;
  user_role: string;
  created_at: string;
  updated_at: string;
}

export const getUser = (username: string) => {
  const [user, setUser] = useState<User>({
    id: 0,
    first_name: "",
    last_name: "",
    identity_number: "",
    username: "",
    email: "",
    password: "",
    user_role: "",
    created_at: "",
    updated_at: "",
  });

  useEffect(() => {
    axiosInstance
      .get("/users", {
        params: {
          username,
        },
      })
      .then((res) => {
        setUser(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return user;
};
