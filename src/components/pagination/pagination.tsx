"use client";
import React, { useEffect, useState } from "react";

import { StyledPagination } from "./style";
import Image from "next/image";

interface Props {
  currentPage: number;
  listTotalCount: number;
  oneTabPageCount: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  listIdxFn: (currentPage: number) => void;
  pageStart: () => number[];
}
interface PaginationType extends Props {
  onClick?: (e: React.MouseEvent) => void;
}

const Pagination: React.FC<PaginationType> = ({ currentPage, listTotalCount, oneTabPageCount, setCurrentPage, pageStart, listIdxFn }) => {
  const [pageNumber, setPageNumber] = useState<number[]>(pageStart);
  const [isTabActive, setIsTabActive] = useState<number>(0);

  const prevPageFn = () => {
    if (currentPage > 1) {
      currentPage--;
      setCurrentPage(currentPage);
      listIdxFn(currentPage);

      if (currentPage % oneTabPageCount === 0) {
        setIsTabActive((prev) => prev - 1);
      }
    }
  };

  const currentPageFn = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    setCurrentPage(Number(target.textContent));
  };

  const nextPageFn = () => {
    if (currentPage < listTotalCount) {
      currentPage++;
      setCurrentPage(currentPage);
      listIdxFn(currentPage);

      if (currentPage % oneTabPageCount === 1) {
        setIsTabActive((prev) => prev + 1);
      }
    }
  };

  const pageTabFn = () => {
    let pageArr = [];
    let pageStart: number = oneTabPageCount * isTabActive + 1;
    let pageEnd: number = oneTabPageCount * (isTabActive + 1);

    if (oneTabPageCount * isTabActive + oneTabPageCount > listTotalCount) {
      pageEnd = listTotalCount;
    }
    for (let i = pageStart; i <= pageEnd; i++) {
      pageArr.push(i);
    }
    setPageNumber(pageArr);
  };

  useEffect(() => {
    pageTabFn();
  }, [isTabActive]);

  return (
    <StyledPagination>
      <div className="pagination">
        <button onClick={prevPageFn}>
          <Image src="/assets/icon/icon-page-left.svg" width={30} height={30} alt="이전" />
        </button>
        {pageNumber.map((item) => (
          <button key={item} onClick={currentPageFn} className={item === currentPage ? "page-btn active" : "page-btn"}>
            {item}
          </button>
        ))}
        <button onClick={nextPageFn}>
          <Image src="/assets/icon/icon-page-right.svg" width={30} height={30} alt="다음" />
        </button>
      </div>
    </StyledPagination>
  );
};

export default Pagination;
