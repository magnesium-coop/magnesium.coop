/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import logomg01 from "../../content/assets/logo-mg-01.svg"

const SecondMenu = ({ currentPage, currentSlide }) => {


  function getMenuItem(anchor, title) {
    const classActive = anchor === currentSlide.anchor ? 'active' : '';
    if (title) {
      return (
        <li key={"menu-" + anchor} className={"nav-item flex justify-end lg:justify-start "+classActive} data-menuanchor={anchor}>
          <a className={"self-end lg:px-3 py-1 no-underline leading-snug uppercase hover:opacity-75 " + currentSlide.textColor}
             href={"#" + anchor}>
            {title}
          </a>
        </li>
      )
    } else {
      return null;
    }
  }

  return (
    <header className={"fixed bottom-0 z-40 w-screen font-mgbook text-l "} id="menu-secundario">
      <nav
        className={"w-auto flex justify-between lg:flex-col px-5 py-4"}>

        <div className="lg:flex lg:mt-5 text-xs">
          <ul id="ul-menu-secundario" className="flex list-none pl-0">
            {
              currentPage.slides.map(({ anchor, title }) => (
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

export default SecondMenu
