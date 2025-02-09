import clsx from "clsx";
import React from "react";
import styles from "./AppLogo.module.scss";

export type AppLogoProps = React.HTMLAttributes<HTMLDivElement>;

export default function AppLogo({ className, ...props }: AppLogoProps) {
	return <div className={clsx(styles.wrapper, className)} {...props} />;
}
