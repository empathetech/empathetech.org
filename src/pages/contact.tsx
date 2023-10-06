import Head from "next/head"
import React, { useState } from "react"
import styles from "@/styles/page.module.css"
import { Button, Calendar, FormInput, TextAreaInput } from "@/components"

export default function Contact() {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")

	const onSubmit = () => {
		console.log("submit functionality to go here")
	}

	return (
		<>
			<Head>
				<title>Contact</title>
				<meta name="description" content="Empathetech events calendar" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1>{"Contact"}</h1>
			<div>
				<FormInput
					label="Name"
					placeholder="Name"
					onChange={(e) => setName(e.value)}
				/>
				<FormInput
					label="Email"
					placeholder="Email"
					onChange={(e) => setEmail(e.value)}
					isRequired
				/>
				<TextAreaInput
					label="Message"
					placeholder="Message"
					onChange={(e) => setMessage(e.value)}
					id="message"
				/>
				<Button onClick={onSubmit}>Submit</Button>
			</div>
		</>
	)
}
