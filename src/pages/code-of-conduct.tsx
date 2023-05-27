import Head from "next/head"
import React from "react"
import styles from "@/styles/page.module.css"
import { TextBlock, CodeOfConductText } from "@/components"

export default function CodeOfConduct() {
  return (
    <>
      <Head>
        <title>Empathetech Code of Conduct</title>
        <meta name="description" content="Code of Conduct for Empathetech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <TextBlock>
          <CodeOfConductText />
        </TextBlock>

      </main>
    </>
  )
} 