import React from "react"
import styles from "./layout.module.css"
import { NavigationBar } from "../navigationBar/NavigationBar"
import { Footer } from "../footer/Footer"

type PropsType = {
	children: React.ReactNode
	isHomePage?: boolean
}

export const Layout: React.FC<PropsType> = ({ children }) => {
	return (
		<>
			<NavigationBar />
			<main className={styles.main}>{children}</main>
			<Footer />
		</>
	)
}
