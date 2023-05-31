"use client";
import React from "react";
import Link from "next/link";

// style
import { StyledPostList } from "./styles";

// lib
import { useAtomValue } from "jotai";
import { currentPageAtom, onePagelistCountAtom, postsSlice } from "@/store/postListStore";

// components
import Pagination from "@/components/pagination/pagination";

const PostList: React.FC = () => {
  const pageItem = useAtomValue(postsSlice); // api

  const currentPage = useAtomValue<number>(currentPageAtom);
  const onePagelistCount = useAtomValue(onePagelistCountAtom); // 한페이지에 리스트 갯수

  return (
    <StyledPostList>
      <div className="post">
        <table>
          <tbody>
            {pageItem[currentPage - 1].map((post, idx) => {
              return (
                <tr key={post.id}>
                  <td>{idx + 1 + (currentPage - 1) * onePagelistCount}</td>
                  <td>
                    <Link href={`/posts/${post.id}`}>
                      <p>{post.title}</p>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination />
    </StyledPostList>
  );
};
export default PostList;
