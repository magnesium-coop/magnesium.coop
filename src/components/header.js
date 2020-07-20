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

      <nav className="flex items-center justify-between flex-wrap bg-transparent p-6">
        <div className="w-1/6 flex items-center flex-shrink-0">
          <img  src={magnesiumnegro}/>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>
        <div id="menu-principal" className="w1/6 block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#que-hacemos" data-menuanchor="que-hacemos"
               className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Qué Hacemos
            </a>
            <a href="#nosotros" data-menuanchor="nosotros"
               className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Nosotros
            </a>
            <a href="#blog" data-menuanchor="blog"
               className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Blog
            </a>
            <a href="#responsive-header"
               className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Proyectos
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
