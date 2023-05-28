import Head from "next/head"
import styles from "@/styles/page.module.css"
import {
	AboutEmpathetechText,
	HomePageHeader,
	LinkButton,
	TextBlock,
} from "@/components"

import { SlackIcon } from "@/assets/svg"

export const TAGLINE = "A hug-o-tron community. Beep beep boop boop."

export default function Home() {
	return (
		<>
			<Head>
				<title>{"Empathetech"}</title>
				<meta name="description" content={TAGLINE} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HomePageHeader subTitle={TAGLINE} />
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
				<AboutEmpathetechText />
			</TextBlock>
		</>
	)
}
