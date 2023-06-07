import "../styles/globals.scss";
import styles from "../styles/body-container.module.scss";
import { Roboto } from "next/font/google";
import Header from "@/components/Header/Header";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["cyrillic", "latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "В Староуткинске",
  description: "Что в Староуткинске?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <div className={styles.container}>
          <Header />
          <Link href="/">Главное</Link>
          <Link href="/cinema">Кино</Link>
          {children}
        </div>
      </body>
    </html>
  );
}
