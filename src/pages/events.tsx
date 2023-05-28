import Head from "next/head"
import React from "react"
import styles from "@/styles/page.module.css"
import { Calendar } from "@/components"

export default function Example() {
	return (
		<>
			<Head>
				<title>Events</title>
				<meta name="description" content="Empathetech events calendar" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1>{"Events"}</h1>
			<Calendar />
		</>
	)
}
