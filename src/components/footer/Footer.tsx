import styles from "./footer.module.css"
import React from "react"

export const Footer: React.FC = () => {

  return (
    <>
      <footer className={styles.footer}> <small>&copy; Copyright 2023, Empathetech</small> </footer>
    </>
  )
};