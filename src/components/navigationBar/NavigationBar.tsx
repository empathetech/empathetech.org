import NavLink from "next/link"
import styles from "./navigationBar.module.css"
import { NextRouter, useRouter } from "next/router"

type PageType = {
	path: string
	name: string
}
export const HOME_PAGE_NAME: string = "Home"
export const HOME_PAGE_PATH: string = "/"
export const CODE_OF_CONDUCT_PAGE_NAME: string = "Code of Conduct"
export const CODE_OF_CONDUCT_PAGE_PATH: string = "/code-of-conduct"
export const EVENTS_PAGE_NAME: string = "Events"
export const EVENTS_PAGE_PATH: string = "/events"

const pages: PageType[] = [
	{
		path: HOME_PAGE_PATH,
		name: HOME_PAGE_NAME,
	},
	{
		path: EVENTS_PAGE_PATH,
		name: EVENTS_PAGE_NAME,
	},
	{
		path: CODE_OF_CONDUCT_PAGE_PATH,
		name: CODE_OF_CONDUCT_PAGE_NAME,
	},
]

export const NavigationBar: React.FC = () => {
	const router: NextRouter = useRouter()
	return (
		<nav className={styles.navigationBar}>
			<ul className={styles.navigationList}>
				{pages.map((page: PageType) => {
					const isActive: boolean = router.pathname === page.path
					const linkClassName: string = isActive
						? `${styles.activeLink} ${styles.link}`
						: styles.link
					return (
						<li key={page.name}>
							<NavLink className={linkClassName} href={page.path}>
								{page.name}
							</NavLink>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
