import styles from "./components/Header/header.module.scss";

type PageData = {
  className: string;
  subtitle: string;
};

type PagesData = { [key: string]: PageData };

const pagesData: PagesData = {
  "/": {
    className: styles.main,
    subtitle: "Главное",
  },
  "/cinema": {
    className: styles.cinema,
    subtitle: "Кино",
  },
  "/church": {
    className: styles.church,
    subtitle: "Храм",
  },
};

export { pagesData };
