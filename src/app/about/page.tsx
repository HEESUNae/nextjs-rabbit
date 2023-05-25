import React from "react";

import styles from "./about.module.scss";

import Nav from "../../components/Nav/Nav";

export default function About() {
  return (
    <div className={styles.main}>
      <Nav />

      <q>웹디자인부터 프론트엔드까지</q>
      <p>
        저는 웹에이전시에서 웹디자인과 퍼블리싱을 했습니다.
        <br />
        학원에서 퍼블리싱을 배우고 적성에 맞아 시작하게 되었습니다.
        <br />
        지금은 퍼블리싱 뿐만 아니라 프론트엔드에도 관심이 생겼습니다.
        <br />
      </p>
    </div>
  );
}
