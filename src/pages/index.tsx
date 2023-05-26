import Head from "next/head"
import styles from "@/styles/page.module.css"
import { Header, LinkButton, SplashText, TextBlock } from "@/components"
import { SlackIcon } from "@/assets/svg"
import Link from "next/link"

export default function Home() {
	return (
		<>
		<Link href="/code-of-conduct">{"Code of Conduct"}</Link>
			<Head>
				<title>Empathetech</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<Header subTitle={"A hug-o-tron community. Beep beep boop boop."} />
				<div className={styles.buttonWrapper}>
					<LinkButton
						link="https://join.slack.com/t/empathetech/shared_invite/zt-1vocficwm-UywQkATY27UXIce8eU3onA"
						isExternal
					>
						{"Join our Slack"}
						<div className={styles.iconWrapper}>
							<SlackIcon height={28} width={28} />
						</div>
					</LinkButton>
				</div>

				<TextBlock>
					<SplashText />
				</TextBlock>


			</main>
		</>
	)
}
