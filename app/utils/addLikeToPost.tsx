import axios from "axios";

interface Props {
  post: number;
  user: number;
  feedback_type: string;
}

export const addLike = (props: Props) => {
  axios.post(process.env.NEXT_PUBLIC_BASE_URL + "/postFeedback", {
    ...props,
  });
};
