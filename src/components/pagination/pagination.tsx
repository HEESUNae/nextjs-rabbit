"use client";
import React, { useEffect, useState } from "react";

import { StyledPagination } from "./style";
import Image from "next/image";
import { useAtom, useAtomValue } from "jotai";
import { currentPageAtom, listTotalCountAtom, oneTabPageCountAtom, pageNumberAtom, tabAciveCounterAtom } from "@/store/postListStore";

interface PaginationType {
  onClick?: (e: React.MouseEvent) => void;
}

const Pagination: React.FC<PaginationType> = () => {
  const pageStart = useAtomValue(pageNumberAtom);
  const listTotalCount = useAtomValue(listTotalCountAtom);
  const oneTabPageCount = useAtomValue(oneTabPageCountAtom);
  const [isTabActive, setIsTabActive] = useAtom(tabAciveCounterAtom);
  let [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [pageNumber, setPageNumber] = useState<number[]>(pageStart);

  const prevPageFn = () => {
    if (currentPage > 1) {
      currentPage--;
      setCurrentPage(currentPage);

      if (currentPage % oneTabPageCount === 0) {
        setIsTabActive((prev: number) => prev - 1);
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

      if (currentPage % oneTabPageCount === 1) {
        setIsTabActive((prev: number) => prev + 1);
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
