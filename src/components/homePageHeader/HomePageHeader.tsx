import React from "react"
import styles from "./homePageHeader.module.css"
import { EmpathetechIcon } from "@/assets/svg"

type PropsType = {
	subTitle?: string
}

export const HomePageHeader: React.FC<PropsType> = ({ subTitle }) => {
	return (
		<div className={styles.wrapper}>
			<EmpathetechIcon />
			{subTitle && <p className={styles.subTitle}>{subTitle}</p>}
		</div>
	)
}
