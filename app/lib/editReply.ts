import { axiosInstance } from "./axiosInstance";
export const editReply = (reply: string, post: string, content: string) => {
  const user = localStorage.getItem("user");
  axiosInstance
    .put("/replies/" + reply, {
      user,
      post,
      content,
    })
    .then((res) => {
      location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
};
