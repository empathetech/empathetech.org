import React from "react"
import styles from "./gitHubLink.module.css"

type Props = {
	link: string
}

export const GITHUB_BUTTON_TITLE: string = "Built by MJB 🤸‍♀️"

export const GitHubLink: React.FC<Props> = ({ link }) => {
	return (
		<a href={link} aria-label="Visit the GitHub repository">
			<button className={styles.button} role={"link"}>
				{GITHUB_BUTTON_TITLE}
			</button>
		</a>
	)
}
