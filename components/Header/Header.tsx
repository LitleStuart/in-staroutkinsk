import styles from "./header.module.scss";
import Subtitle from "./Subtitle";

const Header = () => {
  return (
    <header>
      <h1 className={styles.subtitle}>
        В Староуткинске
        <br />
        <Subtitle />
      </h1>
    </header>
  );
};

export default Header;
