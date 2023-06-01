"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

// style
import { StyledPostDetail } from "./style";

// lib
import { useAtom, useAtomValue } from "jotai";
import { postsApiAtom } from "@/store/postListStore";
import PrimaryBtn from "@/components/button/primaryBtn/primaryBtn";

interface PostsDetailType {
  params: { slug: string };
}

const PostsDetail = ({ params }: PostsDetailType) => {
  const router = useRouter();
  const postId = Number(params.slug);
  const slugIdx = postId - 1;

  const item = useAtomValue(postsApiAtom);

  return (
    <StyledPostDetail>
      <main>
        <div className="post-detail">
          <table>
            <tbody>
              <tr>
                <th>번호</th>
                <td>
                  <p>{postId}</p>
                </td>
              </tr>
              <tr>
                <th>유저</th>
                <td>
                  <p>user {item[slugIdx].userId}</p>
                </td>
              </tr>
              <tr>
                <th>제목</th>
                <td>
                  <p>{item[slugIdx].title}</p>
                </td>
              </tr>

              <tr className="contents">
                <th>내용</th>
                <td>
                  <p>{item[slugIdx].body}</p>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="btn-container">
            <PrimaryBtn title="뒤로가기" onClick={() => router.back()} />
          </div>
        </div>
      </main>
    </StyledPostDetail>
  );
};

export default PostsDetail;
