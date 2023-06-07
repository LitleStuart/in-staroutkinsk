"use client";

import styles from "./header.module.scss";
import React from "react";
import { usePathname } from "next/navigation";

const getClassNameByPath = (pathname: string) => {
  if (pathname === "/") return styles.main;
  return styles[pathname.replace("/", "")];
};

const getSubtitleByPath = (pathname: string) => {
  switch (pathname) {
    case "/":
      return "Главное";
    case "/cinema":
      return "Кино";

    default:
      return "";
  }
};

const Subtitle = () => {
  const pathname = usePathname();
  return (
    <span className={getClassNameByPath(pathname)}>
      {getSubtitleByPath(pathname)}
    </span>
  );
};

export default Subtitle;
