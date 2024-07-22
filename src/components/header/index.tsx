"use client"
import "./styles.scss";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronDownCircle, ChevronRight, MenuIcon, XIcon } from "lucide-react";
import { Fragment, useState } from "react";
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
          <div className="image">
            <img src="/assets/logo.png" alt="" />
          </div>
        </div>

        <nav id="desktop-nav">
          {
            navLinks.map(({ link, label }) => (
              <div key={link} className={`nav-link ${link === pathname ? 'active' : ""}`}>
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
              <Fragment key={link}>
                <li className={`nav-link ${link === pathname ? 'active' : ""}`}>
                  <Link onClick={onClose} href={link}>{label}</Link> {link === '/products' && <ChevronDown onClick={()=>setSubNavOpen(current => !current)} size={17} style={{ cursor: 'pointer' }} />}
                </li>
                <nav className="sub-nav">
                  {
                    (link === '/products' && subNavOpen) && productLinks.map(({ label, link }) => (
                      <Link href={link} onClick={onClose} key={link} className="sub-nav-link" >
                        <ChevronRight size={15} /> {label}
                      </Link>
                    ))
                  }
                </nav>
              </Fragment>
            ))
          }
        </ul>
      </div>
    </header>
  )
}

export default Header