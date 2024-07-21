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
  
  return (
    <header>
      <div id="header-top">
        <div id="header-logo">
          <div className="image">
         { /* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.png" alt="" />
          </div>
          <h6><span>EXIM</span> GLOBAL</h6>
        </div>

        <nav id="desktop-nav">
          {
            navLinks.map(link => (
              <Link key={link.link} className={`nav-link ${link.link === pathname ? 'active' : ""}`} href={link.link}>
                <span>{link.label}</span>
              </Link>
            ))
          }
        </nav>
        <Link href="/contact-us" className="btn btn-primary">
          GET A QUOTE
        </Link>

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
              <li key={link.link} className={`nav-link ${link.link === pathname ? 'active' : ""}`}>
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