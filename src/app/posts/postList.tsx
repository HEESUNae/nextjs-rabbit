"use client";
import React, { useEffect, useState } from "react";

// style
import { StyledPostList } from "./styles";

// components
import Pagination from "@/components/pagination/pagination";

export interface PostsType {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface Props<T> {
  items: T[];
}

const PostList: React.FC<Props<PostsType>> = ({ items }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [listIdx, setListIndex] = useState<number>(0);

  const onePagelistCount = 10; // 한페이지에 리스트 갯수
  const listTotalCount = Math.ceil(items.length / onePagelistCount); // 리스트 총 갯수
  const oneTabPageCount = 5; // 한 탭의 페이징 갯수

  const pageItem: PostsType[][] = [];
  for (let i = 0; i < items.length; i += onePagelistCount) {
    const arrSplit: PostsType[] = items.slice(i, i + onePagelistCount);
    pageItem.push(arrSplit);
  }

  const pageStart = () => {
    let pageArr: number[] = [];
    const endCount: number = listTotalCount <= oneTabPageCount ? listTotalCount : oneTabPageCount;

    for (let i = 1; i <= endCount; i++) {
      pageArr.push(i);
    }
    return pageArr;
  };

  const listIdxFn = (currentPage: number) => {
    setListIndex(currentPage - 1);
  };

  return (
    <StyledPostList>
      <div className="post">
        <table>
          <tbody>
            {pageItem[currentPage - 1].map((post, idx) => {
              return (
                <tr key={post.id}>
                  <td>{idx + 1 + listIdx * 10}</td>
                  <td>
                    <p>{post.title}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} listTotalCount={listTotalCount} pageStart={pageStart} oneTabPageCount={oneTabPageCount} listIdxFn={listIdxFn} />
    </StyledPostList>
  );
};
export default PostList;
