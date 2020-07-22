/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import logomg01 from "../../content/assets/logo-mg-01.svg"

const Header = ({ pages, anchor, backgroundColor, textColor }) => {

  const [isExpanded, toggleExpansion] = useState(false)

  function getImg(classname) {
    if (backgroundColor !== "negro") {
      return (<img className={classname} style={{ filter: "invert(100%)" }} src={logomg01} alt="Magnesium.coop logo"/>)
    } else {
      return (<img className={classname} src={logomg01} alt="Magnesium.coop logo"/>)
    }
  }

  function getMenuItem(anchor, title) {
    return (
      <li className="nav-item" data-menuanchor={anchor}>
        <a className={"px-3 py-2 flex items-center no-underline leading-snug  hover:opacity-75 text-" + textColor}
           href={"#" + anchor}>
          {title}
        </a>
      </li>
    )
  }

  return (

    <header className={"absolute top-0 w-full z-40 font-mgbook text-l bg-transparent"} id="header-principal">
      <nav className={"flex items-center justify-between flex-wrap pr-20 pl-20 pt-12"}>
        <div className="flex items-center flex-shrink-0">
          {getImg("fill-current w-48")}
        </div>
        <div className="block lg:hidden">
          <button onClick={() => toggleExpansion(!isExpanded)}
                  className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>
        <div className={`${isExpanded ? `block` : `hidden`} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
          <ul id="menu-principal" className="flex flex-col lg:flex-row list-none ml-auto">

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
