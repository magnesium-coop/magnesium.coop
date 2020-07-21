/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby" // to query for image data

const HeaderIndicator = ({location}) => {

  return (

    <header className="w-full top-0 z-70 absolute" id="header-principal">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-tranparent rounded">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">

              </div>
              <div className="flex lg:flex-grow items-center" id="example-navbar-info">
                <ul id="menu-principal" className="flex flex-col lg:flex-row list-none ml-auto">
                  <li className="nav-item " data-menuanchor="que-hacemos">

                  </li>
                  <li className="nav-item" data-menuanchor="nosotros">

                  </li>
                  <li className="nav-item" data-menuanchor="blog">

                  </li>
                  <li className="nav-item" data-menuanchor="proyectos">

                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </header>
  )
}

export default HeaderIndicator
