import Head from "next/head"
import React from "react"
import styles from "@/styles/page.module.css"
import { TextBlock, CodeOfConductText } from "@/components"
import Link from 'next/link';

export default function CodeOfConduct() {
  return (
    <>

      <Head>
        <title>Empathetech Code of Conduct</title>
        <meta name="description" content="Code of conduct for empathetech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <ul className={styles.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>

      <main className={styles.main}>

        <TextBlock>
          <CodeOfConductText />
        </TextBlock>

      </main>
    </>
  )
} 