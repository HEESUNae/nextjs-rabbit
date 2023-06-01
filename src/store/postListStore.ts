import { atom } from "jotai";

// api
import { getPosts, PostsType } from "@/api/api";

export const postsApiAtom = atom<Promise<PostsType[]> | PostsType[]>(getPosts());
export const valueAtom = atom(
  (get) => get(postsApiAtom),
  (_get, set, newText: PostsType[]) => set(postsApiAtom, newText)
);

// pagination
export const currentPageAtom = atom(1); //* 현재페이지
export const onePagelistCountAtom = atom(10); //* 한페이지 리스트 갯수
export const oneTabPageCountAtom = atom(5); //* 한 탭당 페이지 갯수

//* 한 페이지당 보여질 리스트
export const postsSlice = atom(async (get) => {
  const pageItem: PostsType[][] = [];
  for (let i = 0; i < (await get(postsApiAtom)).length; i += get(onePagelistCountAtom)) {
    const arrSplit: PostsType[] = (await get(postsApiAtom)).slice(i, i + get(onePagelistCountAtom));
    pageItem.push(arrSplit);
  }
  return pageItem;
});

export const listTotalCountAtom = atom(async (get) => Math.ceil((await get(postsApiAtom)).length / get(onePagelistCountAtom))); //* 총 페이지 갯수
export const tabAciveCounterAtom = atom(0); //* 활성화 된 탭 인덱스

//* 페이지 번호
export const pageNumberAtom = atom(async (get) => {
  let pageArr: number[] = [];
  const endCount = (await get(listTotalCountAtom)) <= get(oneTabPageCountAtom) ? await get(listTotalCountAtom) : get(oneTabPageCountAtom);

  for (let i = 1; i <= endCount; i++) {
    pageArr.push(i);
  }
  return pageArr;
});
