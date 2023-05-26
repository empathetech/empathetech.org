import React from "react"
import styles from "@/styles/page.module.css"
import { TextBlock, CodeOfConduct } from "@/components"
import Link from 'next/link';

export default function codeOfConduct() {
  return (
    <>
      <Link href="/">Home</Link>
      <TextBlock>
        <CodeOfConduct />
      </TextBlock>
    </>
  )
} 