import React from "react"
import styles from "./textBlock.module.css"

type PropsType = {
	children: React.ReactNode
}

export const TextBlock: React.FC<PropsType> = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>
}
