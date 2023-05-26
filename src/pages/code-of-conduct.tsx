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
        <meta name="description" content="code of conduct for empathetech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <TextBlock>
          <CodeOfConductText />
        </TextBlock>

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>

      </main>
    </>
  )
} 