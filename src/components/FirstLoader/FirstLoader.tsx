import AppLogo from "../AppLogo";
import styles from "./FirstLoader.module.scss";

export default function FirstLoader() {
  return (
    <div className={styles.wrapper}>
      <AppLogo className={styles.logo} />
    </div>
  );
}
