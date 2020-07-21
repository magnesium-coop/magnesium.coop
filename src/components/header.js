/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby" // to query for image data
import logomg01 from "../../content/assets/logo-mg-01.svg"

const Header = ({ location, backgroundColor, color }) => {

  function getImg() {
    if (backgroundColor !== "negro") {
      return (<img style={{ filter: "invert(100%)" }} src={logomg01}/>)
    } else {
      return (<img src={logomg01}/>)
    }
  }

  return (

    <header>
      <nav className="">
        <div className="flex items-center justify-between m-5">
          <div className="w-64">
            {getImg()}
        </div>
        <button
          className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid rounded block lg:hidden outline-none focus:outline-none"
          type="button">
          <span className="block relative w-6 h-px rounded-sm"></span>
          <span className="block relative w-6 h-px rounded-sm mt-1"></span>
          <span className="block relative w-6 h-px rounded-sm mt-1"></span>
        </button>
        <div className="flex lg:flex-grow items-center" id="example-navbar-info">
          <ul id="menu-principal" className="flex flex-col lg:flex-row list-none ml-auto">
            <li className="nav-item" data-menuanchor="que-hacemos">
              <a className={"px-3 py-2 flex items-center no-underline leading-snug hover:opacity-75 text-" + color}
                 href="#que-hacemos">
                Qué hacemos
              </a>
            </li>
            <li className="nav-item" data-menuanchor="nosotros">
              <a className={"px-3 py-2 flex items-center no-underline leading-snug  hover:opacity-75 text-" + color}
                 href="#nosotros">
                Nosotros
              </a>
            </li>
            <li className="nav-item" data-menuanchor="blog">
              <a className={"px-3 py-2 flex items-center  no-underline leading-snug  hover:opacity-75 text-" + color}
                 href="#blog">
                Blog
              </a>
            </li>
            <li className="nav-item" data-menuanchor="proyectos">
              <a className={"px-3 py-2 flex items-center  no-underline leading-snug  hover:opacity-75 text-" + color}
                 href="#proyectos">
                Proyectos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</header>
)
}

export default Header
