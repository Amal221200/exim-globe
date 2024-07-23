"use client"
import "./styles.scss";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { navLinks, productLinks } from "@/lib/constants";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false)
  const [subNavOpen, setSubNavOpen] = useState(false)
  const pathname = usePathname()

  const toggleOpen = () => {
    setOpen(current => !current)
  }

  const onClose = () => {

    setOpen(false)
    setSubNavOpen(false)
  }

  return (
    <header>
      <div id="header-top">
        <div id="header-logo">
          <Link href={'/'}>
            <div className="image">
              <img src="/assets/logo.png" alt="" />
            </div>
          </Link>
        </div>

        <nav id="desktop-nav">
          {
            navLinks.map(({ link, label }) => (
              <div key={link} className={`nav-link ${(link === pathname || pathname.includes(link.slice(1) || '_')) ? 'active' : ""}`}>
                <Link onClick={onClose} href={link}>
                  <span>{label}  {link === '/products' && <ChevronDown size={17} />}</span>
                </Link>
                {
                  link === '/products' && (
                    <nav className="sub-nav">
                      {
                        productLinks.map(({ label, link }) => (
                          <Link href={link} key={link} className={`sub-nav-link ${link === pathname ? 'active' : ""}`}>
                            {label}
                          </Link>
                        ))
                      }
                    </nav>
                  )
                }
              </div>
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
            navLinks.map(({ link, label }) => (
              <li key={link} className={`nav-link ${(link === pathname || pathname.includes(link.slice(1) || '_')) ? 'active' : ""}`}>
                <span>
                  <Link onClick={onClose} href={link}>{label}</Link>
                  {
                    link === '/products' &&
                    <ChevronDown onClick={() => setSubNavOpen(current => !current)} size={17} style={{ cursor: 'pointer' }} />
                  }
                </span>
                <nav className="sub-nav">
                  {
                    (link === '/products' && subNavOpen) && productLinks.map(({ label, link }) => (
                      <Link href={link} onClick={onClose} key={link} className={`sub-nav-link ${link === pathname ? 'active' : ""}`} >
                        <ChevronRight size={15} /> {label}
                      </Link>
                    ))
                  }
                </nav>
              </li>
            ))
          }
        </ul>
      </div>
    </header>
  )
}

export default Header