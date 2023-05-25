"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Nav.module.scss";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className={pathname === "/" ? styles.navColumn : styles.navRow}>
      <div className={styles.navWrap}>
        <Link href={"/about"}>
          <button>
            <Image src="/assets/icon/icon-city.svg" alt="" width={30} height={30} priority />
          </button>
        </Link>
        <Link href={"/about"}>
          <button>
            <Image src="/assets/icon/icon-code.svg" alt="" width={31} height={31} priority />
          </button>
        </Link>
        <Link href={"/about"}>
          <button>
            <Image src="/assets/icon/icon-game.svg" alt="" width={31} height={31} priority />
          </button>
        </Link>
        <Link href={"/about"}>
          <button>
            <Image src="/assets/icon/icon-heart.svg" alt="" width={28} height={28} priority />
          </button>
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
