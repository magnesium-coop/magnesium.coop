/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby" // to query for image data
import magnesiumnegro from "../../content/assets/magnesium-negro.png"

const Header = ({ location, color }) => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "magnesium-negro.png" }) {
      childImageSharp {
        fluid(maxWidth:100){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

  return (
    <header>
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-tranparent rounded">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <a className="w-1/2 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase" href="#pablo">
                  <img src={magnesiumnegro}/>
                </a>
                <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid rounded text-black block lg:hidden outline-none focus:outline-none" type="button">
                  <span className="block relative w-6 h-px rounded-sm"></span>
                  <span className="block relative w-6 h-px rounded-sm mt-1"></span>
                  <span className="block relative w-6 h-px rounded-sm mt-1"></span>
                </button>
              </div>
              <div className="flex lg:flex-grow items-center" id="example-navbar-info">
                <ul className="flex flex-col lg:flex-row list-none ml-auto" id="hola">
                  <li className="nav-item active:bg-blue-700" data-menuanchor="#que-hacemos">
                    <a className="px-3 py-2 flex items-center  font-bold leading-snug hover:opacity-75 active:bg-blue-700" href="#que-hacemos" >
                      Qué hacemos
                    </a>
                  </li>
                  <li className="nav-item active:bg-blue-700" data-menuanchor="#nosotros">
                    <a className="px-3 py-2 flex items-center font-bold leading-snug  hover:opacity-75 active:bg-blue-700" href="#nosotros" >
                      Nosotros
                    </a>
                  </li>
                  <li className="nav-item active:bg-blue-700" data-menuanchor="#blog">
                    <a className="px-3 py-2 flex items-center  font-bold leading-snug  hover:opacity-75 active:bg-blue-700" href="#blog" >
                      Blog
                    </a>
                  </li>
                  <li className="nav-item active:bg-blue-700" data-menuanchor="#blog">
                    <a className="px-3 py-2 flex items-center  font-bold leading-snug  hover:opacity-75 active:bg-blue-700" href="#blog" >
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
