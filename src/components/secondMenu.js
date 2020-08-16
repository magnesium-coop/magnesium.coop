/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

const SecondMenu = ({ currentPage, currentSlide, colors }) => {


  function getMenuItem(anchor, title) {
    const classActive = anchor === currentSlide.anchor ? "active" : ""
    if (title) {
      return (
        <li key={"menu-" + anchor} className={"nav-item flex " + classActive}
            data-menuanchor={anchor}>
          <a
            className={"self-end lg:px-3 py-1 no-underline leading-snug uppercase hover:opacity-75 " + colors.textColor}
            href={"#" + anchor}>
            {title}
          </a>
        </li>
      )
    } else {
      return null
    }
  }

  return (
    <footer className={"fixed bottom-0 z-40 w-screen font-mgbook "+colors.backgroundColor} id="menu-secundario">
      <nav className={"w-auto flex px-5 py-4"}>
        <ul id="ul-menu-secundario" className="w-full md:w-50 flex text-xs list-none justify-around md:justify-start pl-0">
          {
            currentPage.slides.map(({ anchor, title }) => (
              getMenuItem(anchor, title)
            ))
          }
        </ul>
        <div>
        </div>
      </nav>
    </footer>
  )
}

export default SecondMenu
