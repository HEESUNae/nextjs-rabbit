import { Metadata } from "next";
import Image from "next/image";

import styles from "./page.module.scss";

import Nav from "@/components/Nav/Nav";

export const metadata: Metadata = {
  title: "Main Page",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <figure className={styles.rabbit}>
        <div className={styles.imgWrap}>
          <Image src="/assets/icon/icon-rabbit.png" alt="" fill sizes="(max-width: 768px) 8vw, 10vw" />
        </div>
        <figcaption>
          <q>서포터 기질이 다분한 토깽이</q>
        </figcaption>
      </figure>
      <p>
        같이 일하던 직장동료에게 들었던 평입니다.
        <br />
        저는 직접 키우고 성장하는 RPG 게임을 좋아합니다.
        <br />
        저는 계획세워서 진행하는 것을 좋아하는 ISFJ 입니다.
        <br />
        좋아하는 음식은 덮밥처럼 간단히 먹을 수 있는 음식입니다.
        <br />
        남을 챙겨주고 공감받는 것을 좋아합니다.
        <br />
        웹을 좋아하고 코딩도 좋아하고 코드 더러워지는건 못참는 편입니다.
        <br />
      </p>
      <Nav />
    </main>
  );
}
