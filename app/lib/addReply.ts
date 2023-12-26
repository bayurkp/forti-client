import { axiosInstance } from "./axiosInstance";
export const addReply = (content: string, post: string) => {
  const user = localStorage.getItem("user");
  axiosInstance
    .post("/replies", {
      content,
      post,
      user,
    })
    .then((res) => {
      location.replace("/posts/" + post);
    })
    .catch((err) => {
      console.log(err);
    });
};
