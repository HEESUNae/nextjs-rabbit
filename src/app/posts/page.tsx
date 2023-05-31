import React from "react";

// style
import styles from "@/styles/posts.module.scss";

// components
import PostList from "@/app/posts/postList";

const PostsPage = async () => {
  return (
    <main>
      <div className={styles.posts}>
        <PostList />
      </div>
    </main>
  );
};
export default PostsPage;
