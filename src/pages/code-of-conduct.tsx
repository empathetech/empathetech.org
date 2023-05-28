import Head from "next/head"
import React from "react"
import { TextBlock, CodeOfConductText } from "@/components"

export default function CodeOfConduct() {
	return (
		<>
			<Head>
				<title>Code of Conduct</title>
				<meta name="description" content="Empathetech's core values" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1>{"Code of Conduct"}</h1>
			<TextBlock>
				<CodeOfConductText />
			</TextBlock>
		</>
	)
}
