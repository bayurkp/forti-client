import { axiosInstance } from "./axiosInstance";
export const editReply = (reply: string, content: string) => {
  const user = localStorage.getItem("user");
  axiosInstance
    .put("/replies/" + reply, {
      user,
      content,
      reply,
    })
    .then((res) => {
      location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
};
