/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import logomg01 from "../../content/assets/logo-mg-01.svg"

const Header = ({ pages, backgroundColor, textColor, fromColor, colors, currentSlide, currentPage }) => {


  function getImg(classname) {
    if (backgroundColor === "bg-negro" || backgroundColor === "bg-naranja") {
      return (<img className={classname} src={logomg01} alt="Magnesium.coop logo"/>)

    } else {
      return (<img className={classname} style={{ filter: "invert(100%)" }} src={logomg01} alt="Magnesium.coop logo"/>)

    }
  }

  function getMenuItem(anchor, title) {
    const classActive = anchor === currentPage.anchor ? "active" : ""
    return (
      <li key={"menu-" + anchor} className={"nav-item flex justify-end lg:justify-start " + classActive}
          data-menuanchor={anchor}>
        <div className="flex pb-1 lg:pb-2">
          <div
            className={"order-2 md:order-1 ml-2 mr-0 md:ml-0 md:mr-2 indicator invisible border-solid border-l-2 my-auto h-full " + classActive + " " + currentSlide.borderColor}/>
          <a className={"order-1 md:order-2 self-end  no-underline leading-snug  hover:opacity-75 " + textColor}
             href={"#" + anchor}>
            {title}
          </a>
        </div>
      </li>
    )
  }

  return (
    <header className={"fixed top-0 z-40 w-screen font-mgbook text-l " + colors.headerBackground}
            id="header-principal">
      <nav
        className={"w-auto flex justify-between px-5 py-4 lg:flex-col lg:px-10 lg:pt-10"}>
        <div className="flex items-center lg:pl-3">
          <a href={"#" + pages[0].anchor}>{getImg("fill-current w-40")}</a>
        </div>
        <div className="flex-grow"></div>
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
