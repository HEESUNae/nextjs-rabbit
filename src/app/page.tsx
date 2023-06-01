import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/page.module.scss";

export const metadata: Metadata = {
  title: "Rabbit Posts",
  description: "무료 API를 활용하여 포트폴리오 용도로 만든 개인작업물입니다.",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <figure className={styles.rabbit}>
        <div className={styles.imgWrap}>
          <Image src="/assets/icon/icon-rabbit.png" alt="" fill sizes="(max-width: 768px) 8vw, 10vw" />
        </div>
        <figcaption>
          <q>서포터 토깽이의 블로그</q>
        </figcaption>
      </figure>
      <p>
        JSON Placeholder 사이트의 무료 API를 이용하여
        <br />
        처음부터 끝까지 혼자 만든 100%로 본인 작업물입니다.
        <br />
        Next.js 와 TypeScript 를 활용하여 만들었습니다.
        <br />
      </p>
      <button>
        <Link href="/posts">블로그 구경하러 바로 가기</Link>
      </button>
    </main>
  );
}
