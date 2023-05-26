import React from "react"
import styles from "./button.module.css"

export enum RoleTypeMap {
	LINK = "link",
	BUTTON = "button",
}

type Props = {
	children: string | React.ReactNode
	role?: RoleTypeMap.BUTTON | RoleTypeMap.LINK
	onClick?: () => void
}

export const Button: React.FC<Props> = ({
	children,
	role = RoleTypeMap.BUTTON,
	onClick,
}) => {
	return (
		<button className={styles.button} role={role} onClick={onClick}>
			{children}
		</button>
	)
}
