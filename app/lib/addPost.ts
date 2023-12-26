import { axiosInstance } from "./axiosInstance";
export const addPost = (content: string, category: string) => {
  const user = localStorage.getItem("user");
  axiosInstance
    .post("/posts", {
      content,
      category,
      user,
    })
    .then((res) => {
      location.replace("/posts/" + res.data.data.id);
    })
    .catch((err) => {
      console.log(err);
    });
};
