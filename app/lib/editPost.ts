import { axiosInstance } from "./axiosInstance";
export const editPost = (post: string, content: string, category: string) => {
  const user = localStorage.getItem("user");
  axiosInstance
    .put("/posts/" + post, {
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
