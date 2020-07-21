/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import logomg01 from "../../content/assets/logo-mg-01.svg"

const Header = ({ location, backgroundColor, color }) => {

  const [isExpanded, toggleExpansion] = useState(false)

  function getImg(classname) {
    if (backgroundColor !== "negro") {
      return (<img className={classname} style={{ filter: "invert(100%)" }} src={logomg01}/>)
    } else {
      return (<img className={classname} src={logomg01}/>)
    }
  }

  return (

    <header>
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          {getImg("fill-current h-12 mr-2")}
        </div>
        <div className="block lg:hidden">
          <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className={`${ isExpanded ? `block` : `hidden` } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
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
          <div>
          </div>
        </div>
      </nav>
      {/*<nav className="">
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
    </nav>*/}
</header>
)
}

export default Header
