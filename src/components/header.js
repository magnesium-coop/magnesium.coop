/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import logomg01 from "../../content/assets/logo-mg-01.svg"

const Header = ({ pages, backgroundColor, textColor }) => {

  const [isExpanded, toggleExpansion] = useState(false)

  function getImg(classname) {
    if (backgroundColor !== "bg-negro") {
      return (<img className={classname} style={{ filter: "invert(100%)" }} src={logomg01} alt="Magnesium.coop logo"/>)
    } else {
      return (<img className={classname} src={logomg01} alt="Magnesium.coop logo"/>)
    }
  }

  function getMenuItem(anchor, title) {
    return (
      <li key={"menu-" + anchor} className="nav-item flex justify-end lg:justify-start" data-menuanchor={anchor}>
          <a className={"self-end lg:px-3 py-1 no-underline leading-snug  hover:opacity-75 " + textColor}
             href={"#" + anchor}>
            {title}
          </a>
      </li>
    )
  }

  return (
    <header className={"fixed top-0 z-40 w-screen font-mgbook text-l h-32 md:h-36 lg:h-40 "} id="header-principal">
      <nav
        className={"w-full flex justify-between lg:flex-col px-5 py-4 md:pl-16 md:pt-10 md:pr-16 lg:pr-20 lg:pl-20 lg:pt-12"}>
        <div className="flex items-center lg:pl-3">
          <a href={"#" + pages[0].anchor}>{getImg("fill-current w-40 lg:w-48")}</a>
        </div>
        <div className="lg:flex lg:mt-5 text-xs lg:text-sm">
          <ul id="menu-principal" className="flex flex-col list-none pl-0">
            {
              pages.map(({ anchor, title }) => (
                getMenuItem(anchor, title)
              ))
            }
          </ul>
          <div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
