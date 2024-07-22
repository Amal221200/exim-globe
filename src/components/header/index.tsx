"use client"
import "./styles.scss";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/lib/constants";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const toggleOpen = () => {
    setOpen(current => !current)
  }
  const onClose = () => {
    setOpen(false)
  }

  return (
    <header>
      <div id="header-top">
        <div id="header-logo">
          <div className="image">
            <img src="/assets/logo.png" alt="" />
          </div>
        </div>

        <nav id="desktop-nav">
          {
            navLinks.map(link => (
              <Link key={link.link} onClick={onClose} className={`nav-link ${link.link === pathname ? 'active' : ""}`} href={link.link}>
                <span>{link.label}</span>
              </Link>
            ))
          }
        </nav>

        <button type="button" id="nav-btn" onClick={toggleOpen}>
          {
            open ?
              <XIcon />
              :
              <MenuIcon />
          }
        </button>
      </div>
      <div id={`header-bottom`} className={`${open ? 'active' : ''}`}>
        <ul id={`mobile-nav`}>
          {
            navLinks.map(link => (
              <li key={link.link} onClick={onClose} className={`nav-link ${link.link === pathname ? 'active' : ""}`}>
                <Link href={link.link}>{link.label}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </header>
  )
}

export default Header