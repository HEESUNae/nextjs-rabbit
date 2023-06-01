import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export interface PostsType {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const getPosts = async () => {
  const res = await api.get(`/posts`);
  return res.data as PostsType[];
};
