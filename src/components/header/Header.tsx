import React from "react"
import styles from "./header.module.css"

type PropsType = {
	subTitle?: string
}

export const Header: React.FC<PropsType> = ({ subTitle }) => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Empathetech</h1>
			{subTitle && <p className={styles.subTitle}>{subTitle}</p>}
		</div>
	)
}
