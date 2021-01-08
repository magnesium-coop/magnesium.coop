/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Image from "gatsby-image"
import { FaRegEnvelope } from "react-icons/fa"
import { FiGitlab, FiTwitter } from "react-icons/fi"
import { IconContext } from "react-icons"


const Bio = (data) => {
  let author = data.author.frontmatter
  if (author) {
    return (
      <div className="h-20 flex content-center">
        <Image
          fluid={author.profilepicture.childImageSharp.fluid}
          alt={author.name}
          className="w-20"
          imgStyle={{
            borderRadius: `50%`,
            width: `100%`,
            height: `100%`
          }}
        />
        <div className="my-auto w-8/12 ml-5">
          <p className="my-auto">
            Escrito por <strong>{author.name}</strong>
          </p>
          <p>
            {author.bio}
          </p>
          <IconContext.Provider value={{ color: "#f25c4a", className: "mt-1 mx-1 text-xs lg:text-sm" }}>
            <div className="flex items-center">
              <div>
                <a href={"mailto:" + author.email} className={"no-underline"}>
                  <FaRegEnvelope/>
                </a>
              </div>
              <div>
                {author.twitter &&
                <a href={author.twitter}>
                  <FiTwitter/>
                </a>
                }
              </div>
              <div>
                {author.gitlab &&
                <a href={author.gitlab}>
                  <FiGitlab/>
                </a>
                }
              </div>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Bio
