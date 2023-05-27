import Link from "next/link";
import styles from "./navigationBar.module.css"
import { LinkButton } from "../linkButton/LinkButton";


export const NavigationBar: React.FC  = () => {

  return (
    <nav className={styles.navigationBar}>

      <Link href="/">
        <LinkButton>Home</LinkButton>
      </Link>

      <Link href="/code-of-conduct">
        <LinkButton>Code of Conduct</LinkButton>
      </Link>

      <Link href={"/events"}>
        <LinkButton>Events</LinkButton>
      </Link>

    </nav>
  );
};
