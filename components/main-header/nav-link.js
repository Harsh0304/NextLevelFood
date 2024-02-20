"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./main-header.module.css";

const NavLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link href={href} className={path === href ? `${styles.active}` : null}>
      {children}
    </Link>
  );
};

export default NavLink;
