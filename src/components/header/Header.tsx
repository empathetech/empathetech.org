import React from "react"
import styles from "./header.module.css"

type PropsType = {
	title: string
	subTitle?: string
}

export const Header: React.FC<PropsType> = ({ subTitle, title }) => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>{title}</h1>
			{subTitle && <p className={styles.subTitle}>{subTitle}</p>}
		</div>
	)
}
