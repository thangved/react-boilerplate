import Logo from "../Logo";
import styles from "./FirstLoader.module.scss";

export default function FirstLoader() {
	return (
		<div className={styles.wrapper}>
			<Logo className={styles.logo} />
		</div>
	);
}
