import Link from "next/link";

export const NavigationBar: React.FC  = () => {

  return (
    <nav className="">

      <Link href="/">
        <li>Home</li>
      </Link>

      <Link href="/code-of-conduct">
        <li>Code of Conduct</li>
      </Link>

      <Link href={"/events"}>
        <li>Events</li>
      </Link>
      
    </nav>
  );
};
