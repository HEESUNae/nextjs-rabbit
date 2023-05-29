import React from "react";

// style
import styles from "@/styles/posts.module.scss";

// api
import { getPosts } from "../api";

// components
import PostList from "@/app/posts/postList";

interface PostsType {
  id: number;
  userId: number;
  title: string;
  body: string;
}

async function fetchPosts() {
  const res = await getPosts();
  return res.data as PostsType[];
}

const WeatherPage = async () => {
  const posts = await fetchPosts();

  return (
    <main>
      <div className={styles.posts}>
        <PostList items={posts} />
      </div>
    </main>
  );
};
export default WeatherPage;
